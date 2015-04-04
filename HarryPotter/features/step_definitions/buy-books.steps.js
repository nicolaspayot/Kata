'use strict';

var assert = require('assert');
var scriptPath = process.cwd() + '/script';
var ShoppingCart = require(scriptPath + '/shopping-cart');
var Book = require(scriptPath + '/book');

module.exports = function() {

  var cart;
  var books;

  this.Given(/^I want to buy (\d+) copies of "([^"]*)"$/, function (count, title, callback) {
    books = [];
    for (var i = 0; i < count; ++i) {
      books.push(new Book(title));
    }
    callback();
  });

  this.When(/^I add books to the cart$/, function (callback) {
    cart = new ShoppingCart();
    books.forEach(function(book) {
      cart.addBook(book);
    });
    callback();
  });

  this.Then(/^I must pay (\d+) euros$/, function (arg1, callback) {
    assert.equal(cart.getTotal(), Number(arg1));
    callback();
  });
};
