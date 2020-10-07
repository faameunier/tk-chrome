import browser from 'webextension-polyfill';
import { settingsManager } from './settings.js';
import { memoryManager } from './memory.js';
import { logger, storageReset } from './utils.js';
import { v4 as uuidv4 } from 'uuid';
import { to1_1_0 } from '../config/notificationConf.js';

class MigrationManager {
  static async setVersion() {
    logger('Saving version.');
    let installData = await browser.storage.local.get(['uuid', 'installed_at', 'updated_at']);
    // memoryManager may not be loaded
    if(!memoryManager.loaded) {
      await memoryManager.load();
    }
    let oldestMemory = memoryManager.closed_history[0] ? memoryManager.closed_history[0].deletion_time : Date.now();
    await browser.storage.local.set({
      version: browser.runtime.getManifest().version,
      uuid: installData.uuid ? installData.uuid : uuidv4(),
      installed_at: installData.installed_at ? installData.installed_at : oldestMemory,
      updated_at: Date.now(),
      user_agent: navigator.userAgent,
    });
  }

  static async migrate() {
    let version = await browser.storage.local.get(['version']);
    if (!version.version) {
      version = await this.guessVersion();
    } else {
      version = version.version;
    }
    logger('Migrating from ' + version);

    await this.toCurrent(version.split('.'));
    await this.setVersion();
  }

  static async guessVersion() {
    const data = await browser.storage.local.get(['inactive_policy']);
    if (data.inactive_policy) {
      return '1.0.x';
    }
    return '0.0.1';
  }

  static async toIPO(version) {
    await storageReset();
    await settingsManager.reset();
    await memoryManager.reset();
  }

  static async addUUIDs(version) {
    await memoryManager.load();
    let tabs = memoryManager.tabs;
    let tab_ids = Object.keys(tabs);
    for (var i = 0; i < tab_ids.length; i++) {
      tabs[tab_ids[i]].uuid = uuidv4();
    }
    memoryManager.tabs = tabs;

    let closed_history = memoryManager.closed_history;
    for (var i = 0; i < closed_history.length; i++) {
      closed_history[i].uuid = uuidv4();
    }
    memoryManager.closed_history = closed_history;

    await memoryManager.save();
  }

  static async toCurrent(version) {
    // till 1.1.x
    if (parseInt(version[0]) < 1) {
      await this.toIPO(version);
    }
    if (parseInt(version[1]) < 1) {
      await this.addUUIDs(version);
      browser.notifications.create(to1_1_0);
    }
    // nothing to do between 1.0.0, 1.0.1 and 1.0.2
    logger('Migration done.');
  }
}

export { MigrationManager };
if (ENV === 'debug') {
  window.MigrationManager = MigrationManager;
}
