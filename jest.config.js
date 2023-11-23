const path = require("path");

const { defaults } = require("jest-config");

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./jest-setup.js"],
  testEnvironment: "jsdom",
  testURL: "http://test.com",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "svg"],
  moduleNameMapper: {
    "^src(.*)$": path.resolve(__dirname, "src/$1"),
  },
};
