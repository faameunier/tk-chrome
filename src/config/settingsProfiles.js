const RELAXED = 'relaxed';
const FOCUSED = 'focused';
const CUSTOMIZED = 'customized';
var INIT_RELAXED_PROFILE = {};
var INIT_FOCUSED_PROFILE = {};

if (ENV === 'debug') {
  INIT_RELAXED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 1 * 1000, // minimum time between 2 full stats update for all tabs
      min_time_garbage_collector: 5 * 1000, // minimum time between 2 full tab garbage collection
    },
    policy: {
      target_tabs: 12, // tabby will stop closing tabs when we have less than target_tabs open
      decay: 0.8, // when the number of tab increases, tabby will delete more tabs
      min_time: 3 * 1000, // Tabby will kill about 1 tab per min_time (depending on activation rules)

      // IGNORED tabs
      active: false, // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false,
    },
    scorer: {
      // PROTECTED tabs
      active: true, // these tabs will be given absolute maximum score + extended protection
      pinned: true, // when the status is lost.
      audible: true,

      min_active: 5 * 1000, // minimum time a tab has to exist before being scored
      protection_time: 15 * 1000, // A restored tab is protected for this long
      cached_decay: 0.2, // In current scorer, the cache score is added to the current score with a decreasing factor
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

      // IGNORED tabs
      active: false, // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false,
    },
    scorer: {
      // PROTECTED tabs
      active: true, // these tabs will be given absolute maximum score + extended protection
      pinned: true, // when the status is lost.
      audible: true,

      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.2,
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

      // IGNORED tabs
      active: false, // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false,
    },
    scorer: {
      // PROTECTED tabs
      active: true, // these tabs will be given absolute maximum score + extended protection
      pinned: true, // when the status is lost.
      audible: true,

      min_active: 5 * 60 * 1000,
      protection_time: 15 * 60 * 1000,
      cached_decay: 0.2,
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

      // IGNORED tabs
      active: false, // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false,
    },
    scorer: {
      // PROTECTED tabs
      active: true, // these tabs will be given absolute maximum score + extended protection
      pinned: true, // when the status is lost.
      audible: true,

      min_active: 5 * 60 * 1000,
      protection_time: 15 * 60 * 1000,
      cached_decay: 0.2,
    },
  };
}

Object.freeze(INIT_FOCUSED_PROFILE);
Object.freeze(INIT_RELAXED_PROFILE);

export { RELAXED, FOCUSED, CUSTOMIZED, INIT_FOCUSED_PROFILE, INIT_RELAXED_PROFILE };
