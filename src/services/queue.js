class EventQueue {
  queue = [];
  pendingPromise = false;

  constructor() {
    if (!EventQueue.instance) {
      logger(this, "Instanciating empty EventQueue");
      EventQueue.instance = this;
    }
    return EventQueue.instance;
  }

  enqueue(promise) {
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
      memoryManager.log().then((value) => {
        PolicyManager.run().then((value) => {
          memoryManager.save().then((value) => {
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
      item.promise()
        .then((value) => {
          logger(this, 'Processing next event')
          this.workingOnPromise = false;
          item.resolve(value);
          this.dequeue();
        })
        .catch(err => {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        })
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }
}

var eventQueue = new EventQueue();