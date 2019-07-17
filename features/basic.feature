Feature: SWAPIAPP has the right text

  Scenario: Page has the right title
    Given I visit the root page
    Then it should have the right title

  Scenario: Page has the right h1
    Given I visit the root page
    And it should have the right h1
