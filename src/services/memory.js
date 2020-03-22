class MemoryManager {
  empty_stats = {
    "total_active_time": 0,
    "total_inactive_time": 0,
    "total_cached_time": 0,
    "last_active_timestamp": null,
    "activated": 0,
    "updated_at": null
  };

  empty_tab = {
    "tabId": null,
    "url": null,
    "statistics": {},
    "pinned": false,
    "active": false,
    "audible": false,
    "favIconUrl": null,
    "title": null,
    "windowId": null,
    "cache": []
  };

  constructor(){
    if(!MemoryManager.instance){
      logger(this, "Instanciating empty MemoryManager");
      MemoryManager.instance = this; 

      this.tabs = {};

      this.closed_history = []; 
      this.last_full_stats_update = Date.now();
      this.last_garbage_collector = Date.now();

      //TODO relocate ?
      this.settings = {
        "memory" : {
          "cache_size": 5,
          "min_time_full_stats_update": 1*1000,
          "min_time_garbage_collector": 5*60*1000
        },
        "policy": {
          "target_tabs": 10,
          "score_threshold": 50,
          "decay": 0.8,
          "min_time": 3*1000,
          "last_policy_runs": {}
        },
        "scorer": {
          "min_active": 3 * 1000,
          "cached_decay": 0.7
        }
      }
    }
    return MemoryManager.instance;
  }

  async reset() {
    this.tabs = {};
    this.closed_history = []; 
    this.last_full_stats_update = Date.now();
    await this.save();
    await this.load();
  }

  async save() {
    logger(this, 'Saved');
    await storageSet({
      "tabs": JSON.stringify(this.tabs),
      "closed_history": this.closed_history,
      "last_full_stats_update": this.last_full_stats_update});
  }

  async load() {
    await storageGet(['tabs', 'closed_history', 'last_full_stats_update']).then((data) => {
      try {
        logger(this, 'Loading state from storage');
        this.closed_history = data.closed_history;
        this.last_full_stats_update = data.last_full_stats_update;
        this.tabs = JSON.parse(data.tabs);
        for(let key of Object.keys(this.tabs)) {
          let tab = tabs[tabId];
          tab.cache = LRUfactory.fromJSON(tab.cache);
        }
      } catch {
        logger(this, 'Loading fail, init memory');
      }
    });
  }

  async log() {
    await this.updateAllStatistics();
    await this.cleanTabs();
    if (ENV === 'debug') {
      console.log(this.tabs);
    }
  }

  async setActivated(tabId, windowId) {
    if(!this.tabs[tabId]){
      logger(this, "OOS Unknown activated tab, creating shell");
      await this.createTab({'id':tabId, 'active':true, 'windowId': windowId});
      // createTab will call setActivated again.
      return null;
    }
    if (this.tabs[tabId].windowId !== windowId) { // when called from createTab, this cannot happen
      logger(this, "OOS Tab " + tabId + "is in wrong window");
      await this.changeWindow(tabId, windowId); // Setting to the tab to the current window
      // If tab wasn't active, no problem.
      // If tab was active... no problem neither :) then the active tab is unknown.
      // and stats will be updated right after.
    }

    let win = _.filter(Object.values(this.tabs), (tab) => {return tab.windowId == windowId});
    
    for (var i = 0; i < win.length; i++) {
      let tab = win[i];
      if (tab.active && (tab.tabId !== tabId)) {
        await this.updateStatistics(tab, false, false);
        tab.active = false;
      }
    };

    await this.updateStatistics(this.tabs[tabId], false, true);
    this.tabs[tabId].active = true;
  }

  async createTab(tab){
    if (typeof tab.id !== 'undefined'){
      let new_tab = copy(this.empty_tab);

      new_tab.tabId = tab.id;

      new_tab.pinned = tab.pinned;
      new_tab.windowId = tab.windowId;
      if (typeof tab.url !== 'undefined') {
        // No impact on stats until proven otherwise
        new_tab.url = getDomain(tab.url);
      }
      if (typeof tab.cache !== 'undefined') {
        // No impact on stats until proven otherwise
        new_tab.cache = tab.cache;
      } else {
        new_tab.cache = new LRU(this.settings.memory.cache_size)
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
      if (typeof tab.statistics !== 'undefined') {
        new_tab.statistics = tab.statistics;
      } else {
        await this.createStatistics(new_tab);
      }
      
      this.tabs[tab.id] = new_tab;

      if(tab.active) {
        await this.setActivated(tab.id, tab.windowId);
      }

      logger(this, 'Tab ' + tab.id + ' added to memory');
    }
  }

  async changeWindow(tabId, windowId) {
    // windowId should exist before calling me
    logger(this, "Tab assigned to new window");
    if(!this.tabs[tabId]){
      logger(this, "OOS Missing tab found");
      await this.createTab({"id":tabId, "windowId": windowId});
      // missing tab is assigned to window and THAT'S IT
    } else {
      this.tabs[tabId].windowId = windowId;
    } 
  }

  async updateTab(tabId, changes, tab) {
    logger(this, "Updating tab " + tabId);
    if(!this.tabs[tabId]){
      logger(this, "OOS Missing tab found");
      await this.createTab(tab);
    }
    if (this.tabs[tabId].windowId !== tab.windowId) {
      logger(this, "OOS tab in wrong window");
      await this.changeWindow(tabId, tab.windowId);
    }
    let stored_tab = this.tabs[tabId];
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
      delete this.tabs[tabId];
    } catch {
      logger(this, "OOS trying to delete unknown tab")
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

  async updateAllStatistics(){
    let now = Date.now();
    if((now - this.last_full_stats_update) >= this.settings.memory.min_time_full_stats_update) {
      logger(this, "Running full stats");
      var tab_ids = Object.keys(this.tabs);
      for (var i = 0; i < tab_ids.length; i++) {
        await this.updateStatistics(this.tabs[tab_ids[i]]);
      }
      this.last_full_stats_update = now;
    }
  }

  async cleanTabsDelay() {
    let now = Date.now();
    if((now - this.last_garbage_collector) >= this.settings.memory.min_time_garbage_collector) {
      await this.cleanTabs();
      this.last_garbage_collector = now;
    }
  }

  async cleanTabs() {
    var tab_ids = Object.keys(this.tabs);
    for(let i = 0; i < tab_ids.length; i++) {
      let tabId = tab_ids[i];
      try {
        let p = new Promise((resolve, reject) => {
          chrome.tabs.get(parseInt(tabId), function(tab) {
            if (chrome.runtime.lastError) {
              reject(false);
            } else {
              resolve();
            }
          });
        });
        await p;
      } catch {
        logger(this, "Tab " + tabId + " collected by garbage cleaner");
        await this.deleteTab(tabId);
      }
    }
  }
}

var memoryManager = new MemoryManager();