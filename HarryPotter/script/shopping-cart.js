  'use strict';

module.exports = function() {

  var discounts = { 2: 0.05, 3: 0.1, 4: 0.2, 5: 0.25 };

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

  var getBookCount = function() {
    var bookCount = {};
    books.forEach(function(book) {
      var count = bookCount[book.title];
      if (typeof count === 'undefined') {
        bookCount[book.title] = 0;
      }
      ++bookCount[book.title];
    });
    return bookCount;
  };

  this.getTotal = function() {
    var bookCount = getBookCount();

    var titles = Object.keys(bookCount);
    var total = titles.reduce(function(total, title) {
      return total + bookCount[title] * 8.0;
    }, 0);

    var discount = discounts[titles.length];
    if (discount) {
      total -= total * discount;
    }

    return total;
  };
};
