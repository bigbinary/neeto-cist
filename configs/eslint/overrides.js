module.exports = {
  // Currently we are using this section for excluding certain files from certain rules.
  overrides: [
    {
      files: [".eslintrc.js", ".prettierrc.js", "*.json"],
      rules: {
        "import/order": "off",
        "react-hooks/rules-of-hooks": "off",
      },
    },
    { files: ["src/**/.js"], rules: { "no-redeclare": "off" } },
    {
      files: ["**/*.spec.js", "**/*.spec.jsx", "**/*.test.jsx"],
      env: { jest: true },
    },
  ],
};
