Feature: Buy books
  As I have Harry Potter's books in my shopping cart
  I want to get the total price (including discounts if any)
  So that I can buy them

  Scenario: buy 1 copy of a book (no discount)
    Given I want to buy 1 copies of "Harry Potter, volume 1"
    When I add books to the cart
    Then I must pay "8" euros

  Scenario: buy 2 copies of same book (no discount)
    Given I want to buy 2 copies of "Harry Potter, volume 2"
    When I add books to the cart
    Then I must pay "16" euros

  Scenario: buy 1 copy of a book and 1 copy of another (5% discount!)
    Given I want to buy 1 copies of "Harry Potter, volume 1"
    And I want to buy 1 copies of "Harry Potter, volume 2"
    When I add books to the cart
    Then I must pay "15.20" euros

  Scenario: buy 4 books with 3 different ones (10% discount!)
    Given I want to buy 2 copies of "Harry Potter, volume 1"
    And I want to buy 1 copies of "Harry Potter, volume 2"
    And I want to buy 1 copies of "Harry Potter, volume 3"
    When I add books to the cart
    Then I must pay "29.60" euros

  Scenario Outline: buy lots of books!
    Given I want to buy <nbH1> copies of "Harry Potter, volume 1"
    And I want to buy <nbH2> copies of "Harry Potter, volume 2"
    And I want to buy <nbH3> copies of "Harry Potter, volume 3"
    And I want to buy <nbH4> copies of "Harry Potter, volume 4"
    And I want to buy <nbH5> copies of "Harry Potter, volume 5"
    When I add books to the cart
    Then I must pay "<total>" euros

    Examples:
      | nbH1  | nbH2  | nbH3  | nbH4  | nbH5  | total   |
      | 5     | 4     | 3     | 2     | 1     | 100.00  |
      | 4     | 3     | 2     | 1     | 0     | 70.40   |
      | 3     | 2     | 1     | 0     | 5     | 78.40   |
      | 2     | 1     | 0     | 5     | 4     | 85.60   |
      | 1     | 0     | 5     | 4     | 3     | 92.00   |
      | 0     | 5     | 4     | 3     | 2     | 96.00   |
      | 2     | 2     | 2     | 1     | 1     | 51.20   |
