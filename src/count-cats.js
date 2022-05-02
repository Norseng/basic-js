const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(backyard) {
  if(backyard.length === 0) return 0;
  let catsEars = '^^';
  let catsEarsArr = [];
  for(let i=0;i<backyard.length;i++) {
    if(backyard[i].filter(word => word === catsEars).length > 0) {
      catsEarsArr.push(backyard[i].filter(word => word === catsEars));
    }
  }
  if(catsEarsArr.length === 0) {
    return 0;
  } else {
    return catsEarsArr.join().split(',').length;
  }
}

module.exports = {
  countCats
};
