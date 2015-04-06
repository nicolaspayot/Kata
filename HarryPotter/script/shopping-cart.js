'use strict';

module.exports = function() {

  var books = [];
  // Number of orders per book
  var bookCount = {};

  var discountRates = { 1: 1, 2: 0.95, 3: 0.90, 4: 0.80, 5: 0.75 };
  // Number of sets of different books
  var discounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  this.isEmpty = function() {
    return books.length === 0;
  };

  this.addBook = function(book) {
    books.push(book);
  };

  this.getBookQuantity = function() {
    return books.length;
  };

  var setBookCount = function() {
    books.forEach(function(book) {
      var count = bookCount[book];
      if (typeof count === 'undefined') {
        bookCount[book] = 0;
      }
      ++bookCount[book];
    });
  };

  var setDiscounts = function() {
    var bookSet = Object.keys(bookCount);
    var maxDiscount = 0;

    while ((maxDiscount = bookSet.length) > 0) {
      ++discounts[maxDiscount];

      bookSet.forEach(function(book) {
        if (--bookCount[book] === 0) {
          delete bookCount[book];
        }
      });
      bookSet = Object.keys(bookCount);
    }
  };

  // Discount is higher with 2 sets of 4 different books than with 1 set of 5 and 1 set of 3
  var optimizeDiscounts = function() {
    while (discounts[5] > 0 && discounts[3] > 0) {
      --discounts[5];
      --discounts[3];
      discounts[4] += 2;
    }
  };

  this.getTotal = function() {
    setBookCount();
    setDiscounts();
    optimizeDiscounts();

    var total = 0;
    for (var count = 1; count < 6; ++count) {
      total += 8.0 * count * discounts[count] * discountRates[count];
    }
    return total.toFixed(2);
  };
};
