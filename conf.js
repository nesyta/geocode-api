let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const chromeHeadlessArgs =
    ['--headless'];

const chromeOptions = {
  args: chromeHeadlessArgs,
};

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': chromeOptions,
    acceptInsecureCerts: true
  },

  // Spec patterns are relative to the location of the spec file.
  suites: {
    health_check: 'api/test-suites/**/*spec.ts',
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  framework: 'jasmine',
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
  }
};