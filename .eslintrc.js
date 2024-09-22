const { mergeDeepLeft } = require("ramda");

const defaultConfigurations = require("./configs/eslint");

module.exports = mergeDeepLeft(
  {
    extends: [...defaultConfigurations.extends, "plugin:storybook/recommended"],
    rules: { "import/extensions": "off" },
  },
  defaultConfigurations
);
