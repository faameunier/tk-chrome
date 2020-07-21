const math = require('../../../src/services/math.js');

describe('bound', () => {
  test('is min bound by 0', () => {
    expect(math.bound(-10)).toEqual(0);
  });

  test('is min bound by 1', () => {
    expect(math.bound(2)).toEqual(1);
  });

  test('is linear', () => {
    expect(math.bound(0.5)).toBeCloseTo(0.5);
  });
});
