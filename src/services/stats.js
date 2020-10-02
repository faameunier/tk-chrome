import browser from 'webextension-polyfill';
import _ from 'lodash';
import dayjs from 'dayjs';

import { memoryManager } from './memory.js';
import { copy } from './utils.js';
import { AGG_STATS } from '../config/env.js';

class StatsManager {
  constructor() {}

  static async run() {}

  static async load() {
    return await browser.storage.local.get(['stats']);
  }

  static async save(stats) {
    logger(this, 'Saved');
    await browser.storage.local.set({
      stats: stats,
    });
  }

  static async upsert() {}

  static preprocessClosedHistory() {
    let data = copy(memoryManager.closed_history);
    data = data.map((website) => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.date = dayjs(deletionTime).startOf(AGG_STATS);
      }
      return website;
    });
    return data;
  }

  static metricClosedTabs(data) {
    let count = _.countBy(data, (website) => website.date);
    count = _.pairs(count);
    count = _.sortBy(count, (d) => d[0]);
    count = _.unzip(count);
    return { time: count[0], value: count[1], agg:'sum' };
  }
}

export { StatsManager };
if (ENV === 'debug') {
  window.StatsManager = StatsManager;
}
