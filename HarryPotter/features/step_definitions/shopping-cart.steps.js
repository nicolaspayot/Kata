'use strict';

var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');

module.exports = function() {

  var cart = new ShoppingCart();

  this.Given(/^I have an empty cart$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.When(/^I add (\d+) book to the cart$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^The cart contains (\d+) book$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
}
