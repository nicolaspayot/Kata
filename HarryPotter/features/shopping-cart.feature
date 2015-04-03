Feature: Shopping cart
  As a big Harry Potter's fan
  I want to add a book in my shopping cart
  So that I can buy it

  Scenario: Item added to grocery list
    Given I have an empty cart
    When I add 1 book to the cart
    Then The cart contains 1 book
