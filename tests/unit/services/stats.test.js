const memory = require('../../../src/services/memory.js');
const stats = require('../../../src/services/stats.js');
const config = require('../../../src/config/env.js');
const _ = require('lodash');

jest.mock('webextension-polyfill', () => global.__browser__);
jest.mock('../../../src/config/env.js', () => ({
  AGG_STATS: 'minute',
}));

const fakeData = [
  { deletion_time: 1602001085093, status: 'restored' },
  { deletion_time: 1602001094230, status: 'manual' },
  { deletion_time: 1602001095717, status: 'killed' },
  { deletion_time: 1602001101645, status: 'manual' },
  { deletion_time: 1602001102910, status: 'manual' },
  { deletion_time: 1602001107094, status: 'killed' },
  { deletion_time: 1602001110682, status: 'restored' },
  { deletion_time: 1602001113082, status: 'killed' },
  { deletion_time: 1602001118085, status: 'restored' },
  { deletion_time: 1602001124123, status: 'killed' },
  { deletion_time: 1602001129135, status: 'restored' },
  { deletion_time: 1602001130752, status: 'restored' },
  { deletion_time: 1602001134083, status: 'killed' },
  { deletion_time: 1602001136595, status: 'manual' },
  { deletion_time: 1602001141116, status: 'killed' },
  { deletion_time: 1602001149275, status: 'manual' },
  { deletion_time: 1602001151538, status: 'manual' },
  { deletion_time: 1602001151658, status: 'manual' },
  { deletion_time: 1602001159918, status: 'restored' },
  { deletion_time: 1602001161225, status: 'killed' },
  { deletion_time: 1602001163463, status: 'manual' },
  { deletion_time: 1602001164817, status: 'manual' },
  { deletion_time: 1602001166347, status: 'killed' },
  { deletion_time: 1602001172246, status: 'killed' },
  { deletion_time: 1602001172928, status: 'killed' },
  { deletion_time: 1602001176657, status: 'manual' },
  { deletion_time: 1602001183121, status: 'killed' },
  { deletion_time: 1602001189586, status: 'killed' },
  { deletion_time: 1602001207720, status: 'killed' },
  { deletion_time: 1602001217777, status: 'killed' },
  { deletion_time: 1602001219872, status: 'killed' },
  { deletion_time: 1602001239703, status: 'restored' },
  { deletion_time: 1602001245828, status: 'restored' },
  { deletion_time: 1602001250406, status: 'manual' },
  { deletion_time: 1602001251883, status: 'killed' },
  { deletion_time: 1602001261557, status: 'killed' },
  { deletion_time: 1602001265387, status: 'restored' },
  { deletion_time: 1602001265822, status: 'manual' },
  { deletion_time: 1602001271944, status: 'restored' },
  { deletion_time: 1602001276714, status: 'killed' },
  { deletion_time: 1602001283663, status: 'manual' },
  { deletion_time: 1602001299650, status: 'killed' },
  { deletion_time: 1602001306259, status: 'killed' },
  { deletion_time: 1602001308896, status: 'restored' },
  { deletion_time: 1602001317675, status: 'manual' },
  { deletion_time: 1602001327093, status: 'killed' },
  { deletion_time: 1602001332999, status: 'restored' },
  { deletion_time: 1602001334585, status: 'restored' },
  { deletion_time: 1602001339203, status: 'manual' },
  { deletion_time: 1602001339270, status: 'restored' },
  { deletion_time: 1602001348683, status: 'killed' },
  { deletion_time: 1602001353079, status: 'manual' },
  { deletion_time: 1602001357550, status: 'killed' },
  { deletion_time: 1602001359675, status: 'manual' },
  { deletion_time: 1602001361306, status: 'restored' },
  { deletion_time: 1602001366677, status: 'restored' },
  { deletion_time: 1602001384015, status: 'killed' },
  { deletion_time: 1602001390268, status: 'killed' },
  { deletion_time: 1602001393221, status: 'manual' },
  { deletion_time: 1602001396815, status: 'manual' },
  { deletion_time: 1602001399701, status: 'killed' },
  { deletion_time: 1602001400426, status: 'killed' },
  { deletion_time: 1602001406312, status: 'restored' },
  { deletion_time: 1602001411596, status: 'manual' },
  { deletion_time: 1602001420379, status: 'killed' },
  { deletion_time: 1602001435564, status: 'restored' },
  { deletion_time: 1602001441786, status: 'manual' },
  { deletion_time: 1602001443830, status: 'killed' },
  { deletion_time: 1602001444494, status: 'manual' },
  { deletion_time: 1602001444850, status: 'killed' },
  { deletion_time: 1602001448765, status: 'killed' },
  { deletion_time: 1602001451152, status: 'restored' },
  { deletion_time: 1602001454181, status: 'restored' },
  { deletion_time: 1602001462565, status: 'killed' },
  { deletion_time: 1602001466284, status: 'restored' },
  { deletion_time: 1602001471549, status: 'killed' },
  { deletion_time: 1602001480431, status: 'killed' },
  { deletion_time: 1602001490421, status: 'killed' },
  { deletion_time: 1602001497866, status: 'restored' },
  { deletion_time: 1602001499149, status: 'manual' },
  { deletion_time: 1602001502031, status: 'killed' },
  { deletion_time: 1602001510268, status: 'killed' },
  { deletion_time: 1602001510879, status: 'killed' },
  { deletion_time: 1602001511763, status: 'killed' },
  { deletion_time: 1602001514545, status: 'manual' },
  { deletion_time: 1602001519770, status: 'killed' },
  { deletion_time: 1602001525675, status: 'killed' },
  { deletion_time: 1602001529138, status: 'killed' },
  { deletion_time: 1602001531879, status: 'killed' },
  { deletion_time: 1602001537441, status: 'manual' },
  { deletion_time: 1602001539001, status: 'killed' },
  { deletion_time: 1602001539628, status: 'manual' },
  { deletion_time: 1602001540086, status: 'restored' },
  { deletion_time: 1602001542400, status: 'killed' },
  { deletion_time: 1602001550818, status: 'manual' },
  { deletion_time: 1602001551602, status: 'manual' },
  { deletion_time: 1602001562776, status: 'manual' },
  { deletion_time: 1602001568831, status: 'manual' },
  { deletion_time: 1602001571037, status: 'killed' },
  { deletion_time: 1602001571894, status: 'manual' },
];

