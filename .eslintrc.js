const { mergeLeft, mergeDeepLeft } = require("ramda");

const commonConfiguration = require("./configs/eslint");

const nanosConfiguration = {
  extends: [
    "plugin:@bigbinary/neeto/nanos-recommended",
    "plugin:cypress/recommended",
    "plugin:json/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    `./configs/eslint/globals`,
    `./configs/eslint/overrides`,
    `./configs/eslint/imports/enforced`,
    `./configs/eslint/react`,
    `./configs/eslint/promise`,
    "prettier",
  ],
};

const defaultConfigurations = mergeLeft(
  nanosConfiguration,
  commonConfiguration
);

module.exports = mergeDeepLeft(
  {
    extends: [...defaultConfigurations.extends, "plugin:storybook/recommended"],
    rules: {
      "@bigbinary/neeto/no-missing-localization": "off",
      "@bigbinary/neeto/file-name-and-export-name-standards": "off",
      "@bigbinary/neeto/no-axios-import-outside-apis": "off",
      "@bigbinary/neeto/use-neetoui-classes": "error",
      "import/extensions": "off",
    },
  },
  defaultConfigurations
);
