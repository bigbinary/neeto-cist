module.exports = {
  ignorePatterns: [
    "!.scripts",
    "initializers.*js",
    "react-utils.*js",
    "cypress-utils.*js",
    "cypress-commands.*js",
    "utils.*js",
    "pure.*js",
    "node_modules",
  ],
  overrides: [
    {
      files: [".scripts/**/*"],
      rules: {
        "no-console": "off",
        "import/extensions": "off",
      },
    },
  ],
};
