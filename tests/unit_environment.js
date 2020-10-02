const NodeEnvironment = require('jest-environment-node');
const browserMock = require('webextensions-api-mock');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.chrome = browserMock.default();
    this.global.chrome.runtime.id = 'test';
    this.global.__browser__ = this.global.chrome;
    this.global.window = {};
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
