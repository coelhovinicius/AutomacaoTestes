const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true
    }
  }
});


/*const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const reportDir = 'cypress/results';
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }

      let count = 0;
      on('before:browser:launch', () => {
        let reportFilename;
        do {
          count += 1;
          reportFilename = `Teste${count === 1 ? '' : `_${String(count).padStart(3, '0')}`}`;
        } while (fs.existsSync(path.join(reportDir, reportFilename + '.html')));

        config.reporterOptions = {
          reportDir: reportDir,
          overwrite: false,
          html: true,
          json: true,
          reportFilename: reportFilename
        };

        return config;
      });

      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      overwrite: false,
      html: true,
      json: true
    }
  }
});
*/