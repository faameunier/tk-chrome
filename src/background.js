chrome.runtime.onInstalled.addListener(function() {
  logger('Extention installed :D');
});

chrome.tabs.onCreated.addListener(async function(tab) {
  eventQueue.enqueue(() => memoryManager.createWindow(tab.windowId));
  eventQueue.enqueue(() => memoryManager.createTab(tab));
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
});

/*
chrome.tabs.onActivated.addListener(function(object activeInfo) {});

// DO NOT IMPLEMENT
chrome.tabs.onDetached.addListener(function(integer tabId, object detachInfo) {});

chrome.tabs.onAttached.addListener(function(integer tabId, object attachInfo) {});
*/

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  eventQueue.enqueue(() => memoryManager.deleteTab(tabId, removeInfo.windowId, removeInfo.isWindowClosing));
});

/*
chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/
