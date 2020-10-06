const memory = require('../../../src/services/memory.js');
const stats = require('../../../src/services/stats.js');
const _ = require('lodash');

jest.mock('webextension-polyfill', () => global.__browser__);

describe('Statistics load and save are stored', () => {
  beforeEach(() => {
    global.__browser__.sinonSandbox.resetHistory();
  });

  test('first load initiate', async () => {
    global.__browser__.storage.local.get.resolves({});
    let res = await stats.StatsManager.load();
    expect(_.isEqual({}, res)).toBeTruthy();
  });

  test('load returns stats object', async () => {
    let obj = { closed: { time: [1, 2, 3], value: [4, 5, 6] } };
    global.__browser__.storage.local.get.resolves({ stats: obj });
    let res = await stats.StatsManager.load();
    expect(_.isEqual(obj, res)).toBeTruthy();
  });
});
