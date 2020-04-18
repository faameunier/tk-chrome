class SettingsManager {
  constructor() {
    if (!SettingsManager.instance) {
      logger(this, 'Instanciating empty SettingsManager');
      SettingsManager.instance = this;
      this.init();
      this.initProfiles();
      this.loaded = false;
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
      relaxed: INIT_RELAXED_PROFILE
    };
  }

  async reset() {
    logger(this, 'Hard reset');
    this.init();
    this.initProfiles();
    await this.save();
    await this.load(); // setting loaded var if needed
  }

  async save() {
    logger(this, 'Saved');
    await storageSet({
      settings: this.settings,
      active_profile: this.active_profile
    });
  }

  async load() {
    if (!this.loaded) {
      let data = await storageGet(['settings', 'active_profile']);

      try {
        logger(this, 'Loading settings from storage');

        if (typeof data.settings !== 'undefined' && //typeof data.profiles !== 'undefined' &&
        typeof data.active_profile !== 'undefined') {
          this.settings = data.settings; //this.profiles = data.profiles;

          this.active_profile = data.active_profile;
        } else {
          throw 'Loading failed or version change';
        }
      } catch (_unused) {
        logger(this, 'Loading settings fail');
        await this.save();
      }

      this.loaded = true;
    }
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