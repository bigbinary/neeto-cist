const defaultConfigurations = require("@bigbinary/neeto-commons-frontend/configs/nanos/eslint/index.js");
const { mergeDeepLeft } = require("ramda");

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
