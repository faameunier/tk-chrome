import { settingsManager } from './settings.js';
import { memoryManager } from './memory.js';
import { logger, storageSet, storageGet, storageReset } from './utils.js';

class MigrationManager {
  static async setVersion() {
    logger('Saving version.');
    await storageSet({
      version: chrome.runtime.getManifest().version
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
    storageReset();
    settingsManager.reset();
    memoryManager.reset();
  }

  static async toCurrent(version) {
    // till 1.0.2
    if (parseInt(version[0]) < 1) {
      await this.toIPO(version);
    } else if (parseInt(version[0]) > 1){
      await this.toIPO(version); // fuck you
    } else {
      // nothing to do between 1.0.0, 1.0.1 and 1.0.2
      logger('Migration done.');
    }
  }
}

export { MigrationManager };
if (ENV === 'debug') {
  window.MigrationManager = MigrationManager;
}