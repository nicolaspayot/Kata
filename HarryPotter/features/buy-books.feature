Feature: Buy books
  As I have Harry Potter's books in my shopping cart
  I want to get the total price (including discounts if any)
  So that I can buy them

  Scenario: buy 1 copy of a book (no discount)
    Given I want to buy 1 copies of "Harry Potter, volume 1"
    When I add books to the cart
    Then I must pay 8 euros

  Scenario: buy 2 copies of same book (no discount)
    Given I want to buy 2 copies of "Harry Potter, volume 2"
    When I add books to the cart
    Then I must pay 16 euros
