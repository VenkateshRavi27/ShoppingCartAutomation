Feature: User Should login with valid credentials and Purchase the product

  Scenario: Login with valid credential and checkout order
    When user login with valid username and password
    And user validate the homepage title
    And user clicks the select the product
    And user clicks the add to cart button
    And user validates the cart boxes
    And user clicks the checkout button
    Then user enters the username lastname and zipcode
    And user validates the total price
    Then user clicks the finish button
