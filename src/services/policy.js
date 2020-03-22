class PolicyManager {
  constructor() {}

  static async run() {
    let windows = this.buildWindows();
    this.backfillRuns(windows);

    let windowIds = Object.keys(windows);
    let promises = _.map(windowIds, (windowId) => this.runWindow(windows, windowId));
    let results = await Promise.all(promises); // Running every windows update in parallel.

    let now = Date.now();
    let any = false;
    for(var i = 0; i < windowIds.length; i++) {
      if(results[i]) { // The policy ran on the i-th window
        memoryManager.settings.policy.last_policy_runs[windowIds[i]] = now;
        any = true;
      }
    }

    if(any) { // force update localstorage memory if an action was taken, might be useless if the queue awaits
      await memoryManager.save()
    }
  }

  static buildWindows() {
    return _.groupBy(memoryManager.tabs, (tab) => {return tab.windowId});
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
    let tabs = windows[windowId];
    if (tabs.length > memoryManager.settings.policy.target_tabs) { // if too many tabs
      if (this.exponentialTrigger(tabs, windowId)) { // if we waited enough
        // TODO filter tabs to removed protected ones.
        let scores = await Promise.all(_.map(tabs, (tab) => Scorer.score(tab)));
        scores = _.zip(_.map(tabs, (tab) => tab.tabId), scores); // [[tabId1, score1], [tabId2, score2]...]
        scores.sort((s1, s2) => (s1[1] > s2[1]) ? 1 : -1); // ascending sort
        logger(windowId.toString().concat(" window scored: ", JSON.stringify(scores)));
        let deleteMe = scores.shift()[0];

        // safety hack, do not remove an old tab only because you have new ones
        var count = 0;
        while(scores.length > 0) {
          let temp = scores.pop()[1];
          if (temp === MAXIMUM_SCORE) {
            count += 1;
          }
        }
        if (count < tabs.length - memoryManager.settings.policy.target_tabs) {
          await this.killTab(deleteMe, _.find(tabs, (tab) => tab.tabId === deleteMe))
          return true
        }        
      }
    }
    return false;
  }

  static async killTab(tabId, tab) {
    try {
      let p = new Promise((resolve, reject) => {
        chrome.tabs.remove(parseInt(tabId), function(tab) {
          let error = chrome.runtime.lastError;
          if (error) {
            reject("Tab not found");
          } else {
            resolve();
          }
        });
      });
      await p;
      // Deleting the tab will trigger all cleaning actions in memoryManager through the onRemoved trigger.
      memoryManager.closed_history.push(copy(tab)); // making a simple json copy, could be even simpler.
      logger("Tab ".concat(tabId, " killed by policy"));
    } catch {
      logger("Tab ".concat(tabId, " not found"));
    }
  }

  static exponentialTrigger(tabs, windowId) {
    let n_tabs = tabs.length;
    let last_policy_run = memoryManager.settings.policy.last_policy_runs[windowId];
    return (Date.now() - memoryManager.settings.policy.last_policy_runs[windowId]) >= memoryManager.settings.policy.min_time * Math.pow(memoryManager.settings.policy.decay, Math.max(0, n_tabs - memoryManager.settings.policy.target_tabs));
  }
}