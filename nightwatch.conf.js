module.exports = {
  src_folders: ['./tests/nightwatch'],
  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
  },
  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: './tests/cucumber/**/*',
      auto_start_session: true,
      parallel: 2,
    },
  },
  test_settings: {
    default: {
      launch_url: '',
      desiredCapabilities : {
        browserName : 'chrome',
      },
    },
  },
}
