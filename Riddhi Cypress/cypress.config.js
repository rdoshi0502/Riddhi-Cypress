const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  defaultCommandTimeout: 100000,

  //mobile viewport configuration
  //viewportHeight: 667,
  //viewportWidth: 375,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
