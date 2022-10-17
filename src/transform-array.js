const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.length) {
    return arr;
  }

  const removeNext = '--discard-next',
    removePrev = '--discard-prev',
    doubleNext = '--double-next',
    doublePrev = '--double-prev',
    cut = 'cut',
    copy = 'copy';

  let temp;
  return arr.reduce((acc, e, i, a) => {
    if (acc[acc.length - 1] === cut) {
      acc.pop();
      return acc;
    }
    if (acc[acc.length - 1] === copy) {
      acc.pop();
      acc.push(e);
      return [...acc, e];
    }
    if (e === removePrev) {

      if (!a[i - 1]) {
        return acc;
      } else if (temp === i - 1) {
        return acc;
      }
      else {
        acc.splice(-1, 1);
        return acc;
      }
    } else if (e === removeNext) {
      if (!a[i + 1]) {
        return acc;
      } else {
        temp = i + 1;
        return [...acc, cut];
      }
    } else if (e === doubleNext) {
      if (!a[i + 1]) {
        return acc;
      } else {
        return [...acc, copy];
      }
    } else if (e === doublePrev) {
      if (!a[i - 1]) {
        return acc;
      } else if (temp === i - 1) {
        return acc;
      } else {
        return [...acc, acc[acc.length - 1]];
      }
    } else {
      return [...acc, e];
    }
  }, []);
}

module.exports = {
  transform
};
