const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  console.time();
  let shortString = 0;
  let longString = 0;
  let counter = 0;
  if (s1.length > s2.length) {
    longString = s1;
    shortString = s2;
  } else {
    longString = s2;
    shortString = s1;
  }
  for (let i = 0; i < longString.length; i++) {
    if (shortString.indexOf(longString[i]) !== -1) {
      counter++;
      shortString = shortString.replace(longString[i],'');
    }
    if (!shortString) {
      break;
    }
  }
  console.timeEnd();
  return counter;
}

getCommonCharacterCount('abca', 'xyzbac');

module.exports = {
  getCommonCharacterCount
};
