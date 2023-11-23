import path from "path";

import alias from "@rollup/plugin-alias";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { keys } from "ramda";
import analyze from "rollup-plugin-analyzer";
import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import packageJSON from "./package.json";
const rootResolve = require("./resolve.js");

const globals = Object.fromEntries(
  keys(packageJSON.peerDependencies).map(lib => [lib, lib])
);

export default {
  input: `./src/index.js`,
  output: [
    {
      inlineDynamicImports: true,
      file: `index.cjs.js`,
      format: "cjs",
      sourcemap: true,
      name: `neeto-cist/index`,
      globals,
    },
    {
      inlineDynamicImports: true,
      file: `index.mjs`,
      format: "esm",
      sourcemap: true,
      name: `neeto-cist/index`,
      globals,
    },
  ],
  plugins: [
    // To delete previously existing bundle.
    cleaner({
      targets: [
        path.resolve(__dirname, `index.esm.js`),
        path.resolve(__dirname, `index.js`),
      ],
    }),
    // Analyze created bundle.
    analyze({ summaryOnly: true }),
    // To automatically externalize peerDependencies in a rollup bundle.
    peerDepsExternal(),
    // To use third party modules from node_modules
    resolve({
      extensions: [".js", ".jsx", ".svg"],
    }),
    // To define aliases when bundling packages.
    alias({ entries: rootResolve.alias }),
    // To convert .json files to ES6 modules.
    json(),
    // To integrate Rollup and Babel.
    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    // To convert CommonJS modules to ES6.
    commonjs(),
  ],
};
