class MemoryManager {
  empty_win = {
    "total_tabs": 0,
    "active_tab": null,
    "tabs": {},
  };

  empty_stats = {
    "total_active_time": 0,
    "total_inactive_time": 0,
    "total_cached_time": 0,
    "last_active_timestamp": null,
    "activated": 0,
    "updated_at": null
  };

  empty_tab = {
    "url": null,
    "statistics": {},
    "pinned": false,
    "active": false,
    "audible": false,
    "favIconUrl": null,
    "title": null,
    "cache": []
  };

  constructor(){
    if(!MemoryManager.instance){
      logger(this, "Instanciating empty MemoryManager");
      MemoryManager.instance = this; 

      this.wins = {};
      this.tabs2wins = {};
      this.last_active_tab = null;
      this.current_active_tab = null; 

      this.closed_history = []; 

      //TODO relocate
      this.settings = {
        "memory" : {
          "cache_size": 5
        },
        "closer": {
          "target_tabs": 10,
          "score_threshold": 50,
          "decay": 0.8
        },
        "scorer": {
          "min_active": 10
        }
      }
    }
    return MemoryManager.instance;
  }

  async log() {
    if (ENV === 'dev') {
      console.log(this.wins);
    }
  }

  async createWindow(windowId) {
    if(!this.wins[windowId]){
      this.wins[windowId] = copy(this.empty_win);
      logger(this, 'Window ' + windowId + ' added to memory');
    }
  }

  async setActivated(tabId, windowId) {
    // window doesn't need to exist
    if(!this.tabs2wins[tabId]){
      logger(this, "Hu ho, unknown activated tab, ignored");
    } else {
      if (this.tabs2wins[tabId] !== windowId) { // when called from createTab, this cannot happen
        logger(this, "Hu ho, Tab is in wrong window");
        let old_window = this.tabs2wins[tabId];
        await this.createWindow(windowId);
        await this.changeWindow(tabId, windowId);
        if(this.wins[old_window]) {
          this.wins[old_window].active_tab = null;
        }
      }
      let win = this.wins[windowId];
      let old_active = win.active_tab;
      if(old_active) {
        await this.updateStatistics(win.tabs[old_active], false, false);
        win.tabs[old_active].active = false;
      }
      await this.updateStatistics(win.tabs[tabId], false, true);
      win.active_tab = tabId;
      win.tabs[tabId].active = true;
    }
  }

  async createTab(tab){
    // window should exist !
    if (typeof tab.id !== 'undefined'){
      let new_tab = copy(this.empty_tab);
      new_tab.cache = new LRU(this.settings.memory.cache_size)

      new_tab.pinned = tab.pinned;
      if (typeof tab.url !== 'undefined') {
        // No impact on stats until proven otherwise
        new_tab.url = getDomain(tab.url);
      }
      if (typeof tab.pinned !== 'undefined') {
        new_tab.pinned = tab.pinned;
      }
      if (typeof tab.audible !== 'undefined') {
        new_tab.audible = tab.audible;
      }
      if (typeof tab.favIconUrl !== 'undefined') {
        new_tab.favIconUrl = tab.favIconUrl;
      }
      if (typeof tab.title !== 'undefined') {
        new_tab.title = tab.title;
      }

      await this.createStatistics(new_tab);

      this.tabs2wins[tab.id] = tab.windowId;
      this.wins[tab.windowId].tabs[tab.id] = new_tab;
      this.wins[tab.windowId].total_tabs += 1;

      if(tab.active) {
        await this.setActivated(tab.id, tab.windowId);
      }

      logger(this, 'Tab ' + tab.id + ' added to memory');
    }
  }

  async changeWindow(tabId, windowId) {
    // windowId should exist before calling me
    logger(this, "Tab assigned to new window");
    if(!this.tabs2wins[tabId]){
      logger(this, "Missing tab found");
      await this.createTab({"id":tabId, "windowId": windowId});
      // missing tab is assigned to window and THAT'S IT
    } else {
      let oldWindowId = this.tabs2wins[tabId];
      var cache = this.wins[oldWindowId].tabs[tabId].cache
      this.wins[oldWindowId].tabs[tabId].cache = null
      this.wins[windowId].tabs[tabId] = copy(this.wins[oldWindowId].tabs[tabId]);
      this.wins[windowId].tabs[tabId].cache = cache // restore LRU
      await this.deleteTab(tabId, oldWindowId, false);
      this.tabs2wins[tabId] = windowId;
      if(this.wins[windowId]) {
        this.wins[windowId].total_tabs += 1;
      }
    } 
  }

