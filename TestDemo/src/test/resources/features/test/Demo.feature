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

  Scenario Outline: As user i want Verify Login Page
    And Navigate successfully ly to Login Page
    When Input <username> to username
    And Input <password> to password
    And Click to Login
Then
    Examples:
      | username | password |
      | anhtester@email.com     | AnhTester@2023#  |

#Mô tả điều kiện đã có sẵn (Given steps)
#Mô tả hành động của tác nhân (When steps)
#Mô tả kết quả mong đợi sau hành động (Then steps)