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

class Scorer {
  static score(tab) {
    if(SCORER === 'random') {
      return RandomScorer.score(tab)
    }
  }
}