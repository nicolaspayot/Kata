'use strict';

var assert = require('assert');
var Book = require('../../script/book');

module.exports = function() {

  this.Given(/^I want to buy (\d+) copies of "([^"]*)"$/, function (count, title, callback) {
    for (var i = 0; i < count; ++i) {
      this.books.push(new Book(title));
    }
    callback();
  });

  this.When(/^I add books to the cart$/, function (callback) {
    this.books.forEach(function(book) {
      this.cart.addBook(book);
    }.bind(this));
    callback();
  });

  this.Then(/^I must pay "([^"]*)" euros$/, function (total, callback) {
    assert.equal(this.cart.getTotal(), Number(total));
    callback();
  });
};
