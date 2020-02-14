class MemoryManager {
  empty_win = {
    "total_tabs": 0,
    "tabs": {},
    "excess_tabs": 0,
  };

  empty_tab = {
    "url": null,
    "statistics": {
      "total_active_time": 0,
      "total_inactive_time": 0,
      "last_active_timestamp": 0
    },
    "score": 0,
    "pined": false,
    "active": false,
    "music": false
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

  async createWindow(windowId) {
    if(!Object.keys(this.wins).includes(windowId.toString())){
      this.wins[windowId] = copy(this.empty_win);
      logger(this, 'Window ' + windowId + ' added to memory');
    }
  }

  async createTab(tab){
    if (typeof tab.id !== 'undefined'){
      let new_tab = copy(this.empty_tab);
      new_tab.url = tab.url;

      //TODO
      //new_tab.active = tab.active;
      //new_tab.statistics.last_active_timestamp = Date.now();

      new_tab.pinned = tab.pinned;
      this.tabs2wins[tab.id] = tab.windowId;
      this.wins[tab.windowId].tabs[tab.id] = new_tab;
      logger(this, 'Tab ' + tab.id + ' added to memory');
    }
  }

  async deleteTab(tabId, windowId) {
    logger(this, 'Deleting tab ' + tabId);
    try {
      delete this.tabs2wins[tabId];
    } catch {
      logger("Hu ho, what was that tab...")
    }
    try {
      delete this.wins[windowId].tabs[tabId];
      if(Object.keys(this.wins[windowId].tabs).length === 0){
        logger(this, 'Window ' + windowId + ' is empty, deleting')
      delete this.wins[windowId];
      }
    } catch(e) {
      if(e instanceof TypeError) {
        logger(this, 'Hu ho, missing tabs in memory...');
        await this.createWindow(windowId);
      } else {
        throw e;
      }
    }
  }
}

var memoryManager = new MemoryManager();