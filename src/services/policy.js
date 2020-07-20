import * as browser from 'webextension-polyfill';
import _ from 'lodash';
import {
  MAXIMUM_SCORE,
  MAXIMUM_HISTORY_SIZE,
  SESSIONS_TIMEOUT_MS,
  SESSIONS_RETRIES,
  SESSIONS_MAX_FUZZY_DELTA_MS,
} from '../config/env.js';
import { memoryManager } from './memory.js';
import { settingsManager } from './settings.js';
import { Scorer } from './scorer.js';
import { logger, copy, retryPromise } from './utils.js';
import { setUnreadBadge } from './utils';

class PolicyManager {
  constructor() {}

  static async run() {
    let windows = this.buildWindows();
    this.backfillRuns(windows);

    let allScores = _.pick(memoryManager.current_scores, Object.keys(memoryManager.tabs));
    // keeping only tabs that still exist
    // ie. if the policy doesn't run in a window, its known scores are kept in memory.

    let windowIds = Object.keys(windows);
    let promises = _.map(windowIds, (windowId) => this.runWindow(windows, windowId));
    let results = await Promise.all(promises); // Running every windows update in parallel.

    let now = Date.now();
    let any = false;

    for (var i = 0; i < windowIds.length; i++) {
      if (results[i][0]) {
        // The policy ran on the i-th window
        memoryManager.runtime_events.last_policy_runs[windowIds[i]] = now;
        allScores = Object.assign(allScores, results[i][1]);
        any = true;
      }
    }

    memoryManager.current_scores = allScores;

    if (any) {
      // force update localstorage memory if an action was taken, might be useless if the queue awaits
      await memoryManager.save();
    }
  }

  static buildWindows() {
    // Groups tabs per window
    return _.groupBy(memoryManager.tabs, (tab) => {
      return tab.windowId;
    });
  }

  static backfillRuns(windows) {
    // Adds windows to known execution time.
    // New windows are defaulted with current timestamp.
    // Deleted windows are removed from memory.
    let now = Date.now();
    let known_windows = Object.keys(memoryManager.runtime_events.last_policy_runs);
    let current_windows = Object.keys(windows);
    let unknown_windows = _.difference(current_windows, known_windows);
    for (var i = 0; i < unknown_windows.length; i++) {
      memoryManager.runtime_events.last_policy_runs[unknown_windows[i]] = now;
    }
    unknown_windows = _.difference(known_windows, current_windows);
    for (var i = 0; i < unknown_windows.length; i++) {
      delete memoryManager.runtime_events.last_policy_runs[unknown_windows[i]];
    }
  }

  static async runWindow(windows, windowId) {
    // Run policy for a given window
    // Returns true if the policy was run, false otherwise
    let tabs = windows[windowId];
    let all_unprotected_tabs = _.filter(tabs, (tab) => {
      // removing ignored tabs
      return (
        !(settingsManager.settings.policy.pinned && tab.pinned) &&
        !(settingsManager.settings.policy.audible && tab.audible)
      );
    });
    tabs = _.filter(tabs, (tab) => {
      // removing ignored tabs
      return !(settingsManager.settings.policy.active && tab.active);
    });
    if (
      !settingsManager.inactive_policy.includes(parseInt(windowId)) &&
      all_unprotected_tabs.length > settingsManager.settings.policy.target_tabs
    ) {
      // if too many tabs
      if (this.exponentialTrigger(tabs, windowId)) {
        // if we waited enough
        // score all tabs
        let scores = await Promise.all(_.map(tabs, (tab) => Scorer.score(tab)));

        let objScores = _.zipObject(
          _.map(tabs, (tab) => tab.tabId),
          scores
        ); // save scores

        scores = _.zip(
          _.map(tabs, (tab) => tab.tabId),
          scores
        ); // [[tabId1, score1], [tabId2, score2]...]

        logger(windowId.toString().concat(' window scored :', JSON.stringify(scores)));
        let countProtected = 0;
        let minimumScore = MAXIMUM_SCORE;
        let minimumId = null;
        for (let i = 0; i < scores.length; i++) {
          let temp = scores[i];
          if (temp[1] <= minimumScore) {
            minimumScore = temp[1];
            minimumId = temp[0];
          }
          if (temp[1] >= MAXIMUM_SCORE) {
            countProtected++;
          }
        }

        if (minimumScore === MAXIMUM_SCORE) {
          return [false, objScores];
        }

        // safety hack, do not remove a tab only because you have an excess of protected ones
        if (countProtected < tabs.length - settingsManager.settings.policy.target_tabs) {
          await this.killTab(
            minimumId,
            _.find(tabs, (tab) => tab.tabId === minimumId)
          );
          return [true, objScores]; // updating tab scores
        }
      }
    }
    return [false, {}]; // old scores are kept for windows without a run
  }

  static async retrieveSessionId(tab) {
    // not compatible with Safari
    var attempt = () =>
      browser.sessions
        .getRecentlyClosed({
          maxResults: 5,
        })
        .then((sessions) => {
          for (let i = 0; i < sessions.length; i++) {
            // Closed tabs are explored from more recent to oldest
            let sessionTab = sessions[i].tab;
            let lastModified = sessions[i].lastModified;
            if (
              sessionTab &&
              sessionTab.url === tab.full_url &&
              Date.now() - lastModified * 1000 <= SESSIONS_MAX_FUZZY_DELTA_MS
            ) {
              return sessionTab.sessionId;
            }
          }
          throw true;
        })
        .catch((error) => {
          if (error !== true) {
            logger('getRecentlyClosed failed');
            throw false;
          }
          throw true;
        });
    let p = retryPromise(attempt, SESSIONS_TIMEOUT_MS, SESSIONS_RETRIES);
    p.then(
      (sessionId) => memoryManager.updateSessionId(tab.uuid, sessionId),
      (reason) => {}
    )
      .then(() => memoryManager.save())
      .catch(() => logger("Couldn't retrieve sessionId"));
  }

  static async killTab(tabId, tab) {
    try {
      await browser.tabs.remove(parseInt(tabId));
      await memoryManager.updateStatistics(tab); // updating statistics of the tab before removing it from memory
      let copiedTab = copy(tab); // making a simple json copy
      copiedTab.deletion_time = Date.now();
      memoryManager.closed_history.push(copiedTab);
      memoryManager.closed_history = memoryManager.closed_history.slice(0, MAXIMUM_HISTORY_SIZE);
      setUnreadBadge();
      this.retrieveSessionId(tab); // async
      logger('Tab '.concat(tabId, ' killed by policy'));
    } catch (err) {
      logger('Tab '.concat(tabId, " couldn't be killed"));
    }
  }

  static exponentialTrigger(tabs, windowId) {
    // Time condition to run the full policy
    let n_tabs = tabs.length;
    let last_policy_run = memoryManager.runtime_events.last_policy_runs[windowId];
    return (
      Date.now() - memoryManager.runtime_events.last_policy_runs[windowId] >=
      settingsManager.settings.policy.min_time *
        Math.pow(
          settingsManager.settings.policy.decay,
          Math.max(0, n_tabs - settingsManager.settings.policy.target_tabs)
        )
    );
  }
}

export { PolicyManager };
if (ENV === 'debug') {
  window.PolicyManager = PolicyManager;
}
