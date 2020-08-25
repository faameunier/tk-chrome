const memory = require('../../../src/services/memory.js');
const settings = require('../../../src/services/settings.js');
const policy = require('../../../src/services/policy.js');
const queue = require('../../../src/services/queue.js');
const utils = require('../../../src/services/utils.js');
const _ = require('lodash');

function buildCalls(mockFunctions) {
  let results = [];
  let calls = [];
  for (let i = 0; i < mockFunctions.length; i++) {
    let mockResults = mockFunctions[i].mock.results;
    results = results.concat(mockResults);
    calls = calls.concat(Array(mockResults.length).fill(mockFunctions[i].getMockName()));
  }
  results = _.map(results, (elt) => elt.value);
  return _.zip(calls, results).sort((eltA, eltB) => eltA - eltB);
}

describe('first test', () => {
  beforeEach(() => {
    memory.memoryManager.load = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(Date.now());
        })
    );
    memory.memoryManager.load.mockName('memoryManager.load');
    memory.memoryManager.log = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(Date.now());
        })
    );
    memory.memoryManager.log.mockName('memoryManager.log');
    memory.memoryManager.save = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(Date.now());
        })
    );
    memory.memoryManager.save.mockName('memoryManager.save');
    settings.settingsManager.load = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(Date.now());
        })
    );
    settings.settingsManager.load.mockName('settingsManager.load');
    policy.PolicyManager.run = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve(Date.now());
        })
    );
    policy.PolicyManager.run.mockName('PolicyManager.run');
  });

  test('add event to queue', async () => {
    await queue.eventQueue.enqueue(() => utils.timeout(1000));
    await expect(memory.memoryManager.load).toHaveBeenCalledTimes(1);
    await expect(settings.settingsManager.load).toHaveBeenCalledTimes(1);
    await expect(memory.memoryManager.log).toHaveBeenCalledTimes(1);
    await expect(policy.PolicyManager.run).toHaveBeenCalledTimes(1);
    await expect(memory.memoryManager.save).toHaveBeenCalledTimes(1);
    console.log(
      buildCalls([
        memory.memoryManager.load,
        settings.settingsManager.load,
        memory.memoryManager.log,
        policy.PolicyManager.run,
        memory.memoryManager.save,
      ])
    );
  });
});
