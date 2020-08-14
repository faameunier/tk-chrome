import * as browser from 'webextension-polyfill';
import { eventQueue } from './queue.js';
import { memoryManager } from './memory.js';
import { settingsManager } from './settings.js';
import { MigrationManager } from './migration.js';
import { logger, storageReset } from './utils.js';
import { MAX_ACTIVE_DEBOUNCE } from '../config/env.js';
import { installOptions } from '../config/notificationConf.js';

// -----------------------------------------------
// Installation and startup events
browser.runtime.setUninstallURL(
  'https://docs.google.com/forms/d/e/1FAIpQLSfub2Ge_gQi7e6Vju7wWxZmZNSHa8AVs-Ds_1yVdOOd27R5Bw/viewform?usp=sf_link'
);

browser.runtime.onStartup.addListener(function () {
  logger(browser.runtime.getManifest().version);
  eventQueue.enqueue(() => settingsManager.resetInactivePolicy()); // cleanup inactive_policy on startup in case Chrome crashed during last runtime.
});

browser.runtime.onInstalled.addListener(function (details) {
  if (details.reason == 'install') {
    browser.tabs.create({ url: browser.runtime.getURL('../views/onboarding.html') });
    eventQueue.enqueue(() => storageReset());
    eventQueue.enqueue(() => settingsManager.reset());
    eventQueue.enqueue(() => memoryManager.reset());
    eventQueue.enqueue(() => MigrationManager.setVersion());

    browser.notifications.create(installOptions); // Safari not supported
    logger('Extension installed :D');
  } else if (details.reason == 'update') {
    MigrationManager.migrate();
    logger('Extension updated :D');
  }
  logger(browser.runtime.getManifest().version);
});

// -----------------------------------------------
// Runtime alarms, not supported Safari
browser.idle.setDetectionInterval(Math.round(MAX_ACTIVE_DEBOUNCE / 1000));

browser.idle.onStateChanged.addListener(function (state) {
  eventQueue.enqueue(() => memoryManager.idleStateChange(state));
});

// -----------------------------------------------
// Windows event
browser.windows.onFocusChanged.addListener(function (windowId) {
  eventQueue.enqueue(() => memoryManager.changeFocusedWindowId(windowId));
});

browser.windows.onRemoved.addListener(function (windowId) {
  eventQueue.enqueue(() => settingsManager.removeFromInactivePolicy(windowId));
});

// -----------------------------------------------
// Tabs tracking
browser.tabs.onCreated.addListener(function (tab) {
  eventQueue.enqueue(() => memoryManager.createTab(tab));
});

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  eventQueue.enqueue(() => memoryManager.updateTab(tabId, changeInfo, tab));
});

browser.tabs.onActivated.addListener(function (activeInfo) {
  eventQueue.enqueue(() => memoryManager.setActivated(activeInfo.tabId, activeInfo.windowId));
});

browser.tabs.onAttached.addListener(function (tabId, attachInfo) {
  eventQueue.enqueue(() => memoryManager.changeWindow(tabId, attachInfo.newWindowId));
});

browser.tabs.onRemoved.addListener(function (tabId, removeInfo) {
  eventQueue.enqueue(() => memoryManager.deleteTab(tabId, removeInfo.windowId, removeInfo.isWindowClosing));
});

/*
// TODO find usecase to understand when it is triggered.
browser.tabs.onReplaced.addListener(function(integer addedTabId, integer removedTabId) {});
*/

// -----------------------------------------------
// Font-end communication
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  function sendResponsePromisified(data) {
    return new Promise((resolve, reject) => {
      try {
        resolve(data);
      } catch (e) {
        reject(e);
      }
    });
  }

  switch (request.messageType) {
    case 'RESTORE':
      eventQueue.enqueue(() => memoryManager.restoreTab(request.uuid));
      eventQueue.enqueue(() => memoryManager.removeTabFromClosedHistory(request.uuid));
      break;
    case 'SHELL_RESTORE':
      eventQueue.enqueue(() => memoryManager.restoreTab(request.uuid, true));
      eventQueue.enqueue(() => memoryManager.removeTabFromClosedHistory(request.uuid));
      break;
    case 'SETTINGS_PARAMETERS':
      eventQueue.enqueue(() => settingsManager.updateSettings(request.settings));
      break;
    case 'SETTINGS_PROFILE':
      eventQueue.enqueue(() => settingsManager.updateSettingsProfile(request.profile));
      break;
    case 'WHITELIST':
      eventQueue.enqueue(() => settingsManager.addToWhitelist(request.url));
      break;
    case 'UNWHITELIST':
      eventQueue.enqueue(() => settingsManager.removeFromWhitelist(request.url));
      break;
    case 'ADD_INACTIVE_POLICY':
      eventQueue.enqueue(() => settingsManager.addToInactivePolicy(request.windowId));
      break;
    case 'REMOVE_INACTIVE_POLICY':
      eventQueue.enqueue(() => settingsManager.removeFromInactivePolicy(request.windowId));
      break;
    default:
      break;
  }
  eventQueue.enqueue(() => sendResponsePromisified({ answer: 1 }));
});
