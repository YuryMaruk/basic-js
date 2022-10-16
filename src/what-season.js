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
  if(!foo) {
    return 'Unable to determine the time of year!';
  } else if(typeof foo.getMonth !== 'function' || Date.prototype.toString.call(new Date()) == foo.toString()) {
    throw new Error('Invalid date!');
  } else {
    let m = foo.getMonth();
    return (( m == 0 || m == 1 || m == 11) ? 'winter' : 
    (m == 2 || m == 3 || m == 4) ? 'spring' : 
    (m == 5 || m == 6 || m == 7) ? 'summer' : 'autumn');
  }
}

module.exports = {
  getSeason
};
