class PolicyManager {
  constructor() {}

  static async run() {
    let windows = this.buildWindows();
    this.backfillRuns(windows);
    this.cleanRuntimeWindows(windows);

    let allScores = _.pick(
      memoryManager.current_scores,
      Object.keys(memoryManager.tabs)
    ); // keeping a-only tabs that still exist

    let windowIds = Object.keys(windows);
    let promises = _.map(windowIds, (windowId) =>
      this.runWindow(windows, windowId)
    );
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
    let now = Date.now();
    let known_windows = Object.keys(
      memoryManager.runtime_events.last_policy_runs
    );
    let current_windows = Object.keys(windows);
    let unknown_windows = _.difference(current_windows, known_windows);
    for (var i = 0; i < unknown_windows.length; i++) {
      memoryManager.runtime_events.last_policy_runs[unknown_windows[i]] = now;
    }
  }

  static cleanRuntimeWindows(windows) {
    // Remove phantom windows that were deleted
    let known_windows = Object.keys(
      memoryManager.runtime_events.last_policy_runs
    );
    let current_windows = Object.keys(windows);
    let unknown_windows = _.difference(known_windows, current_windows);
    for (var i = 0; i < unknown_windows.length; i++) {
      delete memoryManager.runtime_events.last_policy_runs[unknown_windows[i]];
    }
  }

  static async runWindow(windows, windowId) {
    // Run policy for a given window
    // Returns true if the policy was run, false otherwise
    let tabs = windows[windowId];
    if (tabs.length > settingsManager.settings.policy.target_tabs) {
      // if too many tabs
      if (this.exponentialTrigger(tabs, windowId)) {
        // if we waited enough
        tabs = _.filter(tabs, (tab) => {
          return (
            tab.active == settingsManager.settings.policy.active &&
            tab.pinned == settingsManager.settings.policy.pinned &&
            tab.audible == settingsManager.settings.policy.audible
          );
        });
        if (tabs.length === 0) {
          return [false, {}];
        }
        let scores = await Promise.all(_.map(tabs, (tab) => Scorer.score(tab)));

        let objScores = _.zipObject(
          _.map(tabs, (tab) => tab.tabId),
          scores
        ); // save scores

        scores = _.zip(
          _.map(tabs, (tab) => tab.tabId),
          scores
        ); // [[tabId1, score1], [tabId2, score2]...]
        scores.sort((s1, s2) => (s1[1] > s2[1] ? 1 : -1)); // ascending sort
        logger(
          windowId.toString().concat(' window scored: ', JSON.stringify(scores))
        );
        let deleteMe = scores.shift();

        if (deleteMe[1] === MAXIMUM_SCORE) {
          return [false, {}];
        } else {
          deleteMe = deleteMe[0];
        }
        // safety hack, do not remove an old tab only because you have new ones
        var count = 0;
        while (scores.length > 0) {
          let temp = scores.pop()[1];
          if (temp === MAXIMUM_SCORE) {
            count += 1;
          }
        }
        if (count < tabs.length - settingsManager.settings.policy.target_tabs) {
          await this.killTab(
            deleteMe,
            _.find(tabs, (tab) => tab.tabId === deleteMe)
          );
          return [true, objScores]; // updating tab scores
        }
      }
    }
    return [false, {}]; // old scores are kept for windows without a run
  }

  static async killTab(tabId, tab) {
    try {
      let p = new Promise((resolve, reject) => {
        chrome.tabs.remove(parseInt(tabId), function (tab) {
          let error = chrome.runtime.lastError;
          if (error) {
            reject('Tab not found');
          } else {
            resolve();
          }
        });
      });
      await p;
      // Deleting the tab will trigger all cleaning actions in memoryManager through the onRemoved trigger.
      let copiedTab = copy(tab); // making a simple json copy, could be even simpler.
      copiedTab.deletion_time = Date.now();
      memoryManager.closed_history.push(copiedTab);
      memoryManager.closed_history = memoryManager.closed_history.slice(
        0,
        MAXIMUM_HISTORY_SIZE
      );
      logger('Tab '.concat(tabId, ' killed by policy'));
    } catch {
      logger('Tab '.concat(tabId, ' not found'));
    }
  }

  static exponentialTrigger(tabs, windowId) {
    // Time condition to run the full policy
    let n_tabs = tabs.length;
    let last_policy_run =
      memoryManager.runtime_events.last_policy_runs[windowId];
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
