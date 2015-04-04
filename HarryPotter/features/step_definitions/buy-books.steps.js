'use strict';

var assert = require('assert');
var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');
var Book = require(scriptPath + '/book');

module.exports = function() {

  var cart;
  var book;

  this.Given(/^I want to buy "([^"]*)"$/, function (arg1, callback) {
    book = new Book(arg1);
    callback();
  });

  this.When(/^I add it to the cart$/, function (callback) {
    cart = new ShoppingCart();
    cart.addBook(book);
    callback();
  });

  this.Then(/^I must pay (\d+) euros$/, function (arg1, callback) {
    assert.equal(cart.getTotal(), 8);
    callback();
  });
};