const fakeDataClose = {
  time: [
    1602001080000,
    1602001140000,
    1602001200000,
    1602001260000,
    1602001320000,
    1602001380000,
    1602001440000,
    1602001500000,
    1602001560000,
  ],
  value: [14, 14, 7, 10, 11, 10, 14, 16, 4],
  agg: 'max',
};

const fakeDataKill = {
  time: [
    1602001080000,
    1602001140000,
    1602001200000,
    1602001260000,
    1602001320000,
    1602001380000,
    1602001440000,
    1602001500000,
    1602001560000,
  ],
  value: [10, 8, 6, 7, 8, 7, 11, 11, 1],
  agg: 'max',
};

const fakeDataRestore = {
  time: [
    1602001080000,
    1602001140000,
    1602001200000,
    1602001260000,
    1602001320000,
    1602001380000,
    1602001440000,
    1602001500000,
  ],
  value: [5, 1, 2, 3, 5, 2, 4, 1],
  agg: 'max',
};

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

describe('Statistics metrics work', () => {
  beforeEach(() => {
    global.__browser__.sinonSandbox.resetHistory();
    memory.memoryManager.closed_history = fakeData;
  });

  test('preprocessing computes the truncated dates', async () => {
    memory.memoryManager.closed_history = [{ deletion_time: 1601998669156, status: 'killed' }];
    let res = stats.StatsManager.preprocessClosedHistory();
    expect(_.isEqual([{ deletion_time: 1601998669156, status: 'killed', date: 1601998620000 }], res)).toBeTruthy();
  });

  test('metricClosedTabs', async () => {
    let data = stats.StatsManager.preprocessClosedHistory();
    let res = stats.StatsManager.metricClosedTabs(data);
    expect(_.isEqual(res, fakeDataClose)).toBeTruthy();
  });

  test('metricKilledTabs', async () => {
    let data = stats.StatsManager.preprocessClosedHistory();
    let res = stats.StatsManager.metricKilledTabs(data);
    expect(_.isEqual(res, fakeDataKill)).toBeTruthy();
  });

  test('metricRestoredTabs', async () => {
    let data = stats.StatsManager.preprocessClosedHistory();
    let res = stats.StatsManager.metricRestoredTabs(data);
    expect(_.isEqual(res, fakeDataRestore)).toBeTruthy();
  });
});

