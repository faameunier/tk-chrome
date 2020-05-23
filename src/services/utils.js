import * as psl from 'psl';
import { MAX_ACTIVE_DEBOUNCE } from '../config/env.js';

const logger = function (...args) {
  if (ENV === 'debug' || ENV === 'dev') {
    let default_format = ['font-weight:initial; color:black;'];
    let pre = '%c' + new Date().toUTCString() + '%c';
    let options = ['font-weight:lighter; color:LightSlateGrey;'];
    options.push(default_format);
    if (typeof args[0] === 'object') {
      pre += ' | %c' + args[0].constructor.name + '%c | ';
      pre += args[1];
      options.push('color:#1da87c; font-weight:bolder');
      options.push(default_format);
    } else {
      pre += ' | ' + args[0];
    }
    console.log(pre, ...options);
  }
};

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDomain(str) {
  try {
    return psl.parse(new URL(str).hostname).domain;
  } catch {
    return str;
  }
}

function storageSet(args) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(args, function () {
      resolve();
    });
  });
}

function storageGet(args) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(args, function (data) {
      resolve(data);
    });
  });
}

function isInteger(value) {
  return /^\d+$/.test(value);
}

function setAllReadBadge() {
  chrome.browserAction.setBadgeText({ text: '' }); // <-- set text to '' to remove the badge
}

function setUnreadBadge() {
  chrome.browserAction.setBadgeBackgroundColor({ color: [229, 92, 0, 128] });
  chrome.browserAction.getBadgeText({}, function (badgeText) {
    let counter = 1;
    if (isInteger(badgeText)) {
      counter = parseInt(badgeText) + 1;
    }
    chrome.browserAction.setBadgeText({ text: `${counter}` });
  });
}

function getLastFocusedWindow() {
  new Promise((resolve, reject) => {
    chrome.windows.getLastFocused({ populate: false, windowTypes: ['normal'] }, (d) => resolve(d.id));
  });
}

function isUserActive() {
  new Promise((resolve, reject) => {
    chrome.idle.queryState((MAX_ACTIVE_DEBOUNCE / 1000).toFixed(), (status) => {
      if (status === 'active') {
        resolve(true);
      } else if (status) {
        resolve(false);
      } else {
        logger("Couldn't check user activity.");
        resolve(true);
      }
    });
  });
}

logger('Starting in ' + ENV + ' env.');
export {
  logger,
  copy,
  timeout,
  getDomain,
  storageGet,
  storageSet,
  setAllReadBadge,
  setUnreadBadge,
  isInteger,
  getLastFocusedWindow,
  isUserActive,
};
