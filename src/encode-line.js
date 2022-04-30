const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  currentSymbol = str[0];
  result = '';
  counter = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentSymbol) {
      counter++;
    } else {
      result += (counter === 1 ? '' : counter) + currentSymbol;
      counter = 1;
      currentSymbol = str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
