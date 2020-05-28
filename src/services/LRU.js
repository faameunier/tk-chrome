import { logger } from './utils.js';

class State {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUfactory {
  static fromString(str) {
    let tmp = JSON.parse(str);
    return LRUfactory.fromJSON(tmp);
  }

  static fromJSON(obj) {
    var cache = new LRU(obj.limit);
    var nodes = obj.nodes;
    for (let node of nodes) {
      cache.write(node.key, node.value);
    }
    return cache;
  }
}

class LRU {
  constructor(limit = 10) {
    logger(this, 'Creating new LRU cache');
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  write(key, value) {
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = new State(key, value);
    } else {
      var node = new State(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    this.cache[key] = this.head;
    this.size++;
    logger(this, 'New value stored into cache');
  }

  read(key) {
    if (this.cache[key]) {
      logger(this, 'Key found in cache');
      var value = this.cache[key].value;
      this.remove(key);
      // this.write(key, value); // not a standard LRU cache, last state in stored
      return value;
    }
    return false;
  }

  ensureLimit() {
    if (this.size === this.limit) {
      logger(this, 'Cache maxed out, removing tail');
      this.remove(this.tail.key);
    }
  }

  remove(key) {
    var node = this.cache[key];

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
    // logger(this, 'Old value removed from cache');
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
    logger(this, 'Cache cleared');
  }

  forEach(fn) {
    var node = this.head;
    var counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    var node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  toJSON() {
    var nodes = [];
    for (let node of this) {
      nodes.unshift({
        key: node.key,
        value: node.value,
      });
    }

    return {
      limit: this.limit,
      size: this.size,
      nodes: nodes,
    };
  }
}

export { LRUfactory, LRU };
