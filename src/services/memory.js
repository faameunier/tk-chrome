class MemoryManager {
  empty_stats = {
    total_active_time: 0,
    total_inactive_time: 0,
    total_cached_time: 0,
    last_active_timestamp: null,
    activated: 0,
    updated_at: null,
    protection_timestamp: null,
  };

  empty_tab = {
    tabId: null,
    url: null,
    full_url: null,
    statistics: {},
    pinned: false,
    active: false,
    audible: false,
    favIconUrl: null,
    title: null,
    windowId: null,
    cache: [],
  };

  constructor() {
    if (!MemoryManager.instance) {
      logger(this, 'Instanciating empty MemoryManager');
      MemoryManager.instance = this;
      this.init();
    }
    return MemoryManager.instance;
  }

  async init() {
    this.tabs = {};
    this.closed_history = [];
    this.current_scores = {};
    this.runtime_events = {
      last_full_stats_update: Date.now(),
      last_garbage_collector: Date.now(),
      last_policy_runs: {},
    };
  }

  async reset() {
    this.init();
    await this.save();
    await this.load();
  }

  async save() {
    logger(this, 'Saved');
    await storageSet({
      tabs: JSON.stringify(this.tabs),
      closed_history: this.closed_history,
      current_scores: this.current_scores,
      runtime_events: this.runtime_events,
    });
  }

  async load() {
    await storageGet([
      'tabs',
      'closed_history',
      'current_scores',
      'runtime_events',
    ]).then((data) => {
      try {
        logger(this, 'Loading state from storage');
        this.closed_history = data.closed_history;
        this.runtime_events = data.runtime_events;
        this.current_scores = current_scores;
        this.tabs = JSON.parse(data.tabs);
        for (let key of Object.keys(this.tabs)) {
          let tab = this.tabs[key];
          tab.cache = LRUfactory.fromJSON(tab.cache);
        }
      } catch {
        logger(this, 'Loading fail, init memory');
      }
    });
  }

  async log() {
    await this.updateAllStatistics();
    await this.cleanTabsDelay();
    if (ENV === 'debug') {
      console.log(this.tabs);
    }
  }

  async setActivated(tabId, windowId) {
    if (!this.tabs[tabId]) {
      logger(this, 'OOS Unknown activated tab, creating shell');
      await this.createTab({
        id: tabId,
        active: true,
        windowId: windowId,
      });
      // createTab will call setActivated again.
      return null;
    }
    if (this.tabs[tabId].windowId !== windowId) {
      // when called from createTab, this cannot happen
      logger(this, 'OOS Tab ' + tabId + 'is in wrong window');
      await this.changeWindow(tabId, windowId); // Setting to the tab to the current window
      // If tab wasn't active, no problem.
      // If tab was active... no problem neither :) then the active tab is unknown.
      // and stats will be updated right after.
    }

    let win = _.filter(Object.values(this.tabs), (tab) => {
      return tab.windowId == windowId;
    });

    for (var i = 0; i < win.length; i++) {
      let tab = win[i];
      if (tab.active && tab.tabId !== tabId) {
        await this.updateStatistics(tab, false, false);
        tab.active = false;
      }
    }

    await this.updateStatistics(this.tabs[tabId], false, true);
    this.tabs[tabId].active = true;
  }

  async createTab(tab) {
    if (!(tab.id in this.tabs)) {
      // avoid setting back stats to zero when a tab is restored
      if (typeof tab.id !== 'undefined') {
        let new_tab = copy(this.empty_tab);

        new_tab.tabId = tab.id;
        new_tab.pinned = tab.pinned;
        new_tab.windowId = tab.windowId;
        if (typeof tab.url !== 'undefined') {
          // No impact on stats until proven otherwise
          new_tab.url = getDomain(tab.url);
          new_tab.full_url = tab.url;
        }
        if (typeof tab.cache !== 'undefined') {
          // No impact on stats until proven otherwise
          new_tab.cache = tab.cache;
        } else {
          new_tab.cache = new LRU(settingsManager.memory.cache_size);
        }
        if (typeof tab.pinned !== 'undefined') {
          new_tab.pinned = tab.pinned;
        } else {
          new_tab.pinned = false;
        }
        if (typeof tab.audible !== 'undefined') {
          new_tab.audible = tab.audible;
        } else {
          new_tab.audible = false;
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

        if (tab.active) {
          await this.setActivated(tab.id, tab.windowId);
        }

        logger(this, 'Tab ' + tab.id + ' added to memory');
        return tab.id;
      }
    }
    logger(this, 'Skipping tab creation');
  }

  async changeWindow(tabId, windowId) {
    // windowId should exist before calling me
    logger(this, 'Tab assigned to new window');
    if (!this.tabs[tabId]) {
      logger(this, 'OOS Missing tab found');
      await this.createTab({ id: tabId, windowId: windowId });
      // missing tab is assigned to window and THAT'S IT
    } else {
      this.tabs[tabId].windowId = windowId;
    }
  }

  async updateTab(tabId, changes, tab) {
    logger(this, 'Updating tab ' + tabId);
    if (!this.tabs[tabId]) {
      logger(this, 'OOS Missing tab found');
      await this.createTab(tab);
    }
    if (this.tabs[tabId].windowId !== tab.windowId) {
      logger(this, 'OOS tab in wrong window');
      await this.changeWindow(tabId, tab.windowId);
    }
    let stored_tab = this.tabs[tabId];
    if (typeof changes.url !== 'undefined') {
      let new_url = getDomain(changes.url);

      let new_full_url = changes.url;
      let old_url = stored_tab.url;
      stored_tab.url = new_url;
      stored_tab.full_url = new_full_url;
      if (new_url !== old_url) {
        await this.updateStatistics(stored_tab, false, false);
        let old_statistics = stored_tab.statistics;
        let cached = stored_tab.cache.read(new_url);
        if (cached) {
          stored_tab.statistics = cached;
          await this.updateStatistics(stored_tab, true, false);
          logger(this, 'Old state restored from cache');
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
      logger(this, 'OOS trying to delete unknown tab');
    }
  }

  async createStatistics(iTab) {
    let tmp = copy(this.empty_stats);
    let now = Date.now();
    if (iTab.active) {
      tmp.last_active_timestamp = now;
      tmp.activated = 1;
    }
    tmp.updated_at = now;
    iTab.statistics = tmp;
  }

  async updateStatistics(iTab, fromCache = false, activitySwitch = false) {
    let now = Date.now();
    if (fromCache) {
      activitySwitch = true; // restored from cache is considered a reactivation
      iTab.statistics.total_cached_time += now - iTab.statistics.updated_at;
      iTab.statistics.updated_at = now; // protip
      iTab.statistics.activated += 1;
    } else {
      if (iTab.active) {
        iTab.statistics.total_active_time += now - iTab.statistics.updated_at;
        iTab.statistics.last_active_timestamp = now;
      } else {
        if (activitySwitch || iTab.statistics.activated === 0) {
          iTab.statistics.activated += 1;
        }
        iTab.statistics.total_inactive_time += now - iTab.statistics.updated_at;
      }
      iTab.statistics.updated_at = now;
    }
  }

  async updateAllStatistics() {
    let now = Date.now();
    if (
      now - this.runtime_events.last_full_stats_update >=
      settingsManager.memory.min_time_full_stats_update
    ) {
      logger(this, 'Running full stats');
      var tab_ids = Object.keys(this.tabs);
      for (var i = 0; i < tab_ids.length; i++) {
        await this.updateStatistics(this.tabs[tab_ids[i]]);
      }
      this.runtime_events.last_full_stats_update = now;
    }
  }

  async removeTabFromClosedHistory(tabId) {
    this.closed_history = this.closed_history.filter((tab) => {
      return tab.tabId !== tabId;
    });
  }

  async restoreTab(tabId) {
    logger(this, 'Restoring tab ' + tabId);
    let restoredTab = this.closed_history.filter((tab) => {
      return tab.tabId === tabId;
    })[0];
    // let cache = LRUfactory.fromJSON(restoredTab.cache);
    let tab = await new Promise((resolve, reject) => {
      chrome.tabs.create(
        { url: restoredTab.full_url, active: false },
        (tab) => {
          if (chrome.runtime.lastError) {
            reject(false);
          } else {
            resolve(tab);
          }
        }
      );
    });
    await this.createTab(tab);
    this.tabs[tab.id].statistics = copy(restoredTab.statistics);
    // this.tabs[tab.tabId].cache = cache;  // do not restore cache as history is lost
    await this.protectTab(tab.id);
    this.tabs[tab.id].cache.write(
      restoredTab.url,
      this.tabs[tab.id].statistics
    ); // hack :D
    await this.updateStatistics(this.tabs[tab.id], true);
  }

  async protectTab(tabId) {
    this.tabs[tabId].statistics.protection_timestamp = Date.now();
    logger(this, 'Tab ' + tabId + ' protected temporarily');
  }

  async cleanTabsDelay() {
    let now = Date.now();
    if (
      now - this.runtime_events.last_garbage_collector >=
      settingsManager.memory.min_time_garbage_collector
    ) {
      await this.cleanTabs();
      this.runtime_events.last_garbage_collector = now;
    }
  }

  async cleanTabs() {
    var tab_ids = Object.keys(this.tabs);
    for (let i = 0; i < tab_ids.length; i++) {
      let tabId = tab_ids[i];
      try {
        let p = new Promise((resolve, reject) => {
          chrome.tabs.get(parseInt(tabId), function (tab) {
            if (chrome.runtime.lastError) {
              reject(false);
            } else {
              resolve();
            }
          });
        });
        await p;
      } catch {
        logger(this, 'Tab ' + tabId + ' collected by garbage collector');
        await this.deleteTab(tabId);
      }
    }
  }
}

var memoryManager = new MemoryManager();
