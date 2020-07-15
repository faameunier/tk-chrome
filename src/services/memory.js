import * as browser from 'webextension-polyfill';
import _ from 'lodash';
import { logger, getDomain, copy, getLastFocusedWindow, isUserActive } from './utils.js';
import { MIN_ACTIVE_DEBOUNCE, MAX_ACTIVE_DEBOUNCE } from '../config/env.js';
import { LRUfactory, LRU } from './LRU.js';
import { settingsManager } from './settings.js';
import { v4 as uuidv4 } from 'uuid';

class MemoryManager {
  focused_window_id = null;

  empty_stats = {
    total_active_time: 0, // total time the tab spent active
    total_inactive_time: 0, // total time the tab spent inactive
    total_cached_time: 0, // total time the tab spent in short term history
    last_active_timestamp: null, // last time the tab switched to an active status (or creation)
    temp_last_active_timestamp: null, // DO NOT USE, debounce for last_active_timestamp
    activated: 0, // nb of time the tab was activated (or restored)
    updated_at: null, // DO NOT USE, last time the statistics were computed
    protection_timestamp: null, // protection flag timestamp
  };

  empty_tab = {
    tabId: null,
    url: null,
    full_url: null,
    statistics: {},
    pinned: false,
    pinned_switch_timestamp: null,
    active: false,
    audible: false,
    audible_switch_timestamp: null,
    favIconUrl: null,
    title: null,
    windowId: null,
    cache: [],
    uuid: null,
    sessionId: null
    // sessionId: optional sessionId
    // deletion_time: optional tabby deletion timestamp
  };

  constructor() {
    if (!MemoryManager.instance) {
      logger(this, 'Instanciating empty MemoryManager');
      MemoryManager.instance = this;
      this.init();
      this.loaded = false;
    }
    return MemoryManager.instance;
  }

  async init() {
    this.focused_window_id = await getLastFocusedWindow();
    this.tabs = {};
    this.closed_history = [];
    this.current_scores = {};
    this.runtime_events = {
      last_full_stats_update: Date.now(),
      last_garbage_collector: Date.now(),
      last_idling_timestamp: Date.now(),
      last_idle_state: true,
      last_policy_runs: {},
    };
  }

  async reset() {
    logger(this, 'Hard reset');
    await this.init();
    await this.save();
    await this.load();
  }

  async save() {
    logger(this, 'Saved');
    await browser.storage.local.set({
      tabs: JSON.stringify(this.tabs),
      closed_history: this.closed_history,
      current_scores: this.current_scores,
      runtime_events: this.runtime_events,
      focused_window_id: this.focused_window_id,
    });
  }

  async load() {
    if (!this.loaded) {
      let data = await browser.storage.local.get(['tabs', 'closed_history', 'current_scores', 'runtime_events', 'focused_window_id']);
      try {
        logger(this, 'Loading state from storage');
        this.closed_history = data.closed_history;
        this.runtime_events = data.runtime_events;
        this.current_scores = data.current_scores;
        this.tabs = JSON.parse(data.tabs);
        this.focused_window_id = data.focused_window_id;
        for (let key of Object.keys(this.tabs)) {
          let tab = this.tabs[key];
          tab.cache = LRUfactory.fromJSON(tab.cache);
        }
      } catch {
        logger(this, 'Loading fail, init memory');
        await this.save(); // for save for consistency with settings manager
      }
      this.loaded = true;
    }
  }

  async log() {
    await this.updateAllStatistics();
    await this.cleanTabsDelay();
  }

