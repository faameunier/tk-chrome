function get(keys) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
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
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      const result = original.apply(this, args);
      chrome.storage.local.set(result)
    }
  }
  return descriptor;
}

function copy(obj){
  return JSON.parse(JSON.stringify(obj));
}

class MemoryManager {
  @get(['windowIds', 'windows'])
  @set
  checkNewWindow(d, windowId) {
    if (!d.windowIds.includes(windowId)){
      console.log('New window created ' + windowId);
      d.windowIds.push(windowId);
      d.windows[windowId] = copy(default_window);
    }
    return d;
  }

  @get(['windows', 'tab2windows', 'current_active_tab'])
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
      d.windows[tab.windowId]
      console.log('New tab created ' + tab.id);
    }
    return d;
  }
}
