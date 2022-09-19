const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "jsonlogs",
  reportPath: "./reports/cucumber-htmpreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "104",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
});
