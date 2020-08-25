import psl from 'psl';
import browser from 'webextension-polyfill';
import { MAX_ACTIVE_DEBOUNCE } from '../config/env.js';

/* istanbul ignore next */
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

function isInteger(value) {
  return /^\d+$/.test(value);
}

function setAllReadBadge() {
  browser.browserAction.setBadgeText({ text: '' }); // <-- set text to '' to remove the badge
}

async function setUnreadBadge() {
  browser.browserAction.setBadgeBackgroundColor({ color: [229, 92, 0, 128] });
  return browser.browserAction.getBadgeText().then(function (badgeText) {
    let counter = 1;
    if (isInteger(badgeText)) {
      counter = parseInt(badgeText) + 1;
    }
    return browser.browserAction.setBadgeText({ text: `${counter}` });
  });
}

/* istanbul ignore next */
function isUserActive() {
  // Not compatible with Safari
  return browser.idle.queryState(Math.round(MAX_ACTIVE_DEBOUNCE / 1000)).then((status) => {
    if (status === 'active') {
      return true;
    } else if (status) {
      return false;
    } else {
      logger("Couldn't check user activity.");
      return true;
    }
  });
}

/* istanbul ignore next */
function storageReset() {
  return browser.storage.local
    .get(null)
    .then((d) => {
      return browser.storage.local.remove(Object.keys(d));
    })
    .then(() => {
      logger('Memory flushed.');
    });
}

/* istanbul ignore next */
function getLastFocusedWindow() {
  // windowType is deprecated in FF, it doesn't seem critical anyways
  return browser.windows.getLastFocused({ populate: false }).then((d) => {
    return d.id;
  });
}

function removeItem(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const retryPromise = (func, delay, times) =>
  new Promise((resolve, reject) => {
    return func()
      .then(resolve)
      .catch((reason) => {
        if (reason === false) {
          return reject(reason);
        }
        if (times > 1) {
          return timeout(delay)
            .then(retryPromise.bind(null, func, delay, times - 1))
            .then(resolve)
            .catch(reject);
        }
        return reject(reason);
      });
  });

logger('Starting in ' + ENV + ' env.');
export {
  logger,
  copy,
  timeout,
  retryPromise,
  getDomain,
  setAllReadBadge,
  setUnreadBadge,
  isInteger,
  isUserActive,
  storageReset,
  getLastFocusedWindow,
  removeItem,
};
if (ENV === 'debug') {
  window.utils = {
    logger,
    copy,
    timeout,
    retryPromise,
    getDomain,
    setAllReadBadge,
    setUnreadBadge,
    isInteger,
    isUserActive,
    storageReset,
    getLastFocusedWindow,
    removeItem,
  };
}
