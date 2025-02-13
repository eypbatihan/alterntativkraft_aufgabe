const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/alterntativkraft_aufgabe',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
