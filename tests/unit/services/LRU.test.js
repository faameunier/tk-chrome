const LRU = require('../../../src/services/LRU.js');
const _ = require('lodash');

describe('Basic LRU functionnalities', () => {
  test('LRU stores values', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    cache.write('second', { value: 2 });
    expect(_.isEqual(cache.read('1'), { value: 1 })).toBeTruthy();
    expect(_.isEqual(cache.read('second'), { value: 2 })).toBeTruthy();
  });

  test('LRU sizes increases and decreases', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    expect(cache.size).toEqual(1);
    cache.write('second', { value: 2 });
    expect(cache.size).toEqual(2);
    cache.read('1');
    expect(cache.size).toEqual(1);
    cache.read('second'), { value: 2 };
    expect(cache.size).toEqual(0);
  });

  test('reading unknown key returns False', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    cache.write('second', { value: 2 });
    expect(cache.read('test')).toBeFalsy();
    expect(cache.size).toEqual(2);
  });

  test('keys are unique', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    cache.write('1', { value: 2 });
    expect(cache.size).toEqual(1);
    expect(_.isEqual(cache.read('1'), { value: 2 })).toBeTruthy();
  });

  test('LRU size has a max', () => {
    const cache = new LRU.LRU(3);
    cache.write('1', { value: 1 });
    cache.write('2', { value: 2 });
    cache.write('3', { value: 3 });
    cache.write('4', { value: 4 });
    expect(cache.size).toEqual(3);
    expect(_.isEqual(cache.tail.value, { value: 2 })).toBeTruthy();
  });

  test('LRU order works even after removing middle node', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    cache.write('2', { value: 2 });
    cache.write('3', { value: 3 });
    cache.write('4', { value: 4 });
    expect(cache.head.key).toBe('4');
    expect(cache.head.next.key).toBe('3');
    expect(cache.head.next.next.key).toBe('2');
    expect(cache.head.next.next.next.key).toBe('1');
    cache.read('3');
    expect(cache.head.key).toBe('4');
    expect(cache.head.next.key).toBe('2');
    expect(cache.head.next.next.key).toBe('1');
  });

  test('cache clearing', () => {
    const cache = new LRU.LRU(3);
    cache.write('1', { value: 1 });
    cache.write('2', { value: 2 });
    cache.write('3', { value: 3 });
    cache.write('4', { value: 4 });
    cache.clear();
    expect(cache.size).toEqual(0);
    expect(cache.head).toBeFalsy();
    expect(cache.tail).toBeFalsy();
  });
});

describe('LRU factory', () => {
  test('parse and restore', () => {
    const cache = new LRU.LRU();
    cache.write('1', { value: 1 });
    cache.write('2', { value: 2 });
    cache.write('3', { value: 3 });

    const copy = LRU.LRUfactory.fromJSON(cache.toJSON());
    expect(cache.size).toEqual(copy.size);
    expect(_.isEqual(cache.head, copy.head)).toBeTruthy();
    expect(_.isEqual(cache.tail, copy.tail)).toBeTruthy();
    expect(_.isEqual(cache.cache, copy.cache)).toBeTruthy();
  });
});
