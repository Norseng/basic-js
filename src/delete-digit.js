const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = n.toString().split('').map(int => +int);
  let nMin, newArr = [];
  nMin = nArr.indexOf(Math.min(...nArr));
  if(nArr[nMin] !== nArr[nArr.length-1] || nArr[nMin] === 0) {
    delete nArr[nMin];
    nArr = +nArr.join('');
    return nArr;
  } else {
    newArr = [...nArr];
    newArr.length = newArr.length-1;
    nMin = nArr.indexOf(Math.min(...newArr));
    delete nArr[nMin];
    nArr = +nArr.join('');
    return nArr;
  }
}

module.exports = {
  deleteDigit
};
