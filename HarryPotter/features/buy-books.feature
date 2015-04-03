Feature: Buy books
  As I have Harry Potter's books in my shopping cart
  I want to get the total price (including discounts if any)
  So that I can buy them

  Scenario: buy 1 book without discount
    Given I want to buy "Harry Potter, volume 1"
    When I add it to the cart
    Then I must pay 8 euros
