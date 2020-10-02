const SCORER = 'v1'; // only default implemented
const MAXIMUM_SCORE = 10; // max score for scorer
const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory
const SESSIONS_TIMEOUT_MS = 200; // when a tab is killed we need a timeout to retrieve the sessionId
const SESSIONS_RETRIES = 5; // how many tries to retrieve the session ID of a killed tab
const SESSIONS_MAX_FUZZY_DELTA_MS = 1000 * 5; // time is fuzzy matched to retireve the correct sessionID, should be higher than SESSIONS_TIMEOUT_MS
const MIN_ACTIVE_DEBOUNCE = 1000 * 2; // minimum active reading on a tab to be counted as valid 'useful' time
const MAX_ACTIVE_DEBOUNCE = 1000 * 60 * 5; // maximum time without any user input before it is considered idled, must be higher than 15sec
const FRONTEND_SKELETON_DISPLAY = 330; // how long to display the fake display in ms
const AGG_STATS = 'day'; // valid values: month, week, day, hour, minute, second

export {
  SCORER,
  MAXIMUM_SCORE,
  MAXIMUM_HISTORY_SIZE,
  SESSIONS_TIMEOUT_MS,
  SESSIONS_RETRIES,
  SESSIONS_MAX_FUZZY_DELTA_MS,
  MIN_ACTIVE_DEBOUNCE,
  MAX_ACTIVE_DEBOUNCE,
  FRONTEND_SKELETON_DISPLAY,
};
