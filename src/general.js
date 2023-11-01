import { produce } from "immer";

import {
  complement,
  curry,
  curryN,
  either,
  equals,
  isEmpty,
  isNil,
} from "ramda";

/**
 * @template {Function} T
 * @param {T} func
 * @returns {T}
 */
export const nullSafe = func =>
  // @ts-ignore
  curryN(func.length, (...args) => {
    const dataArg = args[func.length - 1];

    return isNil(dataArg) ? dataArg : func(...args);
  });

export const noop = () => {};

export const toLabelAndValue = string => ({ label: string, value: string });

// eslint-disable-next-line default-param-last
export const getRandomInt = (a = Number.MAX_SAFE_INTEGER, b) => {
  if (b) {
    a = Math.ceil(a);
    b = Math.floor(b);
  } else {
    b = a;
    a = 0;
  }

  return Math.floor(Math.random() * (b - a) + a);
};

export const randomPick = (...args) => {
  const randomNumber = getRandomInt(0, args.length);

  return args[randomNumber];
};

export const dynamicArray = (count, elementGenerator) =>
  Array.from({ length: count }, (_, index) => elementGenerator(index));

export const isNotEmpty = /*#__PURE__*/ complement(isEmpty);

export const notEquals = /*#__PURE__*/ curry((x, y) => x !== y);
export const isNot = notEquals;

export const isNotPresent = /*#__PURE__*/ either(isNil, isEmpty);
export const isPresent = /*#__PURE__*/ complement(isNotPresent);

export const notEqualsDeep = /*#__PURE__*/ complement(equals);
export const isNotEqualDeep = notEqualsDeep;

export const modifyWithImmer = /*#__PURE__*/ curry((modifier, data) =>
  produce(data, modifier)
);
