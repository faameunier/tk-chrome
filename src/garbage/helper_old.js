function get(keys) {
  return function decorator(t, n, descriptor) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = function(...args) {
        var chained = (args.length > 0) && (typeof args[0] === 'object') && (Object.keys(args[0]).includes('_ctx'))
        console.log('chained: ' + chained)
        if (chained) {
          keys = keys.filter(x => !Object.keys(args[0]).includes(x));
        }
        chrome.storage.local.get(keys, function(data) {
          if (chained) {
            console.log('chained')
            keys.forEach(function (key, index){
              args[0][key] = data[key];
            });
            args[0]['_ctx'].push(keys);
            console.log(args[0]['_ctx']);
          } else {
            data['_ctx'] = [keys];
            args.unshift(data);
          } 
          console.log('loaded d: ');
          console.log(args[0]);
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
      console.log('result');
      console.log(result);
      keys = result['_ctx'].pop();
      chrome.storage.local.set(_.pick(result, keys));
      return result;
    }
  }
  return descriptor;
}

function copy(obj){
  return JSON.parse(JSON.stringify(obj));
}

class MemoryManager {
  @get(['windowIds', 'wins'])
  @set
  async checkNewWindow(d, windowId, callback) {
    if (!d.windowIds.includes(windowId)){
      console.log('New window created ' + windowId);
      d.windowIds.push(windowId);
      d.wins[windowId] = copy(default_window);
    }
    if (typeof callback === 'function') {
      await callback(d);
      return d;
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
