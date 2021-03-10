const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693;

module.exports = function dateSample(sampleActivity) {
  if ( arguments.length === 0 ||
    typeof sampleActivity !== 'string' ||
    /[a-zA-Z]/.test(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0) {
      return false;
    }
  return Math.ceil(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * 
    HALF_LIFE_PERIOD / k
  );  
};
