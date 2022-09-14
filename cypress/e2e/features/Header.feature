@Header
Feature: Header in the main page
    As a user
    I want to access to homepage
    So can check "register or login" button

  @regression
  Scenario: Check main button
    Given the main page
    When see the Header
    Then check "Login or register" button is displayed
