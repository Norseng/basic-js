const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
      if(value!=undefined || value === null){
        this.str.push(`( ${value} )`);
      }else{
        this.str.push('( )');
      }
      return this;
  },
  removeLink(position) {
    position -= 1;
    if(typeof position !== 'number' || position < 0 || position > this.str.length-1 || !Number.isInteger(position)){
      this.str =[];
      throw new Error('You can\'t remove incorrect link!');
    };
    this.str.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let memory = this.str
    this.str = [];
    return memory.join('~~');
  }
};

module.exports = {
  chainMaker
};
