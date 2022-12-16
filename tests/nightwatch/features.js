const { Given, Then } = require('@cucumber/cucumber')

Given('I run a demo test', () => {
  return browser
    .url('https://www.wonderbly.com/')
    .click('a.SwitchCountry__country:nth-child(2)')
    .click('button.cky-btn.cky-btn-accept')
    .click('a.LinksNav__link[href="/sitemap"]')
    .assert.textContains('.Sitemap__Category__title', 'Product Range')
})
