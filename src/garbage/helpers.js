function get(keys) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value || descriptor.initializer;
    if (typeof original === 'function') {
      descriptor.value = function(...args) {
        chrome.storage.local.get(keys, function(data) {
          args.unshift(data);
          return original.apply(this, args);
        });
      }
    }
    return descriptor;
  };
}

function set(target, name, descriptor) {
  const original = descriptor.value || descriptor.initializer;
  if (typeof original === 'function') {
    descriptor.value = async function(...args) {
      var result = original.apply(this, args);
      console.log('result');
      console.log(result);
      chrome.storage.local.set(result);
    }
  }
  return descriptor;
}

function copy(obj){
  return JSON.parse(JSON.stringify(obj));
}

class MemoryManager {
  constructor() {
    console.log("built")
  }
  @get(['windowIds', 'wins'])
  @set
  checkNewWindow(d, windowId) {
    if (!d.windowIds.includes(windowId)){
      console.log('New window created ' + windowId);
      d.windowIds.push(windowId);
      d.wins[windowId] = copy(default_window);
    }
    return d;
  }

  @get(['wins', 'tab2windows', 'current_active_tab'])
  @set
  addTab(d, tab){
    if (typeof tab.id !== 'undefined'){
      var new_tab = copy(default_tab);
      var date = new Date();
      new_tab.url = tab.url;
      new_tab.active = tab.active;
      if (tab.active) {
        d.current_active_tab = tab.id;
      }
      new_tab.pinned = tab.pinned;
      new_tab.statistics.last_active_timestamp = date.getTime();

      d.tab2windows[tab.id] = tab.windowId;
      console.log('creating tab');
      console.log(d.wins);
      console.log(tab.windowId);
      console.log(d.wins[tab.windowId]);
      d.wins[tab.windowId].tabs[tab.id] = new_tab;

      console.log('New tab created ' + tab.id);
    }
    return d;
  }

  @get(['wins', 'tab2windows'])
  @set
  updateTab(d, tabId, changeInfo){
    var tmp_window = d.wins[d.tab2windows[tabId]];
    // console.log(tabId)
    // console.log(d.tab2windows);
    // console.log(d.tab2windows[tabId]);
    console.log(d.wins);
    // console.log(tmp_window);
    // .tabs[tabId];
    if (typeof changeInfo.pinned !== 'undefined') {
      // tab.pinned = changeInfo.pinned;
      console.log('Tab ' + tabId + ' pinned status changed.');
    }
    if (typeof changeInfo.url !== 'undefined') {
      // tab.url = changeInfo.url;
      console.log('Tab ' + tabId + ' new url ' + changeInfo.url);
    }
    return d
  }
}
