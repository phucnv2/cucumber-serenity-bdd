@Login232
Feature: Test Login Feature

  Scenario Outline: As user i want Login to Homepage
    And Navigate successfully ly to Login Page
    When Input <username> to username
    And Input <password> to password
    And Click to Login
#    Then Close dialog
#    And Verify Logout is displayed in Homepage
    Examples:
      | username | password |
      | anhtester@email.com     | AnhTester@2023#  |