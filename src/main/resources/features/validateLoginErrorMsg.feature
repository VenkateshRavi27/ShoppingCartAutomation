Feature: To validate the error message in login functionality

  Scenario: Login with invalid credentials
    Given user should navigate the application
    And user enters the invalid username
    And user enters the invalid password
    When user clicks the login button
    And user should see the error message
    Then user should validate the error message
