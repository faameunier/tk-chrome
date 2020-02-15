class MemoryManager {
  empty_win = {
    "total_tabs": 0,
    "tabs": {},
  };

  empty_tab = {
    "url": null,
    "statistics": {
      "total_active_time": null,
      "total_inactive_time": null,
      "last_active_timestamp": null,
      "updated_at": null
    },
    "pined": false,
    "active": false,
    "audible": false,
    "favIconUrl": null,
    "title": null
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
    if(!Object.keys(this.wins).includes(windowId.toString())){
      this.wins[windowId] = copy(this.empty_win);
      logger(this, 'Window ' + windowId + ' added to memory');
    }
  }

  async createTab(tab){
    if (typeof tab.id !== 'undefined'){
      let new_tab = copy(this.empty_tab);

      //TODO
      //new_tab.active = tab.active;
      //new_tab.statistics.last_active_timestamp = Date.now();

      new_tab.pinned = tab.pinned;
      if (typeof tab.url !== 'undefined') {
        // TODO (what impact on stats ?)
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
      this.tabs2wins[tab.id] = tab.windowId;
      this.wins[tab.windowId].tabs[tab.id] = new_tab;
      this.wins[tab.windowId].total_tabs += 1;

      logger(this, 'Tab ' + tab.id + ' added to memory');
    }
  }

  async changeWindow(tabId, windowId) {
    logger(this, "Tab assigned to new window");
    let oldWindowId = this.tabs2wins[tabId];
    this.wins[windowId].tabs[tabId] = copy(this.wins[oldWindowId].tabs[tabId]);
    await this.deleteTab(tabId, oldWindowId, false);
    this.tabs2wins[tabId] = windowId;
    this.wins[windowId].total_tabs += 1;
  }

  async updateTab(tabId, changes, tab) {
    logger(this, "Updating tab " + tabId);
    if(!Object.keys(this.tabs2wins).includes(tabId.toString())){
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
      // TODO (what impact on stats ?)
      stored_tab.url = getDomain(changes.url);
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
        logger(this, 'Hu ho, missing window in memory...');
        if (!isWindowClosing){
          await this.createWindow(windowId);
        } else {
          logger(this, 'Ignored, window is closing anyways');
        }
      } else {
        throw e;
      }
    }
  }
}

var memoryManager = new MemoryManager();