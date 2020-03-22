class PolicyManager {
  static async run() {
    let windows = this.buildWindows();
    this.backfillRuns(windows);

    let windowIds = Object.keys(windows);
    let promises = [];
    for(var i = 0; i < windowIds.length; i++) {
      promises.push(this.runWindow(windows, windowIds[i]));
    }
    let results = await Promise.all(promises); // Running every windows update in parallel.

    let now = Date.now();
    for(var i = 0; i < windowIds.length; i++) {
      if(results[i]) { // The policy ran on the i-th window
        memoryManager.settings.policy.last_policy_runs[windowIds[i]] = now;
      }
    }
  }

  static buildWindows() {
    return _.groupBy(memoryManager.tabs, (tab) => {tab.windowId});
  }

  static backfillRuns(windows) {
    let now = Date.now();
    let known_windows = Object.keys(memoryManager.settings.policy.last_policy_runs);
    let current_windows = Object.keys(windows);
    let unknown_windows = _.difference(current_windows, known_windows);
    for(var i = 0; i < unknown_windows.length; i++) {
      memoryManager.settings.policy.last_policy_runs[unknown_windows[i]] = now;
    }
  }

  static async runWindow(windows, windowId) {
    if (this.exponentialTrigger(windows[windowId], windowId)) {
      return true;
    }
    return false;
  }

  static exponentialTrigger(tabs, windowId) {
    let n_tabs = tabs.length;
    let last_policy_run = memoryManager.settings.policy.last_policy_runs[windowId];
    return (Date.now() - memoryManager.settings.policy.last_policy_runs[windowId]) >= memoryManager.settings.policy.min_time * Math.pow(memoryManager.settings.policy.decay, Math.max(0, n_tabs - memoryManager.settings.policy.target_tabs));
  }
}