  async setActivated(tabId, windowId) {
    if (!this.tabs[tabId]) {
      await this.backfillTab({
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
        new_tab.uuid = uuidv4();
        let now = Date.now();

        if (typeof tab.url !== 'undefined') {
          // No impact on stats until proven otherwise
          new_tab.url = getDomain(tab.url) || tab.url;
          new_tab.full_url = tab.url;
        }
        if (typeof tab.cache !== 'undefined') {
          // No impact on stats until proven otherwise
          new_tab.cache = tab.cache;
        } else {
          new_tab.cache = new LRU(settingsManager.settings.memory.cache_size);
        }
        if (typeof tab.pinned !== 'undefined') {
          new_tab.pinned = tab.pinned;
          new_tab.pinned_switch_timestamp = now;
        } else {
          new_tab.pinned = false;
        }
        if (typeof tab.audible !== 'undefined') {
          new_tab.audible = tab.audible;
          new_tab.audible_switch_timestamp = now;
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
      await this.backfillTab({ id: tabId, windowId: windowId });
      // missing tab is assigned to window and THAT'S IT
    } else {
      this.tabs[tabId].windowId = windowId;
    }
  }
  async changeFocusedWindowId(windowId) {
    if (windowId >= 0) {
      this.focused_window_id = windowId;
    }
  }

  async updateTab(tabId, changes, tab) {
    logger(this, 'Updating tab ' + tabId);
    if (!this.tabs[tabId]) {
      await this.backfillTab(tab);
    }
    if (this.tabs[tabId].windowId !== tab.windowId) {
      logger(this, 'OOS tab in wrong window');
      await this.changeWindow(tabId, tab.windowId);
    }
    let stored_tab = this.tabs[tabId];
    if (typeof changes.url !== 'undefined') {
      let new_url = getDomain(changes.url) || changes.url;

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

    let now = Date.now();
    if (typeof changes.pinned !== 'undefined' && stored_tab.pinned !== changes.pinned) {
      stored_tab.pinned = changes.pinned;
      stored_tab.pinned_switch_timestamp = now;
    }
    if (typeof changes.audible !== 'undefined' && stored_tab.audible !== changes.audible) {
      stored_tab.audible = changes.audible;
      stored_tab.audible_switch_timestamp = now;
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
    tmp.activated = 1; // to avoid problems later on
    tmp.updated_at = now;
    tmp.temp_last_active_timestamp = now;
    tmp.last_active_timestamp = now; // last_active_timestamp should not be nul.
    // To avoid giving stupid importance to a tab that was created but never opened and avoid backfilling
    // the activation timestamp with now() in the scorer, the time of creation is considered an active time.
    iTab.statistics = tmp;
  }

  async updateStatistics(iTab, fromCache = false, activitySwitch = false) {
    // activitySwitch is when a tab becomes active but is still inactive
    //
    // Deboucing logic: to avoid biaising the last_active_timestamp which can have high
    //   importance in the scorer, short activities are not registered.
    //   This works by using a temporary last_active_timestamp variable.
    //   When this variable is 'old' enough, it is saved permanently and active statistics gets updated only now.
    //   - If the tab becomes inactive before the value is saved, the inactive time will be
    //     updated at next cycle as updated_at was untouched.
    //   - If it is saved, as updated_at wasn't changed till then the correct active time will be saved.
    //   - If it is killed ? `cannot` happen if the tab is active even temporarily
    //   - If it is getting cached ? this edge case is not handled and the information is lost (a short
    //     amount of inactive time is disappearing). This happends if you go on a tab and quickly switch url.
    //     This is considered a stupid edge case, fixing would bring almost no value.
    //
    // use cases:
    // - updateAllStatistics : every X seconds all stats are updated (not from cache, no activitySwitch)
    //    | additional time since last update should be added to correct active / inactive variables
    // - policy.killTab : the tab just got killed
    //    | updating statistics in case of a future restore
    // - restoreTab : a tab is restored from the popup with its old statistics (fromCache)
    //    | the time spent in cache should be updated (hypothesis: updated at is the time of killing)
    //    | additionnally it is considered a reactivation (even if the tab is not active) to give importance to the event
    // - setActivated : when a new tab becomes active, all tabs within the window are updated, keeping their status (not from cache, no activitySwitch)
    //    | same as updateAllStatistics
    // - setActivated : the tab that gets activated gets updated (not fromCache, activitySwith true)
    //    | the tab stats should be updated as normal BUT the last active timestamp gets updated as well as activation count
    // - updateTab : setActivated cases above
    // - updateTab : url change, old url stats are updated (not from cache, no activitySwitch)
    //    | times are updated according to old status, in case we are switching to cache this enforces the below hypothesis
    // - updateTab : url change, old url stats are restored from cache (from cache, no activitySwitch)
    //    | the time spent in cache should be updated (hypothesis: updated at is the time when it switched to cache)
    //    | additionnally it is considered a reactivation (even if the tab is not active) to give importance to the event

    let now = Date.now();
    if (fromCache) {
      activitySwitch = true; // restored from cache is considered a reactivation
      iTab.statistics.total_cached_time += now - iTab.statistics.updated_at;
      iTab.statistics.updated_at = now;
    } else {
      if (iTab.active) {
        if (now - iTab.statistics.temp_last_active_timestamp >= MIN_ACTIVE_DEBOUNCE) {
          // debounce
          if (iTab.statistics.temp_last_active_timestamp !== iTab.statistics.last_active_timestamp) {
            iTab.statistics.last_active_timestamp = iTab.statistics.temp_last_active_timestamp;
            iTab.statistics.activated += 1;
          }
          iTab.statistics.total_active_time += now - iTab.statistics.updated_at;
          iTab.statistics.updated_at = now;
        }
      } else {
        iTab.statistics.total_inactive_time += now - iTab.statistics.updated_at;
        iTab.statistics.updated_at = now;
      }
    }
    if (activitySwitch) {
      iTab.statistics.temp_last_active_timestamp = now; // this is the timestamp when the tab started to be active last
    }
  }

  async idleStatistics(iTab) {
    // Handles the logic when the user is idling.
    //
    // Why is this not in update statistics ?
    //  To avoid requesting a million times the idle state.
    //
    // How does it work?
    //   The idea is to shift in time all time references by the idling period (which is
    //   a runtime event).
    let now = Date.now();
    let offset = now - this.runtime_events.last_idling_timestamp;
    iTab.statistics.updated_at += offset;
    iTab.statistics.temp_last_active_timestamp += offset;
    iTab.statistics.last_active_timestamp += offset;
  }

  async idleStateChange(state) {
    let now = Date.now();
    logger(this, 'New idle state ' + state);
    if (state === 'idle' && this.runtime_events.last_idle_state === true) {
      this.runtime_events.last_idling_timestamp = now - MAX_ACTIVE_DEBOUNCE;
    } else if (state === 'locked' && this.runtime_events.last_idle_state === true) {
      this.runtime_events.last_idling_timestamp = now; // if the computer is locked before 5min we don't now exactly
    } else if (state === 'active' && this.runtime_events.last_idle_state === false) {
      var tab_ids = Object.keys(this.tabs);
      for (var i = 0; i < tab_ids.length; i++) {
        await this.idleStatistics(this.tabs[tab_ids[i]]);
      }
    } // else nothing we are switching between idle states
    this.runtime_events.last_idle_state = state === 'active';
  }

  async updateAllStatistics() {
    let now = Date.now();
    if (
      now - this.runtime_events.last_full_stats_update >=
      settingsManager.settings.memory.min_time_full_stats_update
    ) {
      logger(this, 'Running full stats');
      var tab_ids = Object.keys(this.tabs);
      for (var i = 0; i < tab_ids.length; i++) {
        await this.updateStatistics(this.tabs[tab_ids[i]]);
      }
      this.runtime_events.last_full_stats_update = now;
    }
  }

  async removeTabFromClosedHistory(uuid) {
    this.closed_history = this.closed_history.filter((tab) => {
      return tab.uuid !== uuid;
    });
  }

  async updateSessionId(uuid, sessionId) {
    for (var i = 0; i < this.closed_history.length; i++) {
      if (this.closed_history[i].uuid === uuid) {
        this.closed_history[i].sessionId = sessionId;
        logger(this, 'Updated sessionId ' + sessionId.toString() + ' for ' + uuid);
        break;
      }
    }
  }

  async restoreTab(uuid, forceShell = false) {
    logger(this, 'Restoring tab ' + uuid);
    let restoredTab = this.closed_history.filter((tab) => {
      return tab.uuid === uuid;
    })[0];

    let tab = null;
    let fromSession = false;

    let windows = Object.keys(
      _.groupBy(this.tabs, (tab) => {
        return tab.windowId;
      })
    );

    if (!forceShell && restoredTab.sessionId && windows.includes(restoredTab.windowId.toString())) {
      // not compatible with Safari
      try {
        tab = await browser.sessions.restore(
          restoredTab.sessionId
        ).then((session) => {
          return session.tab;
        });
      } catch {
        logger(this, 'Invalid sessionId, was the tab already restored ?');
      }
    }

    if (tab) {
      logger(this, 'Restoring tab from session');
      fromSession = true;
    } else {
      logger(this, 'Creating shell tab');
      tab = await browser.tabs.create({ url: restoredTab.full_url, active: false }).catch((error) => {
        logger("Unable to create shell tab !");
        throw error; // should this really hard crash ?
      });
    }

    await this.createTab(tab);
    this.tabs[tab.id].statistics = copy(restoredTab.statistics);
    if (fromSession) {
      let cache = LRUfactory.fromJSON(restoredTab.cache);
      this.tabs[tab.id].cache = cache; // restore cache if history is not lost
    }
    await this.protectTab(tab.id);
    this.tabs[tab.id].cache.write(restoredTab.url, this.tabs[tab.id].statistics); // hack :D
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
      settingsManager.settings.memory.min_time_garbage_collector
    ) {
      await this.cleanTabs();
      this.runtime_events.last_garbage_collector = now;
    }
  }

  async backfillTab(tab) {
    logger(this, 'OOS, trying to backfill tab ' + tab.id);
    try {
      let realTab = await browser.tabs.get(parseInt(tab.id));
      await this.createTab(realTab);
      logger(this, 'Backfill succesful');
    } catch (e) {
      logger(this, "Tab couldn't be retrieved, creating empty tab...");
      await this.createTab(tab);
    }
  }

  async cleanTabs() {
    var tab_ids = Object.keys(this.tabs);
    for (let i = 0; i < tab_ids.length; i++) {
      let tabId = tab_ids[i];
      try {
        // if it works then the tab exists
        await browser.tabs.get(parseInt(tabId));
      } catch {
        logger(this, 'Tab ' + tabId + ' collected by garbage collector');
        await this.deleteTab(tabId);
      }
    }
  }
}

export var memoryManager = new MemoryManager();
if (ENV === 'debug') {
  window.memoryManager = memoryManager;
}
