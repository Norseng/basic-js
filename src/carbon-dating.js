const { NotImplementedError } = require('../extensions/index.js');

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
function dateSample(sampleActivity) {
  if(!(typeof sampleActivity == 'string') || sampleActivity.length <= 0 || sampleActivity === ' ') return false;
  sampleActivity = Number(sampleActivity);
  if(sampleActivity < 0 || isNaN(sampleActivity)) return false;
  const k = 0.693/HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY/sampleActivity))/k;
  if(t < 0) return false;
  t = Math.ceil(t);
  if(t === Infinity) return false;
  return t;
}

module.exports = {
  dateSample
};