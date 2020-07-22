const utils = require('../../../src/services/utils.js');
const _ = require('lodash');

jest.mock('webextension-polyfill', () => global.__browser__);

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
    expect(Date.now() - start - 500).toBeLessThan(10);
  });
});

describe('getDomain', () => {
  test('extracts domain', () => {
    expect(utils.getDomain('http://google.com/fhre')).toBe('google.com');
  });

  test('ignores subdomain', () => {
    expect(utils.getDomain('http://test.google.com/fhre')).toBe('google.com');
  });

  test('returns input one failure', () => {
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
    global.__browser__.sinonSandbox.resetHistory();
  });

  test('setBadge was called once', () => {
    utils.setAllReadBadge();
    expect(global.__browser__.browserAction.setBadgeText.calledOnce).toBeTruthy();
  });

  test('badge was reset', () => {
    utils.setAllReadBadge();
    expect(global.__browser__.browserAction.setBadgeText.withArgs({ text: '' }).calledOnce).toBeTruthy();
  });
});

describe('setUnreadBadge', () => {
  beforeEach(() => {
    global.__browser__.sinonSandbox.resetHistory();
  });

  test('setBadge has background color', async () => {
    global.__browser__.browserAction.getBadgeText.resolves(null);
    await utils.setUnreadBadge();
    expect(global.__browser__.browserAction.setBadgeBackgroundColor.calledOnce).toBeTruthy();
  });

  test('badge starts at 1', async () => {
    global.__browser__.browserAction.getBadgeText.onCall(0).resolves('coucou');
    await utils.setUnreadBadge().catch((d) => console.log(d));
    expect(global.__browser__.browserAction.setBadgeText.withArgs({ text: '1' }).calledOnce).toBeTruthy();
  });

  test('badge increments', async () => {
    for (let i = 0; i <= 10; i++) {
      global.__browser__.browserAction.getBadgeText.onCall(i).resolves(i);
      await utils.setUnreadBadge().catch((d) => console.log(d));
      expect(
        global.__browser__.browserAction.setBadgeText.withArgs({ text: (i + 1).toString() }).calledOnce
      ).toBeTruthy();
    }
  });
});
