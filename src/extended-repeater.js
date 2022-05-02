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
 function repeater(str, options) {
  let endIndex = 0;
  if (options) {
    if(options.addition === false || options.addition === null){
      options.addition += ''
    } 
    if (options.addition) {
      if (options.additionRepeatTimes && options.additionRepeatTimes != 1) {
        if (options.additionSeparator) {
          endIndex = -options.additionSeparator.length
          options.addition += options.additionSeparator
        } else {
          endIndex = -1
          options.addition += '|'
        }
        str += options.addition.repeat(options.additionRepeatTimes).slice(0, endIndex);
        console.log(str)
      } else {
        str += options.addition;
        
      }
    }
    
    if (options.repeatTimes) {
      if (options.separator) {
        endIndex = -options.separator.length
        str += options.separator
      } else {
        endIndex = -1
        str += '+'
      }
      console.log(endIndex)
      return str.repeat(options.repeatTimes).slice(0, endIndex)
    } else {
      return endIndex?str.slice(0, endIndex):str;
    }
    
  } else {
    return str;
  }
}

module.exports = {
  repeater
};
