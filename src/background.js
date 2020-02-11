const mm = new MemoryManager()

chrome.runtime.onInstalled.addListener(function() {
  fetch("default.json")
    .then(response => response.json())
    .then(function(json) {
      console.log(json);
      json.windows = [];
      for (var key in json) {
        chrome.storage.local.set({[key]: json[key]});
      }
    })
});

chrome.tabs.onCreated.addListener(function(tab) {
  mm.checkNewWindow(tab.windowId, "mabite");
  mm.addTab(tab);
});

/*
chrome.tabs.onUpdated.addListener(function(integer tabId, object changeInfo, Tab tab) {});

chrome.tabs.onActivated.addListener(function(object activeInfo) {});

chrome.tabs.onDetached.addListener(function(integer tabId, object detachInfo) {});

chrome.tabs.onAttached.addListener(function(integer tabId, object attachInfo) {});

chrome.tabs.onRemoved.addListener(function(integer tabId, object removeInfo) {});

chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/