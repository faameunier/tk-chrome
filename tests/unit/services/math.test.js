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

describe('sigmoidScaled', () => {
  test('f(x < 0) = 1', () => {
    expect(math.sigmoidScaled(-10)).toBeCloseTo(1);
  });

  test('f(0) = tau', () => {
    expect(math.sigmoidScaled(0, 30 * 1000, 0.5)).toBeCloseTo(0.5);
    expect(math.sigmoidScaled(0, 30 * 1000, 0.9)).toBeCloseTo(0.9);
  });

  test('f(alpha) = 1 - tau', () => {
    let alpha = 30;
    expect(math.sigmoidScaled(alpha, alpha, 0.5)).toBeCloseTo(0.5);
    alpha = 40;
    expect(math.sigmoidScaled(alpha, alpha, 0.9)).toBeCloseTo(0.1);
  });

  test('f(x > alpha) = 0', () => {
    let alpha = 30;
    expect(math.sigmoidScaled(40, alpha, 0.5)).toBeCloseTo(0);
    alpha = 40;
    expect(math.sigmoidScaled(alpha + 1, alpha, 0.9)).toBeCloseTo(0);
  });

  test('f(alpha / 2) = 0.5', () => {
    let alpha = 30;
    expect(math.sigmoidScaled(alpha / 2, alpha, 0.5)).toBeCloseTo(0.5);
    expect(math.sigmoidScaled(alpha / 2, alpha, 0.9)).toBeCloseTo(0.5);
  });
});

describe('exponentialDecay', () => {
  test('f(0) = 1', () => {
    expect(math.exponentialDecay(0)).toBeCloseTo(1);
  });

  test('f(tau) = 36.8%', () => {
    expect(math.exponentialDecay(10, 10)).toBeCloseTo(0.368);
  });

  test('f(3 * tau) = 4.9%', () => {
    expect(math.exponentialDecay(3 * 10, 10)).toBeCloseTo(0.049);
  });

  test('f(5 * tau) = 0.6%', () => {
    expect(math.exponentialDecay(5 * 10, 10)).toBeCloseTo(0.006);
  });
});

describe('exponentialDecayReversed', () => {
  test('f(0) = 1', () => {
    expect(math.exponentialDecayReversed(0)).toBeCloseTo(0);
  });

  test('f(tau) = 1 - 36.8%', () => {
    expect(math.exponentialDecayReversed(10, 10)).toBeCloseTo(1 - 0.368);
  });

  test('f(3 * tau) = 1 - 4.9%', () => {
    expect(math.exponentialDecayReversed(3 * 10, 10)).toBeCloseTo(1 - 0.049);
  });

  test('f(5 * tau) = 1 - 0.6%', () => {
    expect(math.exponentialDecayReversed(5 * 10, 10)).toBeCloseTo(1 - 0.006);
  });
});

describe('ReLU', () => {
  test('f(0) = 0', () => {
    expect(math.ReLU(0)).toBeCloseTo(0);
  });

  test('f(x < 0) = 0', () => {
    expect(math.ReLU(-10)).toBeCloseTo(0);
    expect(math.ReLU(-1)).toBeCloseTo(0);
  });

  test('f(x > 0) = x', () => {
    expect(math.ReLU(10)).toBeCloseTo(10);
    expect(math.ReLU(1)).toBeCloseTo(1);
  });

  test('test delta offset', () => {
    expect(math.ReLU(3, 5)).toBeCloseTo(0);
    expect(math.ReLU(5, 5)).toBeCloseTo(0);
    expect(math.ReLU(6, 5)).toBeCloseTo(1);
    expect(math.ReLU(10, 5)).toBeCloseTo(5);
  });
});