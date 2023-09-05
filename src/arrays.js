import {
  curry,
  complement,
  fromPairs,
  toPairs,
  path,
  findLast,
  findLastIndex,
  count,
} from "ramda";

import { nullSafe } from "./general";
import { matches } from "./objects";

export const removeById = /*#__PURE__*/ curry((id, array) =>
  array.filter((item) => item.id !== id)
);

export const findById = /*#__PURE__*/ curry((id, array) =>
  array.find((item) => item.id === id)
);

export const replaceById = /*#__PURE__*/ curry((id, newItem, array) =>
  array.map((item) => (item.id === id ? newItem : item))
);

export const modifyById = /*#__PURE__*/ curry((id, modifier, array) =>
  array.map((item) => (item.id === id ? modifier(item) : item))
);

export const findBy = /*#__PURE__*/ curry((pattern, array) =>
  array.find(matches(pattern))
);

export const removeBy = /*#__PURE__*/ curry((pattern, array) =>
  array.filter(complement(matches(pattern)))
);

export const replaceBy = /*#__PURE__*/ curry((pattern, newItem, array) =>
  array.map((item) => (matches(pattern, item) ? newItem : item))
);

export const modifyBy = /*#__PURE__*/ curry((pattern, modifier, array) =>
  array.map((item) => (matches(pattern, item) ? modifier(item) : item))
);

export const existsById = /*#__PURE__*/ curry((id, array) =>
  array.some((item) => item.id === id)
);

export const existsBy = /*#__PURE__*/ curry((pattern, array) =>
  array.some(matches(pattern))
);

export const findLastBy = /*#__PURE__*/ curry((pattern, array) =>
  findLast(matches(pattern), array)
);

export const findIndexById = /*#__PURE__*/ curry((id, array) =>
  array.findIndex((item) => item.id === id)
);

export const findIndexBy = /*#__PURE__*/ curry((pattern, array) =>
  array.findIndex(matches(pattern))
);

export const findLastIndexBy = /*#__PURE__*/ curry((pattern, array) =>
  findLastIndex(matches(pattern), array)
);

export const filterBy = /*#__PURE__*/ curry((pattern, array) =>
  array.filter(matches(pattern))
);

export const countBy = /*#__PURE__*/ curry((pattern, array) =>
  count(matches(pattern), array)
);

export const copyKeys = /*#__PURE__*/ curry((keyMap, objectArray) =>
  objectArray.map((object) => {
    const shallowCopy = { ...object };
    for (const source in keyMap) {
      shallowCopy[keyMap[source]] = object[source];
    }

    return shallowCopy;
  })
);

export const renameKeys = /*#__PURE__*/ curry((keyMap, objectArray) =>
  objectArray.map((object) => {
    const shallowCopy = { ...object };
    for (const source in keyMap) {
      shallowCopy[keyMap[source]] = object[source];
      delete shallowCopy[source];
    }

    return shallowCopy;
  })
);

export const copyKeysDeep = /*#__PURE__*/ curry((keyMap, objectArray) => {
  const copyKeysSingleObject = (object, keyMap, root = object) => ({
    ...object,
    ...fromPairs(
      toPairs(keyMap).map(([destination, source]) => {
        if (typeof source === "function") {
          return [destination, source(object[destination], root)];
        } else if (Array.isArray(source)) {
          return [destination, path(source, root)];
        } else if (typeof source === "object") {
          return [
            destination,
            copyKeysSingleObject(object[destination], source, root),
          ];
        }

        return [destination, object[source]];
      })
    ),
  });

  return objectArray.map((object) => copyKeysSingleObject(object, keyMap));
});

export const _removeById = /*#__PURE__*/ nullSafe(removeById);
export const _findById = /*#__PURE__*/ nullSafe(findById);
export const _replaceById = /*#__PURE__*/ nullSafe(replaceById);
export const _modifyById = /*#__PURE__*/ nullSafe(modifyById);
export const _findBy = /*#__PURE__*/ nullSafe(findBy);
export const _removeBy = /*#__PURE__*/ nullSafe(removeBy);
export const _replaceBy = /*#__PURE__*/ nullSafe(replaceBy);
export const _modifyBy = /*#__PURE__*/ nullSafe(modifyBy);
export const _existsById = /*#__PURE__*/ nullSafe(existsById);
export const _existsBy = /*#__PURE__*/ nullSafe(existsBy);
export const _findLastBy = /*#__PURE__*/ nullSafe(findLastBy);
export const _findIndexById = /*#__PURE__*/ nullSafe(findIndexById);
export const _findIndexBy = /*#__PURE__*/ nullSafe(findIndexBy);
export const _findLastIndexBy = /*#__PURE__*/ nullSafe(findLastIndexBy);
export const _filterBy = /*#__PURE__*/ nullSafe(filterBy);
export const _countBy = /*#__PURE__*/ nullSafe(countBy);
export const _copyKeys = /*#__PURE__*/ nullSafe(copyKeys);
export const _renameKeys = /*#__PURE__*/ nullSafe(renameKeys);
export const _copyKeysDeep = /*#__PURE__*/ nullSafe(copyKeysDeep);
