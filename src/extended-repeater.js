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
 function repeater(foo, bar) {
  if (!foo) {
    return;
  }
  let str = foo;
  let addStr = '';
  let strSepr = '+';
  let addSepr = '';
  let strCount = 1;
  let addCount = 1;

  if (typeof str !== 'string') {
    str.toString();
  }

  if (bar.addition == true && typeof bar.addition !== 'string') {
    bar.addition.toString();
  }

  if (bar.repeatTimes) {
    strCount = bar.repeatTimes;
  }

  if(bar.addition){
    addStr = bar.addition;
    addSepr = '|';
  }

  if(bar.additionRepeatTimes){
    addCount = bar.additionRepeatTimes;
  }

  if(bar.separator) {
    strSepr = bar.separator;
  }

  if(bar.additionSeparator) {
    addSepr = bar.additionSeparator;
  }
  console.log(str)

  let result = str + (addStr.repeat(addCount).match(new RegExp(`${addStr}`, 'g')).join(`${addSepr}`));

  console.log(result)
  console.log(result.repeat(strCount).match(new RegExp(`${result}`, 'g')))

  return result.repeat(strCount).match(new RegExp(`${result}`, 'g')).join(`${strSepr}`);

}

module.exports = {
  repeater
};
