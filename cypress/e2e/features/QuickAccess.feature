@QuickAccess
Feature: QuickAccess in the main page
    As a user
    I want to access to homepage
    So can check quick access section

  @regression
  Scenario: Check quick access
    Given the main page
    When see quick access section
    Then check the options: "Fast shipping, Easy Payments, Shipping Options, Large Variety"
