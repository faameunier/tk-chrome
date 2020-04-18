class SettingsManager {
  constructor() {
    if (!SettingsManager.instance) {
      logger(this, 'Instanciating empty SettingsManager');
      SettingsManager.instance = this;
      this.initProfiles();
      this.load();
    }
    return SettingsManager.instance;
  }

  async init() {
    this.active_profile = RELAXED;
    this.settings = INIT_RELAXED_PROFILE;
  }
  async initProfiles() {
    this.profiles = {
      focused: INIT_FOCUSED_PROFILE,
      relaxed: INIT_RELAXED_PROFILE,
    };
  }

  async reset() {
    this.init();
    this.initProfiles();
    await this.save();
  }

  async save() {
    logger(this, 'Saved');
    await storageSet({
      tabby_settings: this.settings,
      tabby_profiles: this.profiles,
      tabby_active_profile: this.active_profile,
    });
  }

  async load() {
    await storageGet([
      'tabby_settings',
      'tabby_active_profile',
      //'tabby_profiles',
    ]).then((data) => {
      try {
        logger(this, 'Loading settings from storage');
        if (
          typeof data.tabby_settings !== 'undefined' &&
          //typeof data.tabby_profiles !== 'undefined' &&
          typeof data.tabby_active_profile !== 'undefined'
        ) {
          this.settings = data.tabby_settings;
          //this.profiles = data.tabby_profiles;
          this.active_profile = data.tabby_active_profile;
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
  async updateSettingsProfile(active_profile) {
    this.active_profile = active_profile;
    if (active_profile !== CUSTOMIZED) {
      this.settings = this.profiles[active_profile];
    }
    await this.save();
  }
}

var settingsManager = new SettingsManager();
