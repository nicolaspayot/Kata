'use strict';

var assert = require('assert');

module.exports = function() {

  this.Given(/^I have an empty cart$/, function (callback) {
    assert.equal(this.cart.isEmpty(), true);
    callback();
  });

  this.When(/^I add (\d+) book to the cart$/, function (count, callback) {
    for (var i = 0; i < Number(count); ++i) {
      this.cart.addBook("Harry Potter, volume 1");
    }
    callback();
  });

  this.Then(/^The cart contains (\d+) book$/, function (quantity, callback) {
    assert.equal(this.cart.getBookQuantity(), Number(quantity));
    callback();
  });
}
