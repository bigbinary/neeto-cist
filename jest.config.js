const path = require("path");

const { defaults } = require("jest-config");

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "svg"],
  moduleNameMapper: {
    "^src(.*)$": path.resolve(__dirname, "src/$1"),
  },
};
