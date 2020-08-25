const memory = require('../../../src/services/memory.js');
const settings = require('../../../src/services/settings.js');
const policy = require('../../../src/services/policy.js');
const queue = require('../../../src/services/queue.js');
const utils = require('../../../src/services/utils.js');

describe('first test', () => {
  beforeEach(() => {
    memory.memoryManager.load = jest.fn().mockResolvedValue(true);
    memory.memoryManager.log = jest.fn().mockResolvedValue(true);
    memory.memoryManager.save = jest.fn().mockResolvedValue(true);
    settings.settingsManager.load = jest.fn().mockResolvedValue(true);
    policy.PolicyManager.run = jest.fn().mockResolvedValue(true);

  });
  test('add event to queue', async () => {
    await queue.eventQueue.enqueue(() => utils.timeout(1000));
  });
});
