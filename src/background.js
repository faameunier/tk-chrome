chrome.runtime.onInstalled.addListener(function() {
  logger('Extention installed :D');
});

chrome.tabs.onCreated.addListener(async function(tab) {
  EventQueue.enqueue(() => memoryManager.createWindow(tab.windowId));
  EventQueue.enqueue(() => memoryManager.createTab(tab));
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
  EventQueue.enqueue(() => memoryManager.deleteTab(tabId, removeInfo.windowId));
});

/*
chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/
