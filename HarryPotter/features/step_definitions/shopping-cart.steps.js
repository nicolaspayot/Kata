'use strict';

var assert = require('assert');
var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');
var Book = require(scriptPath + '/book');

module.exports = function() {

  var cart;

  this.Given(/^I have an empty cart$/, function (callback) {
    cart = new ShoppingCart();
    assert.equal(cart.isEmpty(), true);
    callback();
  });

  this.When(/^I add (\d+) book to the cart$/, function (count, callback) {
    for (var i = 0; i < Number(count); ++i) {
      cart.addBook(new Book("Harry Potter, volume 1"));
    }
    callback();
  });

  this.Then(/^The cart contains (\d+) book$/, function (quantity, callback) {
    assert.equal(cart.getBookQuantity(), Number(quantity));
    callback();
  });
}
