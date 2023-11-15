const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.experimentalStudio = true;
      this.watchForFileChanges = false;
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  // retries: 2,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 5000,
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  experimentalStudio: true,
  e2e: {
      setupNodeEvents(on, config) {
          this.experimentalStudio = true;
          this.watchForFileChanges = false;
          // implement node event listeners here
      }
  },
});
