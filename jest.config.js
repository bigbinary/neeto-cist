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
    "^initializers(.*)$": path.resolve(__dirname, "src/initializers/$1"),
    "^react-utils(.*)$": path.resolve(__dirname, "src/react-utils/$1"),
    "^cypress-utils(.*)$": path.resolve(__dirname, "src/cypress-utils/$1"),
    "^utils(.*)$": path.resolve(__dirname, "src/utils/$1"),
    "^pure(.*)$": path.resolve(__dirname, "src/pure/$1"),
    "^assets(.*)$": path.resolve(__dirname, "src/assets/$1"),
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/jestTransformers/svgTransformer.js",
    "^.+\\.(css|scss)$": "<rootDir>/jestTransformers/scssTransformer.js",
  },
};
