const utils = require('../../../src/services/utils.js');
const _ = require('lodash');
const sinon = require('sinon');

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

describe('removeItem', () => {
  test('remove unique item in list', () => {
    const a = [1, 2, 3];
    const b = utils.removeItem(a, 2);
    expect(_.isEqual(b, [1, 3])).toBeTruthy();
  });

  test('remove first found item in list', () => {
    const a = [1, 2, 3, 2];
    const b = utils.removeItem(a, 2);
    expect(_.isEqual(b, [1, 3, 2])).toBeTruthy();
  });

  test('works with mutable objects', () => {
    const obj = { delete: 'me' };
    const a = [1, obj, 3, obj];
    const b = utils.removeItem(a, obj);
    expect(_.isEqual(b, [1, 3, obj])).toBeTruthy();
  });

  test('object in first position', () => {
    const a = [1, 2, 3];
    const b = utils.removeItem(a, 1);
    expect(_.isEqual(b, [2, 3])).toBeTruthy();
  });

  test('object in last position', () => {
    const a = [1, 2, 3];
    const b = utils.removeItem(a, 3);
    expect(_.isEqual(b, [1, 2])).toBeTruthy();
  });

  test('object is not found', () => {
    const a = [1, 2, 3];
    const b = utils.removeItem(a, 5);
    expect(_.isEqual(b, [1, 2, 3])).toBeTruthy();
  });
});

describe('retryPromise', () => {
  test('return result on first try if promise resolves', async () => {
    let fun = sinon.stub();
    fun.onFirstCall().resolves('success');
    let result = await utils.retryPromise(fun, 100, 3);
    expect(result).toBe('success');
    expect(fun.calledOnce).toBeTruthy();
  });

  test('automatically retries on failure', async () => {
    let fun = sinon.stub();
    fun.onFirstCall().rejects(Error('error')).onSecondCall().resolves('success');
    let result = await utils.retryPromise(fun, 100, 3);
    expect(result).toBe('success');
    expect(fun.calledTwice).toBeTruthy();
  });

  test('fails on max attempts', async () => {
    let fun = sinon.stub();
    fun
      .onFirstCall()
      .rejects(new Error('error1'))
      .onSecondCall()
      .rejects(new Error('error2'))
      .onThirdCall()
      .rejects(new Error('error3'))
      .onCall(3) // call 4
      .resolves('success');
    try {
      await utils.retryPromise(fun, 100, 3);
    } catch (e) {
      expect(e.message).toMatch('error3');
    }
    expect(fun.callCount).toBe(3);
  });

  test('does not retry when false is thrown', async () => {
    let fun = sinon.stub();
    let failed = sinon.stub();
    fun
      .onFirstCall()
      .rejects(new Error('error1'))
      .onSecondCall()
      .returns(
        new Promise((resolve, reject) => {
          throw false;
        })
      ) // rejecting and throwing an error doesn't work exactly the same way.
      .onThirdCall()
      .rejects(new Error('error3'))
      .onCall(3) // call 4
      .resolves('success');
    try {
      await utils.retryPromise(fun, 100, 3);
    } catch (e) {
      failed();
      expect(e.message).toBeFalsy();
    }
    expect(failed.calledOnce).toBeTruthy();
    expect(fun.callCount).toBe(2);
  });
});
