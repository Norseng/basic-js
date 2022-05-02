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
function encodeLine(str){
  let newArr = [];
  let i = 0;
  let count = 1;
  for (i;i<str.length;i++){
    if(str[i]!==str[i+1]){
      if(count === 1) {
        newArr.push([str[i]].join(''));
      } else {
        newArr.push([count,str[i]].join(''));
      }
      count = 1;
    } else {
      count++;
    }
  }
  return newArr.join('');
}

module.exports = {
  encodeLine
};
