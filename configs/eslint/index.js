module.exports = {
  env: {
    browser: true, // window object etc part of browser are made available globally.
    es2020: true, // to include BigInt support
    es6: true,
    commonjs: true,
    node: true,
  },
  /*
   * The order of extending each plugin matters a LOT!!
   * Thus don't change order of items in this array
   * unless you're sure of it.
   */
  extends: [
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
  settings: {
    react: { version: "detect" },
    // We need this for the import/extensions rule to work: https://github.com/import-js/eslint-plugin-import#importextensions
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".svg", ".json"],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // babel-eslint is deprecated now. This is the latest package.
  parser: "@babel/eslint-parser",
  plugins: [
    "react",
    "prettier",
    "import",
    "react-hooks",
    "promise",
    "jam3",
    "unused-imports",
    "sonarjs",
    "security",
    "xss",
  ],
  rules: {
    // auto-fixable: Respect all Prettier rules and apply it.
    "prettier/prettier": "error",
    // not-auto-fixable: No unused variables allowed.
    "no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        caughtErrors: "all",
      },
    ],
    // not-auto-fixable: No undefined variables allowed.
    "no-undef": "error",
    // not-auto-fixable: Dont use console statements. Use logger which babel will remove during bundling.
    "no-console": "error",
    // not-auto-fixable: require `return` statements to either always or never specify values.
    "consistent-return": "error",
    // auto-fixable: disallows repeating variable name when declaring object properties.
    "object-shorthand": "error",
    // auto-fixable: sadly this doesn't support guard clauses yet.
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "if", next: ["if", "return"] },
      // The newline-before-return rule is deprecated in favor of the following:
      { blankLine: "always", prev: "*", next: "return" },
      // Add newline between function declarations
      {
        blankLine: "always",
        prev: [
          "block",
          "multiline-block-like",
          "function",
          "iife",
          "multiline-const",
          "multiline-expression",
        ],
        next: ["function", "iife", "multiline-const", "multiline-expression"],
      },
    ],
    // auto-fixable: Single line statements needn't have any braces. But in all other cases enforce curly braces.
    curly: ["error", "multi-line"],
    // auto-fixable: Remove the else part, if the "if" or "else-if" chain has a return statement
    "no-else-return": "error",
    // not-auto-fixable: Prevent un-sanitized dangerouslySetInnerHTML.
    "jam3/no-sanitizer-with-danger": [
      2,
      { wrapperName: ["dompurify", "sanitizer", "sanitize"] },
    ],
    // auto-fixable: Requires trailing commas when the last element or property is in a different line than the closing ] or }
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    // auto-fixable: If a variable is never reassigned, using the const declaration is better.
    "prefer-const": "error",
    // auto-fixable: It is considered good practice to use the type-safe equality operators === and !==.
    eqeqeq: "error",
    // not-auto-fixable: Rule flags optional chaining expressions in positions where short-circuiting to undefined causes throwing a TypeError afterward.
    "no-unsafe-optional-chaining": "error",
    // auto-fixable: Remove all unused imports.
    "unused-imports/no-unused-imports": "error",
    // auto-fixable-1-level-deep: Using nested ternary operators make the code unreadable. Use if/else or switch with if/else. If it's JSX then move it out into a function or a variable. It's fine to use nestedTernary in JSX when it makes code more readable.
    "no-nested-ternary": "warn",
    // auto-fixable: Enforces no braces where they can be omitted.
    "arrow-body-style": ["error", "as-needed"],
    // auto-fixable: Suggests using template literals instead of string concatenation.
    "prefer-template": "error",
    // auto-fixable: Disallows ternary operators when simpler alternatives exist.
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    // not-auto-fixable: Enforces declaring default params last
    "default-param-last": "error",
    // not-auto-fixable: Remove redundant async-awaits
    "no-return-await": "warn",
    // not-auto-fixable: Disallow empty block statements
    "no-empty": ["error", { allowEmptyCatch: true }],
    // not-auto-fixable: Enforce return statements in callbacks of array methods.
    "array-callback-return": ["error"],
    // auto-fixable: Partially fixable. Unless there's a need to the this keyword, there's no advantage of using a plain function.
    "prefer-arrow-callback": ["error", { allowUnboundThis: true }],
    // not-auto-fixable: Convert multiple imports from same module into a single import.
    "no-duplicate-imports": ["error", { includeExports: true }],
    // auto-fixable: Partially fixable. In JavaScript, there are a lot of different ways to convert value types. Allow only readable coercions.
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    // auto-fixable: Require let or const instead of var.
    "no-var": "error",
    // auto-fixable: This rule conflicts with prettier rules. Thus we've NOT kept this rule in react file. This rule ensures we don't add blank lines in JSX.
    "react/jsx-newline": ["error", { prevent: true }],
    // not-auto-fixable: Disallow async functions which have no await expression
    "require-await": "error",
    // auto-fixable: This rule ensures immediate returns in functions where constants are declared and then directly returned.
    "sonarjs/prefer-immediate-return": "error",
    // not-auto-fixable: This rule enforces merging adjacent collapsible if statements.
    "sonarjs/no-collapsible-if": "error",
    // not-auto-fixable: This rule prevents identical conditions inside if-else statements.
    "sonarjs/no-identical-conditions": "error",
    // not-auto-fixable: This rule prevents using a function with no return as output, passing it to another function, or assigning its result to a variable.
    "sonarjs/no-use-of-empty-return-value": "error",
    // not-auto-fixable: This rule prevents using loops with at most one iteration.
    "sonarjs/no-one-iteration-loop": "error",
    // not-auto-fixable: This rule prevents using catch clause that only throws an error.
    "sonarjs/no-useless-catch": "error",
    // not-auto-fixable: This rule warns against "eval(variable)" which can allow an attacker to run arbitrary code inside your process.
    "security/detect-eval-with-expression": "warn",
    // not-auto-fixable: This rule ensures that you are calling escape function before location.href assignment.
    "xss/no-location-href-assign": ["error", { escapeFunc: "sanitize" }],
  },
};
