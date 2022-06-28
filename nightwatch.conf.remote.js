const {
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
} = require('dotenv-safe').config().parsed

module.exports = {
  src_folders: ['./tests/nightwatch'],
  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: './tests/cucumber/**/*',
      auto_start_session: true,
      parallel: 1,
    },
  },
  test_settings: {
    default: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443,
      },
      desiredCapabilities: {
        'bstack:options' : {
          userName: BROWSERSTACK_USERNAME,
          accessKey: BROWSERSTACK_ACCESS_KEY,
          debug: true,
          networkLogs: true,
        },
      },
    },
    'chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false,
          'args' : ['start-maximized'],
        },
      },
    },
  },
}
