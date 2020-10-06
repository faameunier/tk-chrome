import browser from 'webextension-polyfill';
import _ from 'lodash';
import dayjs from 'dayjs';

import { memoryManager } from './memory.js';
import { copy } from './utils.js';
import { AGG_STATS } from '../config/env.js';

class StatsManager {
  static async run(metrics) {
    let newStats = {};
    let data = this.preprocessClosedHistory();
    let stats = await this.load();
    Object.assign(newStats, {
      closed: metrics.includes('closed') ? this.metricClosedTabs(data) : null,
      killed: metrics.includes('killed') ? this.metricKilledTabs(data) : null,
      restored: metrics.includes('restored') ? this.metricRestoredTabs(data) : null,
      opened: metrics.includes('opened') ? this.eventOpenedTab() : null,
    });
    this.upsert(stats, newStats);
    this.save(stats);
  }

  static async load() {
    let data = await browser.storage.local.get(['stats']);
    if (data.stats) {
      return data.stats;
    }
    return {};
  }

  /* istanbul ignore next */
  static async save(stats) {
    logger(this, 'Saved');
    await browser.storage.local.set({
      stats: stats,
    });
  }

  static upsert(stats, newStats) {
    // O(max(|stats|, |newStats|))
    Object.keys(newStats).forEach((key) => {
      if (!stats[key]) {
        stats = Object.assign(stats, { [key]: newStats[key] });
      } else {
        let i = 0;
        let j = 0;
        while (i < newStats[key].time.length && j < stats[key].time.length) {
          if (newStats[key].time[i] > stats[key].time[j]) {
            j++;
          } else if (newStats[key].time[i] == stats[key].time[j]) {
            switch (newStats[key].agg) {
              case 'max':
                stats[key].value[j] = Math.max(newStats[key].value[i], stats[key].value[j]);
                break;
              case 'sum':
                stats[key].value[j] += newStats[key].value[i];
                break;
              default:
                throw new Error('Statistic ' + key + ' has an unknown aggregation method.');
            }
            i++;
            j++;
          } else {
            stats[key].value.splice(j, 0, newStats[key].value[i]);
            stats[key].time.splice(j, 0, newStats[key].time[i]);
            i++;
          }
        }
        if (i < newStats[key].time.length) {
          stats[key].time = stats[key].time.concat(newStats[key].time.slice(i));
          stats[key].value = stats[key].value.concat(newStats[key].value.slice(i));
        }
        stats[key].agg = newStats[key].agg;
      }
    });
  }

  static preprocessClosedHistory() {
    let data = copy(memoryManager.closed_history);
    for (let i = 0; i < data.length; i++) {
      let website = data[i];
      let deletionTime = new Date(website.deletion_time);
      website.date = dayjs(deletionTime).startOf(AGG_STATS).valueOf();
    }
    return data;
  }

  static metricClosedTabs(data) {
    let count = _.countBy(data, (website) => website.date);
    count = _.toPairs(count);
    count = _.sortBy(count, (d) => d[0]);
    count = _.unzip(count);
    return { time: count[0].map(Number), value: count[1], agg: 'max' };
  }

  static metricKilledTabs(data) {
    let count = _.countBy(
      _.filter(data, (website) => website.status == 'killed' || website.status == 'restored'),
      (website) => website.date
    );
    count = _.toPairs(count);
    count = _.sortBy(count, (d) => d[0]);
    count = _.unzip(count);
    return { time: count[0].map(Number), value: count[1], agg: 'max' };
  }

  static metricRestoredTabs(data) {
    let count = _.countBy(
      _.filter(data, (website) => website.status == 'restored'),
      (website) => website.date
    );
    count = _.toPairs(count);
    count = _.sortBy(count, (d) => d[0]);
    count = _.unzip(count);
    return { time: count[0].map(Number), value: count[1], agg: 'max' };
  }

  /* istanbul ignore next */
  static eventOpenedTab() {
    return { time: [dayjs().startOf(AGG_STATS).valueOf()], value: [1], agg: 'sum' };
  }
}

export { StatsManager };
if (ENV === 'debug') {
  window.StatsManager = StatsManager;
}
