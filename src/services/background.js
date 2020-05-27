import { eventQueue } from './queue.js';
import { memoryManager } from './memory.js';
import { settingsManager } from './settings.js';
import { logger, storageReset } from './utils.js';
import { MAX_ACTIVE_DEBOUNCE } from '../config/env.js';

// -----------------------------------------------
// Installation and startup events

chrome.runtime.onStartup.addListener(function () {
  logger(chrome.runtime.getManifest().version);
});

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == 'install' || details.reason == 'update') {
    eventQueue.enqueue(() => storageReset());
    eventQueue.enqueue(() => settingsManager.reset());
    eventQueue.enqueue(() => memoryManager.reset());
  }

  if (details.reason == 'install') {
    chrome.tabs.create({ url: 'https://www.tabby.us/' });
    logger('Extension installed :D');
  } else if (details.reason == 'update') {
    logger('Extension updated :D');
  }
  logger(chrome.runtime.getManifest().version);
});

// -----------------------------------------------
// Runtime alarms
chrome.idle.setDetectionInterval(Math.round(MAX_ACTIVE_DEBOUNCE / 1000));

chrome.idle.onStateChanged.addListener(function (state) {
  eventQueue.enqueue(() => memoryManager.idleStateChange(state));
});

// -----------------------------------------------
// Tabs tracking

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

/*
// TODO find usecase to understand when it is triggered.
chrome.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/

// -----------------------------------------------
// Font-end communication

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
    case 'SETTINGS_PARAMETERS':
      eventQueue.enqueue(() => settingsManager.updateSettings(request.settings));
      break;
    case 'SETTINGS_PROFILE':
      eventQueue.enqueue(() => settingsManager.updateSettingsProfile(request.profile));
      break;
    case 'INACTIVE_POLICY':
      eventQueue.enqueue(() => settingsManager.updateInactivePolicy(request.inactivePolicy));
    default:
      break;
  }
  eventQueue.enqueue(() => sendResponsePromisified({ answer: 1 }));
});

chrome.windows.onFocusChanged.addListener(function (windowId) {
  eventQueue.enqueue(() => memoryManager.changeFocusedWindowId(windowId));
});
