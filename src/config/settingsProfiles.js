const RELAXED = 'relaxed';
const FOCUSED = 'focused';
const CUSTOMIZED = 'customized';

const INIT_RELAXED_PROFILE = {
  memory: {
    cache_size: 5,
    min_time_full_stats_update: 1 * 1000,
    min_time_garbage_collector: 5 * 1000,
  },
  policy: {
    active_policy: true,
    target_tabs: 12,
    score_threshold: 50,
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

const INIT_FOCUSED_PROFILE = {
  memory: {
    cache_size: 5,
    min_time_full_stats_update: 1 * 1000,
    min_time_garbage_collector: 5 * 1000,
  },
  policy: {
    active_policy: true,
    target_tabs: 5,
    score_threshold: 50,
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

export { RELAXED, FOCUSED, CUSTOMIZED, INIT_FOCUSED_PROFILE, INIT_RELAXED_PROFILE };
