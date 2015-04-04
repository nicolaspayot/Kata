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

  var getTotalUnits = function(unitCount) {
    var total = unitCount * 8.0;
    var discount = discounts[unitCount];
    if (discount) {
      total -= total * discount;
    }
    return total;
  };

  this.getTotal = function() {
    var total = 0;

    var bookCount = getBookCount();
    var bookSet = Object.keys(bookCount);
    var unitCount = 0;

    while ((unitCount = bookSet.length) > 0) {

      total += getTotalUnits(unitCount);

      bookSet.forEach(function(book) {
        if (--bookCount[book] === 0) {
          delete bookCount[book];
        }
      });
      bookSet = Object.keys(bookCount);
    }

    return total;
  };
};
