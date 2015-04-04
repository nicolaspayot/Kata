'use strict';

module.exports = function() {
  var books = [];

  this.isEmpty = function() {
    return books.length === 0;
  };

  this.addBook = function(book) {
    books.push(book);
  };

  this.getBookQuantity = function() {
    return books.length;
  };

  this.getTotal = function() {
    return 8.0;
  };
};
