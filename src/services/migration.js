import { settingsManager } from './settings.js';
import { memoryManager } from './memory.js';
import { logger, storageSet, storageGet, storageReset } from './utils.js';
import { v4 as uuidv4 } from 'uuid';

class MigrationManager {
  static async setVersion() {
    logger('Saving version.');
    await storageSet({
      version: chrome.runtime.getManifest().version,
    });
  }

  static async migrate() {
    let version = await storageGet(['version']);
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
    const data = await storageGet(['inactive_policy']);
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
    if (parseInt(version[0]) > 1){
      await this.toIPO(version); // fuck you
    }
    if (parseInt(version[0]) < 1) {
      await this.toIPO(version);
    }
    if (parseInt(version[1]) < 1){
      await this.addUUIDs(version);
    }
    // nothing to do between 1.0.0, 1.0.1 and 1.0.2
    logger('Migration done.');
  }
}

export { MigrationManager };
if (ENV === 'debug') {
  window.MigrationManager = MigrationManager;
}