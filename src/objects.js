import { curry, isNil } from "ramda";

import { nullSafe } from "./general";
import { camelToSnakeCase, snakeToCamelCase } from "./strings";

const matchesImpl = (pattern, object, __parent = object) => {
  if (object === pattern) return true;

  if (typeof pattern === "function" && pattern(object, __parent)) return true;

  if (isNil(pattern) || isNil(object)) return false;

  if (typeof pattern !== "object") return false;

  return Object.entries(pattern).every(([key, value]) =>
    matchesImpl(value, object[key], __parent)
  );
};

export const transformObjectDeep = (
  object,
  keyValueTransformer,
  /** @type {undefined | ((any) => any)} */
  objectPreProcessor = undefined
) => {
  if (objectPreProcessor && typeof objectPreProcessor === "function") {
    object = objectPreProcessor(object);
  }

  if (Array.isArray(object)) {
    return object.map((obj) =>
      transformObjectDeep(obj, keyValueTransformer, objectPreProcessor)
    );
  } else if (object === null || typeof object !== "object") {
    return object;
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) =>
      keyValueTransformer(
        key,
        transformObjectDeep(value, keyValueTransformer, objectPreProcessor)
      )
    )
  );
};

export const keysToCamelCase = (object) =>
  transformObjectDeep(object, (key, value) => [snakeToCamelCase(key), value]);

export const keysToSnakeCase = (object) =>
  transformObjectDeep(object, (key, value) => [camelToSnakeCase(key), value]);

export const serializeKeysToSnakeCase = (object) =>
  transformObjectDeep(
    object,
    (key, value) => [camelToSnakeCase(key), value],
    (object) =>
      typeof object?.toJSON === "function" ? object.toJSON() : object
  );

export const preprocessForSerialization = (object) =>
  transformObjectDeep(
    object,
    (key, value) => [key, value],
    (object) =>
      typeof object?.toJSON === "function" ? object.toJSON() : object
  );

export const deepFreezeObject = (object) => {
  if (object && typeof object === "object" && !Object.isFrozen(object)) {
    Object.keys(object).forEach((property) =>
      deepFreezeObject(object[property])
    );
    Object.freeze(object);
  }

  return object;
};

export const matches = /*#__PURE__*/ curry((pattern, object) =>
  matchesImpl(pattern, object)
);

export const filterNonNull = (object) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([, v]) => !isNil(v))
      .map(([k, v]) => [
        k,
        typeof v === "object" && !Array.isArray(v) ? filterNonNull(v) : v,
      ])
  );

export const _filterNonNull = nullSafe(filterNonNull);
