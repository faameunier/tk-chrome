class AbstractScorer{static async score(a){let b=this.scoreStatistics(a.statistics),c=this.scoreCache(a.cache),d=this.mergeScores([b].concat(c));return d}static scoreStatistics(){throw new Error("To be implemented")}static scoreCache(){throw new Error("To be implemented")}static mergeScores(){throw new Error("To be implemented")}}class RandomScorer extends AbstractScorer{static scoreStatistics(){return Math.random()}static scoreCache(){return[]}static mergeScores(a){return a[0]}}class DefaultScorer extends AbstractScorer{static scoreStatistics(a){let b=copy(a);return b.protection_timestamp||(b.protection_timestamp=0),b.last_active_timestamp||(b.last_active_timestamp=0),a.total_active_time+a.total_inactive_time+a.total_cached_time>=memoryManager.settings.scorer.min_active&&Date.now()-a.protection_timestamp>=memoryManager.settings.scorer.protection_time?Math.log(Math.min(Math.max(a.total_active_time,1e4),3600000))*a.total_active_time/(a.total_inactive_time+a.total_active_time)*Math.max(1,1e5*Math.exp(-(Date.now()-a.last_active_timestamp))):MAXIMUM_SCORE}static scoreCache(a){var b=[];return a&&a.forEach(a=>{b.push(this.scoreStatistics(a.value))}),b}static mergeScores(a){for(var b=0,c=0;c<a.length;c++){let d=a[c];0==c?b+=d:d!==MAXIMUM_SCORE&&(b+=d*Math.pow(memoryManager.settings.scorer.cached_decay,c))}return Math.min(b,MAXIMUM_SCORE)}}class Scorer{static score(a){return"random"===SCORER?RandomScorer.score(a):DefaultScorer.score(a)}}