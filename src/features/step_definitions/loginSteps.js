// features/step_definitions/loginSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('the user is on the login page', async function () {
  await this.page.goto('http://localhost:3000/login');
});

When('the user enters valid credentials', async function () {
  await this.page.type('#username', 'admin');
  await this.page.type('#password', 'admin123');
  await this.page.click('#loginButton');
});

Then('they should be redirected to the dashboard', async function () {
  await this.page.waitForSelector('#dashboard');
  const url = await this.page.url();
  assert.strictEqual(url.includes('dashboard'), true);
});
