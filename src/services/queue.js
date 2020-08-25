import { memoryManager } from './memory.js';
import { settingsManager } from './settings.js';
import { PolicyManager } from './policy.js';
import { logger } from './utils.js';

class EventQueue {
  queue = [];
  pendingPromise = false;

  constructor() {
    if (!EventQueue.instance) {
      logger(this, 'Instanciating empty EventQueue');
      EventQueue.instance = this;
    }
    return EventQueue.instance;
  }

  enqueue(promise) {
    if (this.queue.length === 0) {
      // Settings and memory are lazy loaded
      // These loads are in case the program was
      // deloaded from memory by the browser.
      new Promise((resolve, reject) => {
        this.queue.push({
          promise: () => settingsManager.load(),
          resolve,
          reject,
        });
      });
      new Promise((resolve, reject) => {
        this.queue.push({
          promise: () => memoryManager.load(),
          resolve,
          reject,
        });
      });
    }
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject,
      });
      this.dequeue();
    });
  }

  dequeue() {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    if (!item) {
      this.workingOnPromise = true;
      logger(this, 'Queue killed');
      memoryManager.log().finally(() => {
        PolicyManager.run().finally(() => {
          memoryManager.save().finally(() => {
            // memory is saved only at the end of the queue
            // to avoid useless savings when everything is chained.
            // Settings are saved within the manager as these are rare events.
            if (this.queue.length === 0) {
              this.workingOnPromise = false;
            } else {
              this.workingOnPromise = false;
              this.dequeue();
            }
          });
        });
      });
      return false;
    }
    try {
      this.workingOnPromise = true;
      item
        .promise()
        .then((value) => {
          // logger(this, 'Processing next event');
          this.workingOnPromise = false;
          item.resolve(value);
          this.dequeue();
        })
        .catch((err) => {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        });
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }
}

export var eventQueue = new EventQueue();
