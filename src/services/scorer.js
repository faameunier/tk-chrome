import { copy } from './utils.js';
import { settingsManager } from './settings.js';
import { SCORER, MAXIMUM_SCORE } from '../config/env.js';
import { PROTECTED_URL } from '../config/websites.js';
import { sigmoidScaled, exponentialDecay, exponentialDecayReversed, bound, ReLU } from './math.js';

class AbstractScorer {
  static async score(tab) {
    let sScore = this.scoreStatistics(this.augmentedStatistics(tab.statistics, tab));
    let cScore = this.scoreCache(tab);
    let mergedScore = this.mergeScores([sScore].concat(cScore));
    return mergedScore;
  }

  static augmentedStatistics(stats, tab) {
    return stats;
  }

  static scoreStatistics(stats) {
    throw new Error('To be implemented');
  }

  static scoreCache(cache) {
    throw new Error('To be implemented');
  }

  static mergeScores(scores) {
    throw new Error('To be implemented');
  }
}

class RandomScorer extends AbstractScorer {
  static scoreStatistics(stats) {
    return Math.random();
  }

  static scoreCache(cache) {
    return [];
  }

  static mergeScores(scores) {
    return scores[0];
  }
}

class DefaultScorer extends AbstractScorer {
  static scoreStatistics(stats) {
    let tStats = copy(stats);
    if (!tStats.protection_timestamp) {
      tStats.protection_timestamp = 0;
    }
    if (
      tStats.total_active_time + tStats.total_inactive_time + tStats.total_cached_time >=
        settingsManager.settings.scorer.min_active &&
      Date.now() - tStats.protection_timestamp >= settingsManager.settings.scorer.protection_time
    ) {
      return (
        ((Math.log(Math.min(Math.max(tStats.total_active_time, 10000), 3600 * 1000)) * tStats.total_active_time) /
          (tStats.total_inactive_time + tStats.total_active_time)) *
        Math.max(1, Math.exp(-(Date.now() - tStats.last_active_timestamp)) * 100000)
      );
    } else {
      return MAXIMUM_SCORE;
    }
  }

  static scoreCache(tab) {
    let cache = tab.cache;
    var cachedScores = [];
    let acc = (state) => {
      cachedScores.push(this.scoreStatistics(this.augmentedStatistics(state.value, null)));
    };
    if (cache) {
      cache.forEach(acc);
    }
    return cachedScores;
  }

  static mergeScores(scores) {
    var result = 0;
    for (var i = 0; i < scores.length; i++) {
      let temp = scores[i];
      if (i === 0) {
        result += temp;
      } else if (temp !== MAXIMUM_SCORE) {
        result += temp * Math.pow(settingsManager.settings.scorer.cached_decay, i);
      }
    }
    return Math.min(result, MAXIMUM_SCORE);
  }
}

class v1Scorer extends DefaultScorer {
  static scoreStatistics(stats) {
    if (stats.hard_flag == 1) {
      return MAXIMUM_SCORE;
    }
    let now = Date.now();
    let total_time = stats.total_active_time + stats.total_inactive_time + 1;
    let utilization_rate = stats.total_active_time / total_time;
    let soft_protection_delay = stats.wc == 1 ? 20 * 60 * 1000 : 3 * 60 * 1000;
    let hard_protection_enveloppe =
      1 +
      (MAXIMUM_SCORE - 1) *
        sigmoidScaled(
          ReLU(now - stats.protection_timestamp - settingsManager.settings.scorer.protection_time),
          settingsManager.settings.scorer.protection_time / 10,
          0.99995
        );
    let soft_protection_enveloppe =
      1 +
      (MAXIMUM_SCORE - 1) * sigmoidScaled(ReLU(now - stats.soft_protection_timestamp), soft_protection_delay, 0.99995);
    let active_protection_enveloppe =
      1 +
      (MAXIMUM_SCORE - 1) *
        sigmoidScaled(
          ReLU(total_time - settingsManager.settings.scorer.min_active),
          settingsManager.settings.scorer.min_active / 10,
          0.99995
        );
    let protection_enveloppe = Math.max(
      hard_protection_enveloppe,
      soft_protection_enveloppe,
      active_protection_enveloppe
    );
    if (protection_enveloppe + 1 >= MAXIMUM_SCORE) {
      return MAXIMUM_SCORE;
    }

    let active_bonus = Math.log(bound(((stats.total_active_time - 10 * 1000) / 30) * 60 * 1000) * 2 + 2); // (in range [0.7; 1.4])
    let rate_clean = utilization_rate + 1; // in range [1;2]
    let decay = exponentialDecay(now - stats.last_active_timestamp, 2 * 60 * 1000) + 1; // in range [1;2]
    return Math.round((protection_enveloppe * active_bonus * rate_clean * decay + Number.EPSILON) * 100) / 100;
  }

  static augmentedStatistics(stats, tab) {
    let augStats = copy(stats);
    augStats.soft_protection_timestamp = 0;
    augStats.hard_flag = 0;
    augStats.wc = 0;
    if (!augStats.protection_timestamp) {
      augStats.protection_timestamp = 0;
    }
    if (tab) {
      let rx = new RegExp(PROTECTED_URL.join('|'));
      if (rx.exec(tab.full_url)) {
        augStats.wc = 1;
      }
      if (settingsManager.whitelist.length > 0) {
        rx = new RegExp(settingsManager.whitelist.join('|'));
        if (rx.exec(tab.url)) {
          augStats.hard_flag = 1;
        }
      }
      if (settingsManager.settings.scorer.active) {
        augStats.soft_protection_timestamp = Math.max(
          augStats.soft_protection_timestamp,
          augStats.last_active_timestamp
        );
        if (tab.active) {
          augStats.hard_flag = 1;
        }
      }
      if (settingsManager.settings.scorer.pinned) {
        augStats.soft_protection_timestamp = Math.max(augStats.soft_protection_timestamp, tab.pinned_switch_timestamp);
        if (tab.pinned) {
          augStats.hard_flag = 1;
        }
      }
      if (settingsManager.settings.scorer.audible) {
        augStats.soft_protection_timestamp = Math.max(augStats.soft_protection_timestamp, tab.audible_switch_timestamp);
        if (tab.audible) {
          augStats.hard_flag = 1;
        }
      }
    }
    return augStats;
  }
}

class Scorer {
  static score(tab) {
    switch (SCORER) {
      case 'random':
        return RandomScorer.score(tab);
      case 'v1':
        return v1Scorer.score(tab);
      default:
        return DefaultScorer.score(tab);
    }
  }
}

export { Scorer };
