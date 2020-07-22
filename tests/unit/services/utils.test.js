const utils = require('../../../src/services/utils.js');
const _ = require('lodash');
const browser = require('sinon-chrome/webextensions');

jest.mock('webextension-polyfill', () => require('sinon-chrome/webextensions'))

describe('isInteger', () => {
  test('letters return false', () => {
    expect(utils.isInteger('test')).toBeFalsy();
  });

  test('integers return true', () => {
    expect(utils.isInteger('78')).toBeTruthy();
  });

  test('float return false', () => {
    expect(utils.isInteger('78.7')).toBeFalsy();
  });

  test('spaces return false', () => {
    expect(utils.isInteger(' 7')).toBeFalsy();
  });

  test('null return false', () => {
    expect(utils.isInteger(null)).toBeFalsy();
  });
});

describe('timeout', () => {
  test('makes us wait', async () => {
    let start = Date.now();
    await utils.timeout(500);
    expect((Date.now() - start) - 500).toBeLessThan(10);
  });
});

describe('getDomain', () => {
  test('extracts domain', async () => {
    expect(utils.getDomain('http://google.com/fhre')).toBe('google.com');
  });

  test('ignores subdomain', async () => {
    expect(utils.getDomain('http://test.google.com/fhre')).toBe('google.com');
  });

  test('returns input one failure', async () => {
    expect(utils.getDomain('thisWillFail')).toBe('thisWillFail');
  });
});

describe('copy', () => {
  test('creates a deep copy', () => {
    const a = { test: [1, 2] };
    expect(_.isEqual(utils.copy(a), a)).toBeTruthy();
  });

  test('source is unmodified', () => {
    const a = { test: [1, 2] };
    let b = utils.copy(a);
    b.test = [2, 3];
    expect(_.isEqual(a.test, [1, 2])).toBeTruthy();
  });
});

describe('setAllReadBadge', () => {
  beforeEach(() => {
    browser.flush();
  });

  test('setBadge was called once', () => {
    utils.setAllReadBadge();
    expect(browser.browserAction.setBadgeText.calledOnce).toBeTruthy();
  });

  test('badge was reset', () => {
    utils.setAllReadBadge();
    expect(browser.browserAction.setBadgeText.withArgs({ text: '' }).calledOnce).toBeTruthy();
  });
});
