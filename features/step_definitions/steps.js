const { Given, Then } = require("cucumber");
const { assert } = require("chai");

Given("I visit the root page", function() {
  browser.url('http://localhost:3000');
});

Then("it should have the right title", function() {
  const title = browser.getTitle();
  assert.strictEqual(title, 'SWAPIAPP');
});

Then("it should have the right h1", function() {
  const h1 = browser.$('h1').getText();
  assert.strictEqual(h1, 'star wars api');
});
