'use strict';

var ShoppingCart = require('../../script/shopping-cart');

module.exports = function () {

  // This will run before each scenario
  this.Before(function(callback) {

    // cart and books will be available in step definitions
    this.cart = new ShoppingCart();
    this.books = [];

    // Tell Cucumber when we're done
    callback();
  });
};
