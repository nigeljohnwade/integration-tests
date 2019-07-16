const { Given, Then } = require("cucumber");
const { assert } = require("chai");

Given("I visit the dashboard page", function() {
  browser.url('http://localhost:9077');
});

Then("it should have the right title", function() {
  const title = browser.getTitle();
  assert.strictEqual(title, 'VR.World');
});
