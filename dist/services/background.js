chrome.runtime.onInstalled.addListener(function () {
  eventQueue.enqueue(() => memoryManager.reset());
  logger('Extention installed :D');
});
chrome.tabs.onCreated.addListener(function (tab) {
  eventQueue.enqueue(() => memoryManager.createTab(tab));
});
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  eventQueue.enqueue(() => memoryManager.updateTab(tabId, changeInfo, tab));
});
chrome.tabs.onActivated.addListener(function (activeInfo) {
  eventQueue.enqueue(() => memoryManager.setActivated(activeInfo.tabId, activeInfo.windowId));
});
chrome.tabs.onAttached.addListener(function (tabId, attachInfo) {
  eventQueue.enqueue(() => memoryManager.changeWindow(tabId, attachInfo.newWindowId));
});
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  eventQueue.enqueue(() => memoryManager.deleteTab(tabId, removeInfo.windowId, removeInfo.isWindowClosing));
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  function sendResponsePromisified(data) {
    return new Promise((resolve, reject) => {
      try {
        resolve(sendResponse(data));
      } catch (e) {
        reject(e);
      }
    });
  }

  switch (request.messageType) {
    case 'RESTORE':
      eventQueue.enqueue(() => memoryManager.restoreTab(request.tabId));
      eventQueue.enqueue(() => memoryManager.removeTabFromClosedHistory(request.tabId));
      break;

    case 'SETTINGS':
      eventQueue.enqueue(() => memoryManager.updateSettings(request.settings));
      break;

    default:
      break;
  }

  eventQueue.enqueue(() => sendResponsePromisified({
    answer: 1
  }));
});
/*
// TODO find usecase to understand when it is triggered.
chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/