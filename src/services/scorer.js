import { copy } from './utils.js';
import { settingsManager } from './settings.js';
import { SCORER, MAXIMUM_SCORE } from '../config/env.js';

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
    let cache = tab.cache
    var cachedScores = [];
    let acc = (state) => {
      cachedScores.push(this.scoreStatistics(this.augmentedStatistics(state.value, tab)));
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

class Scorer {
  static score(tab) {
    if (SCORER === 'random') {
      return RandomScorer.score(tab);
    } else {
      return DefaultScorer.score(tab);
    }
  }
}

export { Scorer };
