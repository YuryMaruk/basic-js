const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(foo) {

  if (!foo) {
    return 'Unable to determine the time of year!';
  }

  try {
    foo.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  let m = foo.getMonth();
  return ((m == 0 || m == 1 || m == 11) ? 'winter' :
    (m == 2 || m == 3 || m == 4) ? 'spring' :
      (m == 5 || m == 6 || m == 7) ? 'summer' : 'autumn');

}

module.exports = {
  getSeason
};
