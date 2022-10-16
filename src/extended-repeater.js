const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 /* function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  
} */
function repeater(str, options) {

  if (!str) {
    str = `${str}`;
  } else {
    str.toString();
  }
 
  let count = 1;

  if (options.repeatTimes) {
    count = options.repeatTimes;
  }

  let sepr = '+';
  
  if (str === '') {
    sepr = '';
  } else if (options.separator) {
    sepr = options.separator;
  }

  // create addition string
  let addStr = '';
  let addCount = 1;
  let addSepr = '|';

  if (options.addition) {
    addStr = options.addition;
    addStr.toString();
  } else if (options.addition === undefined) {
    addStr = ''
  } else {
    addStr = `${options.addition}`
  }
  
  if (options.additionRepeatTimes) {
    addCount = options.additionRepeatTimes;
  }

  if (addStr === '') {
    addSepr = '';
  } else if (options.additionSeparator) {
    addSepr = options.additionSeparator;
  }

  const createStr = (str, sepr, count) => {
    result = str;
    for (let i = 0; i < count; i++) {
      if (++i < count) {
        result += sepr + str;
        i--;
      }
    }

    return result;
  }

  let temp =createStr(addStr, addSepr, addCount);

  return  createStr(str + temp, sepr, count);
}
module.exports = {
  repeater
};