describe('Upsert', () => {
  test('all new cases are in the past', async () => {
    let oldStats = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'max',
      },
    };
    let newStats = {
      closed: {
        time: [1, 5, 10],
        value: [1, 2, 3],
        agg: 'max',
      },
    };
    let expected = {
      closed: {
        time: [1, 5, 10, 12, 14],
        value: [1, 2, 3, 2, 3],
        agg: 'max',
      },
    };
    stats.StatsManager.upsert(oldStats, newStats);
    console.log(oldStats);
    console.log(expected);
    expect(_.isEqual(oldStats, expected)).toBeTruthy();
  });

  test('all new cases are in the future', async () => {
    let oldStats = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'max',
      },
    };
    let newStats = {
      closed: {
        time: [14, 15, 16],
        value: [1, 2, 3],
        agg: 'max',
      },
    };
    let expected = {
      closed: {
        time: [10, 12, 14, 15, 16],
        value: [1, 2, 3, 2, 3],
        agg: 'max',
      },
    };
    stats.StatsManager.upsert(oldStats, newStats);
    expect(_.isEqual(oldStats, expected)).toBeTruthy();
  });

  test('cases everywhere', async () => {
    let oldStats = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'max',
      },
    };
    let newStats = {
      closed: {
        time: [1, 3, 10, 13, 15, 16],
        value: [1, 2, 3, 4, 5, 6],
        agg: 'max',
      },
    };
    let expected = {
      closed: {
        time: [1, 3, 10, 12, 13, 14, 15, 16],
        value: [1, 2, 3, 2, 4, 3, 5, 6],
        agg: 'max',
      },
    };
    stats.StatsManager.upsert(oldStats, newStats);
    expect(_.isEqual(oldStats, expected)).toBeTruthy();
  });

  test('sums everywhere', async () => {
    let oldStats = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'sum',
      },
    };
    let newStats = {
      closed: {
        time: [1, 3, 10, 14, 15, 16],
        value: [1, 2, 3, 4, 5, 6],
        agg: 'sum',
      },
    };
    let expected = {
      closed: {
        time: [1, 3, 10, 12, 14, 15, 16],
        value: [1, 2, 4, 2, 7, 5, 6],
        agg: 'sum',
      },
    };
    stats.StatsManager.upsert(oldStats, newStats);
    expect(_.isEqual(oldStats, expected)).toBeTruthy();
  });

  test('new metric added', async () => {
    let oldStats = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'sum',
      },
    };
    let newStats = {
      killed: {
        time: [1, 3, 10, 14, 15, 16],
        value: [1, 2, 3, 4, 5, 6],
        agg: 'sum',
      },
    };
    let expected = {
      closed: {
        time: [10, 12, 14],
        value: [1, 2, 3],
        agg: 'sum',
      },
      killed: {
        time: [1, 3, 10, 14, 15, 16],
        value: [1, 2, 3, 4, 5, 6],
        agg: 'sum',
      },
    };
    stats.StatsManager.upsert(oldStats, newStats);
    expect(_.isEqual(oldStats, expected)).toBeTruthy();
  });
});

describe('Full run', () => {
  beforeEach(() => {
    global.__browser__.sinonSandbox.resetHistory();
    stats.StatsManager.load = jest.fn().mockResolvedValue({ closed: fakeDataClose });
    memory.memoryManager.closed_history = fakeData;
    stats.StatsManager.save = jest.fn().mockResolvedValue();
  });

  test('run', async () => {
    await stats.StatsManager.run(['killed']);
    expect(stats.StatsManager.save).toHaveBeenCalledWith({
      closed: fakeDataClose,
      killed: fakeDataKill,
    });
  });

  test('run all metrics', async () => {
    await stats.StatsManager.run(['killed', 'closed', 'restored']);
    expect(stats.StatsManager.save).toHaveBeenCalledWith({
      closed: fakeDataClose,
      killed: fakeDataKill,
      restored: fakeDataRestore,
    });
  });
});
