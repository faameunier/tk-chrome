class SettingsManager {
  constructor() {
    if (!SettingsManager.instance) {
      logger(this, 'Instanciating empty SettingsManager');
      SettingsManager.instance = this;
      this.init();
    }
    return SettingsManager.instance;
  }

  async init() {
    this.profile = {
      focused: false,
      relaxed: true,
      customized: false,
    };
    this.settings = {
      memory: {
        cache_size: 5,
        min_time_full_stats_update: 1 * 1000,
        min_time_garbage_collector: 5 * 1000,
      },
      policy: {
        target_tabs: 12,
        score_threshold: 50,
        decay: 0.8,
        min_time: 3 * 1000,

        active: false,
        pinned: false,
        audible: false,
      },
      scorer: {
        min_active: 3 * 1000,
        protection_time: 5 * 60 * 1000,
        cached_decay: 0.7,
      },
    };
  }

  async reset() {
    this.init();
    await this.save();
  }

  async save() {
    logger(this, 'Saved');
    await storageSet({
      tabby_settings: this.settings,
      tabby_profile: this.profile,
    });
  }

  async load() {
    await storageGet(['tabby_settings', 'tabby_profile']).then((data) => {
      try {
        logger(this, 'Loading settings from storage');
        if (typeof data.tabby_settings !== 'undefined') {
          this.settings = data.tabby_settings;
          this.profile = data.tabby_profile;
        } else {
          this.reset();
        }
      } catch {
        logger(this, 'Loading settings fail');
        this.reset();
      }
    });
  }
  async updateSettings(settings) {
    this.settings = settings;
    await this.save();
  }
  async updateSettingsProfile(profile) {
    this.profile = profile;
    if (profile.focused) {
      this.settings['policy']['target_tabs'] = 5;
    } else if (profile.relaxed) {
      this.settings['policy']['target_tabs'] = 12;
    }
    await this.save();
  }
}

var settingsManager = new SettingsManager();
