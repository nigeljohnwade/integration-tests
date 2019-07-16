const { Given, Then } = require("cucumber");
const { assert } = require("chai");

Given("I visit the webdriver.io page", function() {
  browser.url('https://webdriver.io');
});

Then("it should have the right title", function() {
  const title = browser.getTitle();
  assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});
