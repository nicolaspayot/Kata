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
      var count = bookCount[book];
      if (typeof count === 'undefined') {
        bookCount[book] = 0;
      }
      ++bookCount[book];
    });
    return bookCount;
  };

  this.getTotal = function() {
    var bookCount = getBookCount();

    var bookSet = Object.keys(bookCount);
    var total = bookSet.reduce(function(total, book) {
      return total + bookCount[book] * 8.0;
    }, 0);

    var discount = discounts[bookSet.length];
    if (discount) {
      total -= total * discount;
    }

    return total;
  };
};
