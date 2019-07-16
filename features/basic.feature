Feature: Webdriver IO has the right title

  Scenario: Page has the right title
    Given I visit the webdriver.io page
    Then it should have the right title
