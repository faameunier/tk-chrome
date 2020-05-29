import { logger, storageSet, storageGet, getDomain, removeItem } from './utils.js';
import {
  RELAXED,
  FOCUSED,
  CUSTOMIZED,
  INIT_FOCUSED_PROFILE,
  INIT_RELAXED_PROFILE,
} from '../config/settingsProfiles.js';

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
    this.inactive_policy = [];
    this.active_profile = RELAXED;
    this.settings = INIT_RELAXED_PROFILE;
    this.whitelist = [];
  }

  async initProfiles() {
    this.profiles = {
      focused: INIT_FOCUSED_PROFILE,
      relaxed: INIT_RELAXED_PROFILE,
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
      active_profile: this.active_profile,
      whitelist: this.whitelist,
      inactive_policy: this.inactive_policy,
    });
  }

  async load() {
    if (!this.loaded) {
      let data = await storageGet(['settings', 'active_profile', 'whitelist', 'inactive_policy']);
      try {
        logger(this, 'Loading settings from storage');
        if (
          typeof data.settings !== 'undefined' &&
          typeof data.active_profile !== 'undefined' &&
          typeof data.whitelist !== 'undefined' &&
          typeof data.inactive_policy !== 'undefined'
        ) {
          this.settings = data.settings;
          this.active_profile = data.active_profile;
          this.whitelist = data.whitelist;
          this.inactive_policy = data.inactive_policy;
        } else {
          throw 'Loading failed or version change';
        }
      } catch {
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

  async addToWhitelist(url) {
    const domain = getDomain(url);
    if (!this.whitelist.includes(domain)) {
      this.whitelist.push(domain);
      await this.save();
      return true;
    }
    await this.save();
    return false;
  }

  async removeFromWhitelist(url) {
    this.whitelist = removeItem(this.whitelist, windowId);
    await this.save();
    return false;
  }

  async addToInactivePolicy(windowId) {
    if (!this.inactive_policy.includes(windowId)) {
      this.inactive_policy.push(windowId);
      await this.save();
      return true;
    }
    return false;
  }

  async removeFromInactivePolicy(windowId) {
    this.inactive_policy = removeItem(this.inactive_policy, windowId);
    await this.save();
    return true;
  }

  async resetInactivePolicy() {
    this.inactive_policy = [];
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

export var settingsManager = new SettingsManager();
if (ENV === 'debug') {
  window.settingsManager = settingsManager;
}
