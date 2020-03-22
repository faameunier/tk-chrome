class AbstractScorer {
  static async score(tab) {
    let sScore = this.scoreStatistics(tab.statistics);
    let cScore = this.scoreCache(tab.cache);
    let mergedScore = this.mergeScores([sScore].concat(cScore));
    return mergedScore;
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
    if (stats.total_active_time + stats.total_inactive_time + stats.total_cached_time >= memoryManager.settings.scorer.min_active) {
      return Math.log(stats.total_active_time) * stats.total_active_time  / (stats.total_inactive_time + stats.total_active_time) * Math.log(stats.activated);
    } else {
      return MAXIMUM_SCORE;
    }
  }

  static scoreCache(cache) {
    var cachedScores = [];
    let acc = (state) => {
      cachedScores.push(this.scoreStatistics(state.value));
    }
    if (cache) {
      cache.forEach(acc);
    }
    return cachedScores;
  }

  static mergeScores(scores) {
    var result = 0;
    for(var i = 0; i < scores.length; i++) {
      let temp = scores[i];
      if (i === 0) {
        result += temp
      } else if (temp !== MAXIMUM_SCORE) {
        result += (temp * Math.pow(memoryManager.settings.scorer.cached_decay, i));
      }
    }
    return Math.min(result, MAXIMUM_SCORE);
  }
}

class Scorer {
  static score(tab) {
    if(SCORER === 'random') {
      return RandomScorer.score(tab);
    } else {
      return DefaultScorer.score(tab);
    }
  }
}