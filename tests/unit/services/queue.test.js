const memory = require('../../../src/services/memory.js');
const settings = require('../../../src/services/settings.js');
const policy = require('../../../src/services/policy.js');
const queue = require('../../../src/services/queue.js');
const utils = require('../../../src/services/utils.js');
const _ = require('lodash');

async function buildCalls(mockFunctions) {
  let results = [];
  let calls = [];
  for (let i = 0; i < mockFunctions.length; i++) {
    let mockResults = mockFunctions[i].mock.results;
    results = results.concat(mockResults);
    calls = calls.concat(Array(mockResults.length).fill(mockFunctions[i].getMockName()));
  }
  for (let i = 0; i < results.length; i++) {
    results[i] = await Promise.resolve(results[i].value).catch((e) => e); // map doesn't work here
  }
  return _.zip(calls, results).sort((eltA, eltB) => eltA[1][0] - eltB[1][0]);
}

function buildDelayFunction(ms, name = 'dummy', happy = 0) {
  // The dummy function will return when it started and ended its execution.
  const fun = jest.fn(() => {
    const start = Date.now();
    if (happy === 0) {
      // console.log(name + ' resolve', [start, Date.now()]);
      return utils.timeout(ms).then(() => [start, Date.now()]);
    } else if (happy === 1) {
      // console.log(name + ' reject', [start, Date.now()]);
      return new Promise((resolve, reject) => {
        setTimeout(() => reject([start, Date.now()]), 10);
      });
    } else {
      // console.log(name + ' throw', [start, Date.now()]);
      return utils.timeout(ms).then(() => {
        throw [start, Date.now()];
      });
    }
  });
  fun.mockName(name);
  fun.mock.internalDelay = ms; // monkey patching
  return fun;
}

