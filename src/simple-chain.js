const chainMaker = {
  chain: [], 
  
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    ( arguments.length == 0 ) ? ( this.chain.push('( )') ) : ( this.chain.push( '( ' + value + ' )' ) );   
    return this;
  },

  removeLink(position) {
    if ( Number.isInteger(position) === false || position < 1 || position >= this.getLength() ) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice((position - 1), 1);
    };        
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;    
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
    
};

module.exports = chainMaker;
