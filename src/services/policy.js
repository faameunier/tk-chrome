import browser from 'webextension-polyfill';
import _ from 'lodash';
import { MAXIMUM_SCORE } from '../config/env.js';
import { memoryManager } from './memory.js';
import { settingsManager } from './settings.js';
import { Scorer } from './scorer.js';
import { logger, copy } from './utils.js';
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
        // a tab was succesfully killed
        // Update runtime event in order to not kill again right away
        memoryManager.runtime_events.last_policy_runs[windowIds[i]] = now;
        any = true; // something is pending save
      }
      if (results[i][1]) {
        // the tab was scores
        allScores = Object.assign(allScores, results[i][1]);
        any = true; // something is pending save
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
    tabs = _.filter(tabs, (tab) => {
      // removing ignored tabs
      return (
        !(settingsManager.settings.policy.active && tab.active) &&
        !(settingsManager.settings.policy.pinned && tab.pinned) &&
        !(settingsManager.settings.policy.audible && tab.audible)
      );
    });
    if (
      !settingsManager.inactive_policy.includes(parseInt(windowId)) &&
      tabs.length > settingsManager.settings.policy.target_tabs
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
          return [false, objScores]; // updating tab scores
        }

        // safety hack, do not remove a tab only because you have an excess of protected ones
        if (countProtected < tabs.length - settingsManager.settings.policy.target_tabs) {
          let success = await this.killTab(
            minimumId,
            _.find(tabs, (tab) => tab.tabId === minimumId)
          );
          return [success, objScores]; // updating tab scores
        }
      }
    }
    return [false, undefined]; // old scores are kept for windows without a run
  }

  static async killTab(tabId, tab) {
    try {
      await browser.tabs.remove(parseInt(tabId));
      memoryManager.killedByPolicy(tab.uuid);
      setUnreadBadge();
      logger('Tab '.concat(tabId, ' killed by policy'));
      return true;
    } catch (err) {
      logger('Tab '.concat(tabId, " couldn't be killed"));
    }
    return false;
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
