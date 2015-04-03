'use strict';

module.exports = function() {
  this.books = [];

  this.addBook = function(book) {
    this.books.push(book);
  };
};
