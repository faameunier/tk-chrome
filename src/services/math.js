function sigmoidScaled(x, alpha = 30 * 1000, tau = 0.9) {
  // f(x) \in [0; 1]
  // Scaled and centered sigmoid such as:
  //   - f(0) = tau
  //   - f(alpha) = 1 - tau
  // This implies f(alpha / 2) = 0.5
  // The higer tau, the steeper is the transition from 1 to 0.
  return 1 / (Math.exp(Math.log(tau / (1 - tau)) * ((2 * x) / alpha - 1)) + 1);
}

function exponentialDecay(x, tau = 30 * 1000) {
  // f(x) \in [0; 1]
  // Simple exponantiel decay:
  //   - f(0) = 1
  //   - f(tau) = 36.8%
  //   - f(3 * tau) = 4.9%
  //   - f(5 * tau) = 0.6%
  return Math.exp(-x / alpha);
}

function exponentialDecayReversed(x, tau = 30 * 1000) {
  // f(x) \in [0; 1]
  // Simple exponantiel decay:
  //   - f(0) = 0
  //   - f(tau) = 63.28%
  //   - f(3 * tau) = 95.1%
  //   - f(5 * tau) = 99.4%
  return 1 - exponentialDecay(x, tau);
}

function bound(x) {
  // f(x) \in [0; 1]
  // Bounds the input between 1 and 0
  return Math.max(Math.min(x, 1), 0);
}

function ReLU(x, delta = 0) {
  // f(x) \in [0; \inf]
  // ReLU with offset
  return Math.max(0, x - delta);
}

export { sigmoidScaled, exponentialDecay, exponentialDecayReversed, bound, ReLU };