  async updateTab(tabId, changes, tab) {
    logger(this, "Updating tab " + tabId);
    if(!this.tabs2wins[tabId]){
      logger(this, "Missing tab found");
      await this.createWindow(tab.windowId);
      await this.createTab(tab);
    }
    if (this.tabs2wins[tabId] !== tab.windowId) {
      logger(this, "Hu ho, Tab is in wrong window");
      await this.createWindow(tab.windowId);
      await this.changeWindow(tabId, tab.windowId);
    }
    let stored_tab = this.wins[tab.windowId].tabs[tabId];
    if (typeof changes.url !== 'undefined') {
      let new_url = getDomain(changes.url);
      let old_url = stored_tab.url;
      stored_tab.url = new_url;
      if(new_url !== old_url) {
        await this.updateStatistics(stored_tab, false, false);
        let old_statistics = stored_tab.statistics;
        let cached = stored_tab.cache.read(new_url);
        if (cached) {
          stored_tab.statistics = cached;
          await this.updateStatistics(stored_tab, true, false);
          logger(this, "Old state restored from cache");
        } else {
          await this.createStatistics(stored_tab);
          logger(this, "State couldn't be restored");
        }
        stored_tab.cache.write(old_url, old_statistics);
      }
    }
    if (typeof changes.pinned !== 'undefined') {
      stored_tab.pinned = changes.pinned;
    }
    if (typeof changes.audible !== 'undefined') {
      stored_tab.audible = changes.audible;
    }
    if (typeof changes.favIconUrl !== 'undefined') {
      stored_tab.favIconUrl = changes.favIconUrl;
    }
    if (typeof changes.title !== 'undefined') {
      stored_tab.title = changes.title;
    }
  }

  async deleteTab(tabId, windowId, isWindowClosing) {
    logger(this, 'Deleting tab ' + tabId);
    try {
      delete this.tabs2wins[tabId];
    } catch {
      logger(this, "Hu ho, what was that tab...")
    }
    try {
      delete this.wins[windowId].tabs[tabId];
      this.wins[windowId].total_tabs -= 1;
      if(this.wins[windowId].total_tabs < 0) {
        logger(this, 'Missing at least one tab in window ' + windowId);
        this.wins[windowId].total_tabs = 0;
      }
      if(this.wins[windowId].total_tabs === 0){
        logger(this, 'Window ' + windowId + ' is empty, deleting')
      delete this.wins[windowId];
      }
    } catch(e) {
      if(e instanceof TypeError) {
        logger(this, 'Hu ho, missing window in memory... Fefe decided to ignore.');
        // if (!isWindowClosing){
        //   await this.createWindow(windowId);
        // } else {
        //   logger(this, 'Ignored, window is closing anyways');
        // }
      } else {
        throw e;
      }
    }
  }

  async createStatistics(iTab){
    let tmp = copy(this.empty_stats);
    let now = Date.now();
    if(iTab.active) {
      tmp.last_active_timestamp = now;
      tmp.activated = 1;
    }
    tmp.updated_at = now;
    iTab.statistics = tmp;
  }

  async updateStatistics(iTab, fromCache=false, activitySwitch=false) {
    let now = Date.now();
    if(fromCache) {
      activitySwitch = true; // restored from cache is considered a reactivation
      iTab.statistics.total_cached_time += now - iTab.statistics.updated_at;
      iTab.statistics.updated_at = now; // protip
      iTab.statistics.activated += 1;
    } else {
       if(iTab.active) {
        iTab.statistics.total_active_time += now - iTab.statistics.updated_at;
        iTab.statistics.last_active_timestamp = now;
      } else {
        if(activitySwitch || iTab.statistics.activated === 0) {
          iTab.statistics.activated += 1;
        }
        iTab.statistics.total_inactive_time += now - iTab.statistics.updated_at;
      }
      iTab.statistics.updated_at = now;
    }
  }
}

var memoryManager = new MemoryManager();