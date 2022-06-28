const { Given, Then } = require('@cucumber/cucumber')

Given('I run a demo test', () => {
  return browser
    .url('https://www.wonderbly.com/')
    .click('a.SwitchCountry__country:nth-child(2)')
    .click('.nav--visible .nav-item:nth-child(1) a.nav-item__link')
    .assert.textContains('.TextHero__title', 'Personalized books')
})
