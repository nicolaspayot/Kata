'use strict';

var assert = require('assert');
var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');
var Book = require(scriptPath + '/book');

module.exports = function() {

  var cart;

  this.Given(/^I have an empty cart$/, function (callback) {
    cart = new ShoppingCart();
    assert.equal(cart.books.length, 0);
    callback();
  });

  this.When(/^I add (\d+) book to the cart$/, function (arg1, callback) {
    for (var i = 0; i < Number(arg1); ++i) {
      cart.addBook(new Book("Harry Potter, volume 1"));
    }
    callback();
  });

  this.Then(/^The cart contains (\d+) book$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });
}
