const { Given, Then } = require('@cucumber/cucumber')

Given('I run a demo test', () => {
  browser
    .url('https://www.ecosia.org/')
    .setValue('input[type=search]', 'nightwatch')
    .click('button[type=submit]')
    .assert.containsText('.mainline', 'Nightwatch.js')
})