describe('The eventQueue works as a single-threaded worker with multi-threaded input', () => {
  beforeEach(() => {
    memory.memoryManager.load = buildDelayFunction(10, 'memoryManager.load');
    memory.memoryManager.log = buildDelayFunction(10, 'memoryManager.log');
    memory.memoryManager.save = buildDelayFunction(5, 'memoryManager.save');
    settings.settingsManager.load = buildDelayFunction(10, 'settingsManager.load');
    policy.PolicyManager.run = buildDelayFunction(500, 'PolicyManager.run');
  });

  test('add one event to queue and automated events are run', async () => {
    let dummy1 = buildDelayFunction(300, 'dummy1');
    await queue.eventQueue.enqueue(dummy1);
    // the queue will end "some time later" depending on the beforeEach configuration
    // being generous just in case.
    await utils.timeout(1000);
    await expect(memory.memoryManager.load).toHaveBeenCalledTimes(1);
    await expect(settings.settingsManager.load).toHaveBeenCalledTimes(1);
    await expect(memory.memoryManager.log).toHaveBeenCalledTimes(1);
    await expect(policy.PolicyManager.run).toHaveBeenCalledTimes(1);
    await expect(memory.memoryManager.save).toHaveBeenCalledTimes(1);

    // Checking execution order
    let callOrder = _.map(
      await buildCalls([
        memory.memoryManager.load,
        settings.settingsManager.load,
        memory.memoryManager.log,
        policy.PolicyManager.run,
        memory.memoryManager.save,
        dummy1,
      ]),
      (elt) => elt[0]
    );
    expect(
      _.isEqual(callOrder, [
        'settingsManager.load',
        'memoryManager.load',
        'dummy1',
        'memoryManager.log',
        'PolicyManager.run',
        'memoryManager.save',
      ])
    ).toBeTruthy();
  });

  test('add multiple event to queue and process them in order', async () => {
    let dummy1 = buildDelayFunction(300, 'dummy1');
    let dummy2 = buildDelayFunction(10, 'dummy2');
    let dummy3 = buildDelayFunction(100, 'dummy3');
    let dummy4 = buildDelayFunction(1, 'dummy4');
    queue.eventQueue.enqueue(dummy1);
    queue.eventQueue.enqueue(dummy2);
    queue.eventQueue.enqueue(dummy3);
    await queue.eventQueue.enqueue(dummy4);
    await utils.timeout(2000);

    let callOrder = _.map(
      await buildCalls([
        memory.memoryManager.load,
        settings.settingsManager.load,
        memory.memoryManager.log,
        policy.PolicyManager.run,
        memory.memoryManager.save,
        dummy1,
        dummy2,
        dummy3,
        dummy4,
      ]),
      (elt) => elt[0]
    );
    expect(
      _.isEqual(callOrder, [
        'settingsManager.load',
        'memoryManager.load',
        'dummy1',
        'dummy2',
        'dummy3',
        'dummy4',
        'memoryManager.log',
        'PolicyManager.run',
        'memoryManager.save',
      ])
    ).toBeTruthy();
  });

  test('only one event is processed at a time', async () => {
    let dummy1 = buildDelayFunction(300, 'dummy1');
    let dummy2 = buildDelayFunction(10, 'dummy2');
    let dummy3 = buildDelayFunction(100, 'dummy3');
    let dummy4 = buildDelayFunction(1, 'dummy4');
    queue.eventQueue.enqueue(dummy1);
    queue.eventQueue.enqueue(dummy2);
    queue.eventQueue.enqueue(dummy3);
    await queue.eventQueue.enqueue(dummy4);
    await utils.timeout(2000);

    let callOrder = await buildCalls([
      memory.memoryManager.load,
      settings.settingsManager.load,
      memory.memoryManager.log,
      policy.PolicyManager.run,
      memory.memoryManager.save,
      dummy1,
      dummy2,
      dummy3,
      dummy4,
    ]);
    for (let i = 1; i < callOrder.length; i++) {
      expect(callOrder[i][1][0] >= callOrder[i - 1][1][1]).toBeTruthy();
    }
  });

  test('an event can occur during post-processing events', async () => {
    let dummy1 = buildDelayFunction(300, 'dummy1');
    let dummy2 = buildDelayFunction(100, 'dummy2');
    queue.eventQueue.enqueue(dummy1);
    await utils.timeout(500);
    await queue.eventQueue.enqueue(dummy2);
    await utils.timeout(1000);

    let callOrder = _.map(
      await buildCalls([
        memory.memoryManager.load,
        settings.settingsManager.load,
        memory.memoryManager.log,
        policy.PolicyManager.run,
        memory.memoryManager.save,
        dummy1,
        dummy2,
      ]),
      (elt) => elt[0]
    );
    expect(
      _.isEqual(callOrder, [
        'settingsManager.load',
        'memoryManager.load',
        'dummy1',
        'memoryManager.log',
        'PolicyManager.run',
        'memoryManager.save',
        'dummy2',
        'memoryManager.log',
        'PolicyManager.run',
        'memoryManager.save',
      ])
    ).toBeTruthy();
  });

  test("rejected events don't break the queue", async () => {
    let dummy1 = buildDelayFunction(10, 'dummy1');
    let dummy2 = buildDelayFunction(10, 'dummy2', 1); // works
    let dummy3 = buildDelayFunction(10, 'dummy3', 2); // works
    queue.eventQueue.enqueue(dummy1);
    queue.eventQueue.enqueue(dummy2).catch((err) => {}); // works
    await queue.eventQueue.enqueue(dummy3).catch((err) => {}); // works
    await utils.timeout(1000);

    let callOrder = _.map(
      await buildCalls([
        memory.memoryManager.load,
        settings.settingsManager.load,
        memory.memoryManager.log,
        policy.PolicyManager.run,
        memory.memoryManager.save,
        dummy1,
        dummy2,
        dummy3,
      ]),
      (elt) => elt[0]
    );

    expect(
      _.isEqual(callOrder, [
        'settingsManager.load',
        'memoryManager.load',
        'dummy1',
        'dummy2',
        'dummy3',
        'memoryManager.log',
        'PolicyManager.run',
        'memoryManager.save',
      ])
    ).toBeTruthy();
  });

  test('sync functions (or other exceptions) produce a rejected promise', async () => {
    let dummy = jest.fn(() => [Date.now(), Date.now()]);
    expect(queue.eventQueue.enqueue(dummy)).rejects.toThrowError();
    await utils.timeout(1000);
  });
});
