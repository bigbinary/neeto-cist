import { concat, isNil, slice } from "ramda";

import { nullSafe } from "./general";

export const slugify = string =>
  string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/\./g, "-") // Replace dots with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

export const humanize = string => {
  string = string
    .replace(/[_-]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/([a-z\d])([A-Z])/g, "$1" + " " + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + " " + "$2")
    .toLowerCase()
    .trim();
  string = string.charAt(0).toUpperCase() + string.slice(1);

  return string;
};

export const snakeToCamelCase = string =>
  string.replace(/(_\w)/g, letter => letter[1].toUpperCase());

export const camelToSnakeCase = string =>
  string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const hyphenate = (string, fallbackString) => {
  if (typeof string === "number") return String(string);

  if (string && typeof string === "string" && string.replace) {
    return string
      .replace(/[\s_]/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/-+/g, "-")
      .toLowerCase();
  }

  return fallbackString;
};

export const truncate = (string, length) =>
  string.length > length ? concat(slice(0, length, string), "...") : string;

export const _slugify = /*#__PURE__*/ nullSafe(slugify);
export const _humanize = /*#__PURE__*/ nullSafe(humanize);
export const _snakeToCamelCase = /*#__PURE__*/ nullSafe(snakeToCamelCase);
export const _camelToSnakeCase = /*#__PURE__*/ nullSafe(camelToSnakeCase);
export const _capitalize = /*#__PURE__*/ nullSafe(capitalize);

export const _hyphenate = (string, length) =>
  isNil(string) ? string : hyphenate(string, length);

export const _truncate = (string, length) =>
  isNil(string) ? string : truncate(string, length);
