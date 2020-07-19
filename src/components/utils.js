export const OPTIMAL_NUMBER_TABS = 'target_tabs';
export const POLICY = 'policy';
export const INACTIVE_POLICY = 'inactive_policy';

export function checkSettings(settings) {
  if (settings[POLICY][OPTIMAL_NUMBER_TABS] && settings[POLICY][OPTIMAL_NUMBER_TABS] > 0) {
    return true;
  } else {
    return false;
  }
}
