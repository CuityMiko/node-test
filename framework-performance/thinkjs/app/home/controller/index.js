'use strict';

var Base = require('./base.js');

module.exports = think.controller(Base, {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction: function(self){
    //auto render template file index_index.html
    return this.end('hello word');
  },
  
  testAction: function(self){
    //auto render template file index_index.html
    return this.end('hello word');
  }
});