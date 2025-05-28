@Regressiontesting
Feature: User Navigate and Select Product item

  Background:

  Scenario Outline: Navigates Balsam Hill Web Application
    Given User is on the Balsam Hill Web Application
    When User Enter "<Product Item>" on the search Background
    And User click "<Search Item>" on search item suggestions
    And User click "<Selected Product Item>" on product selection page
    And User validate "<Product Price>" and "<Product Quantity>" and should be seen on add to cart page and view cart page
    Then User click trash can icon and item should be removed and "Burgundy Holy Family Tree Topper has been removed" should be seen on the cart page

    Examples:
      | Product Item   | Search Item           | Selected Product Item            | Product Price | Product Quantity |
      | Christmas Tree | christmas tree topper | Burgundy Holy Family Tree Topper | $179          | Qty: 1           |
