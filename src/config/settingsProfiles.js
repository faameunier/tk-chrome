const RELAXED = 'relaxed';
const FOCUSED = 'focused';
const CUSTOMIZED = 'customized';
var INIT_RELAXED_PROFILE = {};
var INIT_FOCUSED_PROFILE = {};

if (ENV === 'debug') {
  INIT_RELAXED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 1 * 1000,
      min_time_garbage_collector: 5 * 1000,
    },
    policy: {
      target_tabs: 12,
      decay: 0.8,
      min_time: 3 * 1000,

      active: false,
      pinned: false,
      audible: false,
    },
    scorer: {
      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.7,
    },
  };

  INIT_FOCUSED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 1 * 1000,
      min_time_garbage_collector: 5 * 1000,
    },
    policy: {
      target_tabs: 5,
      decay: 0.8,
      min_time: 3 * 1000,

      active: false,
      pinned: false,
      audible: false,
    },
    scorer: {
      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.7,
    },
  };
} else {
  INIT_RELAXED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 10 * 1000,
      min_time_garbage_collector: 10 * 60 * 1000,
    },
    policy: {
      target_tabs: 12,
      decay: 0.8,
      min_time: 3 * 1000,

      active: false,
      pinned: false,
      audible: false,
    },
    scorer: {
      min_active: 5 * 60 * 1000,
      protection_time: 15 * 60 * 1000,
      cached_decay: 0.7,
    },
  };

  INIT_FOCUSED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 10 * 1000,
      min_time_garbage_collector: 10 * 60 * 1000,
    },
    policy: {
      target_tabs: 5,
      decay: 0.8,
      min_time: 3 * 1000,

      active: false,
      pinned: false,
      audible: false,
    },
    scorer: {
      min_active: 5 * 60 * 1000,
      protection_time: 15 * 60 * 1000,
      cached_decay: 0.7,
    },
  };
}

Object.freeze(INIT_FOCUSED_PROFILE);
Object.freeze(INIT_RELAXED_PROFILE);

export { RELAXED, FOCUSED, CUSTOMIZED, INIT_FOCUSED_PROFILE, INIT_RELAXED_PROFILE };
