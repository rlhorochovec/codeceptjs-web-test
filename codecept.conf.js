exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://rlhorochovec.github.io/qa',
      show: false,
      browser: 'chromium',
      video: false
    }
  },
  include: {
    I: "./steps_file.js",
    LoginPage: "./pages/login_page.js",
    HomePage: "./pages/home_page.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.js','./step_definitions/home_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: "./output",
      require: "allure-codeceptjs"
    },
    stepByStepReport: {
      enabled: true,
      output: "./output"
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'codeceptjs-web-test',
  translation: 'pt-BR'
}