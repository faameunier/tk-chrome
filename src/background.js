chrome.runtime.onInstalled.addListener(function() {
  logger('Extention installed :D');
});

chrome.tabs.onCreated.addListener(function(tab) {
  eventQueue.enqueue(() => memoryManager.createWindow(tab.windowId));
  eventQueue.enqueue(() => memoryManager.createTab(tab));
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  eventQueue.enqueue(() => memoryManager.updateTab(tabId, changeInfo, tab));
});

chrome.tabs.onActivated.addListener(function(activeInfo) {

});

// DO NOT IMPLEMENT - Use onAttached instead
// chrome.tabs.onDetached.addListener(function(integer tabId, object detachInfo) {});

chrome.tabs.onAttached.addListener(function(tabId, attachInfo) {
  eventQueue.enqueue(() => memoryManager.createWindow(attachInfo.newWindowId));
  eventQueue.enqueue(() => memoryManager.changeWindow(tabId, attachInfo.newWindowId));
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  eventQueue.enqueue(() => memoryManager.deleteTab(tabId, removeInfo.windowId, removeInfo.isWindowClosing));
});

/*
// TODO find usecase to understand when it is triggered.
chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/
