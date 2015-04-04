'use strict';

var assert = require('assert');
var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');
var Book = require(scriptPath + '/book');

module.exports = function() {

  var cart;
  var book;

  this.Given(/^I want to buy (\d+) copy of "([^"]*)"$/, function (count, title, callback) {
    book = new Book(title);
    callback();
  });

  this.When(/^I add books to the cart$/, function (callback) {
    cart = new ShoppingCart();
    cart.addBook(book);
    callback();
  });

  this.Then(/^I must pay (\d+) euros$/, function (arg1, callback) {
    assert.equal(cart.getTotal(), Number(arg1));
    callback();
  });
};
