'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ramda = require('ramda');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/**
 * @template {Function} T
 * @param {T} func
 * @returns {T}
 */
var nullSafe = function nullSafe(func) {
  return (
    // @ts-ignore
    ramda.curryN(func.length, function () {
      var _ref;
      var dataArg = (_ref = func.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]);
      return ramda.isNil(dataArg) ? dataArg : func.apply(void 0, arguments);
    })
  );
};
var noop = function noop() {};
var toLabelAndValue = function toLabelAndValue(string) {
  return {
    label: string,
    value: string
  };
};

// eslint-disable-next-line default-param-last
var getRandomInt = function getRandomInt() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MAX_SAFE_INTEGER;
  var b = arguments.length > 1 ? arguments[1] : undefined;
  if (b) {
    a = Math.ceil(a);
    b = Math.floor(b);
  } else {
    b = a;
    a = 0;
  }
  return Math.floor(Math.random() * (b - a) + a);
};
var randomPick = function randomPick() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var randomNumber = getRandomInt(0, args.length);
  return args[randomNumber];
};
var dynamicArray = function dynamicArray(count, elementGenerator) {
  return Array.from({
    length: count
  }, function (_, index) {
    return elementGenerator(index);
  });
};
var isNotEmpty = /*#__PURE__*/ramda.complement(ramda.isEmpty);
var notEquals = /*#__PURE__*/ramda.curry(function (x, y) {
  return x !== y;
});
var isNot = notEquals;
var isNotPresent = /*#__PURE__*/ramda.either(ramda.isNil, ramda.isEmpty);
var isPresent = /*#__PURE__*/ramda.complement(isNotPresent);
var notEqualsDeep = /*#__PURE__*/ramda.complement(ramda.equals);
var isNotEqualDeep = notEqualsDeep;

var slugify = function slugify(string) {
  return string.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
  .replace(/&/g, "-and-") // Replace & with 'and'
  .replace(/[^\w-]+/g, "") // Remove all non-word characters
  .replace(/--+/g, "-") // Replace multiple - with single -
  .replace(/^-+/, "") // Trim - from start of text
  .replace(/-+$/, "");
}; // Trim - from end of text

var humanize = function humanize(string) {
  string = string.replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").replace(/([a-z\d])([A-Z])/g, "$1" + " " + "$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + " " + "$2").toLowerCase().trim();
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
};
var snakeToCamelCase = function snakeToCamelCase(string) {
  return string.replace(/(_\w)/g, function (letter) {
    return letter[1].toUpperCase();
  });
};
var camelToSnakeCase = function camelToSnakeCase(string) {
  return string.replace(/[A-Z]/g, function (letter) {
    return "_".concat(letter.toLowerCase());
  });
};
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var truncate = function truncate(string, length) {
  return string.length > length ? ramda.concat(ramda.slice(0, length, string), "...") : string;
};
var _slugify = /*#__PURE__*/nullSafe(slugify);
var _humanize = /*#__PURE__*/nullSafe(humanize);
var _snakeToCamelCase = /*#__PURE__*/nullSafe(snakeToCamelCase);
var _camelToSnakeCase = /*#__PURE__*/nullSafe(camelToSnakeCase);
var _capitalize = /*#__PURE__*/nullSafe(capitalize);
var _truncate = function _truncate(string, length) {
  return ramda.isNil(string) ? string : truncate(string, length);
};

var matchesImpl = function matchesImpl(pattern, object) {
  var __parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : object;
  if (object === pattern) return true;
  if (typeof pattern === "function" && pattern(object, __parent)) return true;
  if (ramda.isNil(pattern) || ramda.isNil(object)) return false;
  if (_typeof(pattern) !== "object") return false;
  return Object.entries(pattern).every(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return matchesImpl(value, object[key], __parent);
  });
};
var transformObjectDeep = function transformObjectDeep(object, keyValueTransformer) {
  var objectPreProcessor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  if (objectPreProcessor && typeof objectPreProcessor === "function") {
    object = objectPreProcessor(object);
  }
  if (Array.isArray(object)) {
    return object.map(function (obj) {
      return transformObjectDeep(obj, keyValueTransformer, objectPreProcessor);
    });
  } else if (object === null || _typeof(object) !== "object") {
    return object;
  }
  return Object.fromEntries(Object.entries(object).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    return keyValueTransformer(key, transformObjectDeep(value, keyValueTransformer, objectPreProcessor));
  }));
};
var keysToCamelCase = function keysToCamelCase(object) {
  return transformObjectDeep(object, function (key, value) {
    return [snakeToCamelCase(key), value];
  });
};
var keysToSnakeCase = function keysToSnakeCase(object) {
  return transformObjectDeep(object, function (key, value) {
    return [camelToSnakeCase(key), value];
  });
};
var serializeKeysToSnakeCase = function serializeKeysToSnakeCase(object) {
  return transformObjectDeep(object, function (key, value) {
    return [camelToSnakeCase(key), value];
  }, function (object) {
    return typeof (object === null || object === void 0 ? void 0 : object.toJSON) === "function" ? object.toJSON() : object;
  });
};
var preprocessForSerialization = function preprocessForSerialization(object) {
  return transformObjectDeep(object, function (key, value) {
    return [key, value];
  }, function (object) {
    return typeof (object === null || object === void 0 ? void 0 : object.toJSON) === "function" ? object.toJSON() : object;
  });
};
var deepFreezeObject = function deepFreezeObject(object) {
  if (object && _typeof(object) === "object" && !Object.isFrozen(object)) {
    Object.keys(object).forEach(function (property) {
      return deepFreezeObject(object[property]);
    });
    Object.freeze(object);
  }
  return object;
};
var matches = /*#__PURE__*/ramda.curry(function (pattern, object) {
  return matchesImpl(pattern, object);
});
var filterNonNull = function filterNonNull(object) {
  return Object.fromEntries(Object.entries(object).filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      v = _ref6[1];
    return !ramda.isNil(v);
  }).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      k = _ref8[0],
      v = _ref8[1];
    return [k, _typeof(v) === "object" && !Array.isArray(v) ? filterNonNull(v) : v];
  }));
};
var _filterNonNull = nullSafe(filterNonNull);

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var removeById = /*#__PURE__*/ramda.curry(function (id, array) {
  return array.filter(function (item) {
    return item.id !== id;
  });
});
var findById = /*#__PURE__*/ramda.curry(function (id, array) {
  return array.find(function (item) {
    return item.id === id;
  });
});
var replaceById = /*#__PURE__*/ramda.curry(function (id, newItem, array) {
  return array.map(function (item) {
    return item.id === id ? newItem : item;
  });
});
var modifyById = /*#__PURE__*/ramda.curry(function (id, modifier, array) {
  return array.map(function (item) {
    return item.id === id ? modifier(item) : item;
  });
});
var findBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return array.find(matches(pattern));
});
var removeBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return array.filter(ramda.complement(matches(pattern)));
});
var replaceBy = /*#__PURE__*/ramda.curry(function (pattern, newItem, array) {
  return array.map(function (item) {
    return matches(pattern, item) ? newItem : item;
  });
});
var modifyBy = /*#__PURE__*/ramda.curry(function (pattern, modifier, array) {
  return array.map(function (item) {
    return matches(pattern, item) ? modifier(item) : item;
  });
});
var existsById = /*#__PURE__*/ramda.curry(function (id, array) {
  return array.some(function (item) {
    return item.id === id;
  });
});
var existsBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return array.some(matches(pattern));
});
var findLastBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return ramda.findLast(matches(pattern), array);
});
var findIndexById = /*#__PURE__*/ramda.curry(function (id, array) {
  return array.findIndex(function (item) {
    return item.id === id;
  });
});
var findIndexBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return array.findIndex(matches(pattern));
});
var findLastIndexBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return ramda.findLastIndex(matches(pattern), array);
});
var filterBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return array.filter(matches(pattern));
});
var countBy = /*#__PURE__*/ramda.curry(function (pattern, array) {
  return ramda.count(matches(pattern), array);
});
var copyKeys = /*#__PURE__*/ramda.curry(function (keyMap, objectArray) {
  return objectArray.map(function (object) {
    var shallowCopy = _objectSpread({}, object);
    for (var source in keyMap) {
      shallowCopy[keyMap[source]] = object[source];
    }
    return shallowCopy;
  });
});
var renameKeys = /*#__PURE__*/ramda.curry(function (keyMap, objectArray) {
  return objectArray.map(function (object) {
    var shallowCopy = _objectSpread({}, object);
    for (var source in keyMap) {
      shallowCopy[keyMap[source]] = object[source];
      delete shallowCopy[source];
    }
    return shallowCopy;
  });
});
var copyKeysDeep = /*#__PURE__*/ramda.curry(function (keyMap, objectArray) {
  var copyKeysSingleObject = function copyKeysSingleObject(object, keyMap) {
    var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : object;
    return _objectSpread(_objectSpread({}, object), ramda.fromPairs(ramda.toPairs(keyMap).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        destination = _ref2[0],
        source = _ref2[1];
      if (typeof source === "function") {
        return [destination, source(object[destination], root)];
      } else if (Array.isArray(source)) {
        return [destination, ramda.path(source, root)];
      } else if (_typeof(source) === "object") {
        return [destination, copyKeysSingleObject(object[destination], source, root)];
      }
      return [destination, object[source]];
    })));
  };
  return objectArray.map(function (object) {
    return copyKeysSingleObject(object, keyMap);
  });
});
var _removeById = /*#__PURE__*/nullSafe(removeById);
var _findById = /*#__PURE__*/nullSafe(findById);
var _replaceById = /*#__PURE__*/nullSafe(replaceById);
var _modifyById = /*#__PURE__*/nullSafe(modifyById);
var _findBy = /*#__PURE__*/nullSafe(findBy);
var _removeBy = /*#__PURE__*/nullSafe(removeBy);
var _replaceBy = /*#__PURE__*/nullSafe(replaceBy);
var _modifyBy = /*#__PURE__*/nullSafe(modifyBy);
var _existsById = /*#__PURE__*/nullSafe(existsById);
var _existsBy = /*#__PURE__*/nullSafe(existsBy);
var _findLastBy = /*#__PURE__*/nullSafe(findLastBy);
var _findIndexById = /*#__PURE__*/nullSafe(findIndexById);
var _findIndexBy = /*#__PURE__*/nullSafe(findIndexBy);
var _findLastIndexBy = /*#__PURE__*/nullSafe(findLastIndexBy);
var _filterBy = /*#__PURE__*/nullSafe(filterBy);
var _countBy = /*#__PURE__*/nullSafe(countBy);
var _copyKeys = /*#__PURE__*/nullSafe(copyKeys);
var _renameKeys = /*#__PURE__*/nullSafe(renameKeys);
var _copyKeysDeep = /*#__PURE__*/nullSafe(copyKeysDeep);

exports._camelToSnakeCase = _camelToSnakeCase;
exports._capitalize = _capitalize;
exports._copyKeys = _copyKeys;
exports._copyKeysDeep = _copyKeysDeep;
exports._countBy = _countBy;
exports._existsBy = _existsBy;
exports._existsById = _existsById;
exports._filterBy = _filterBy;
exports._filterNonNull = _filterNonNull;
exports._findBy = _findBy;
exports._findById = _findById;
exports._findIndexBy = _findIndexBy;
exports._findIndexById = _findIndexById;
exports._findLastBy = _findLastBy;
exports._findLastIndexBy = _findLastIndexBy;
exports._humanize = _humanize;
exports._modifyBy = _modifyBy;
exports._modifyById = _modifyById;
exports._removeBy = _removeBy;
exports._removeById = _removeById;
exports._renameKeys = _renameKeys;
exports._replaceBy = _replaceBy;
exports._replaceById = _replaceById;
exports._slugify = _slugify;
exports._snakeToCamelCase = _snakeToCamelCase;
exports._truncate = _truncate;
exports.camelToSnakeCase = camelToSnakeCase;
exports.capitalize = capitalize;
exports.copyKeys = copyKeys;
exports.copyKeysDeep = copyKeysDeep;
exports.countBy = countBy;
exports.deepFreezeObject = deepFreezeObject;
exports.dynamicArray = dynamicArray;
exports.existsBy = existsBy;
exports.existsById = existsById;
exports.filterBy = filterBy;
exports.filterNonNull = filterNonNull;
exports.findBy = findBy;
exports.findById = findById;
exports.findIndexBy = findIndexBy;
exports.findIndexById = findIndexById;
exports.findLastBy = findLastBy;
exports.findLastIndexBy = findLastIndexBy;
exports.getRandomInt = getRandomInt;
exports.humanize = humanize;
exports.isNot = isNot;
exports.isNotEmpty = isNotEmpty;
exports.isNotEqualDeep = isNotEqualDeep;
exports.isNotPresent = isNotPresent;
exports.isPresent = isPresent;
exports.keysToCamelCase = keysToCamelCase;
exports.keysToSnakeCase = keysToSnakeCase;
exports.matches = matches;
exports.modifyBy = modifyBy;
exports.modifyById = modifyById;
exports.noop = noop;
exports.notEquals = notEquals;
exports.notEqualsDeep = notEqualsDeep;
exports.nullSafe = nullSafe;
exports.preprocessForSerialization = preprocessForSerialization;
exports.randomPick = randomPick;
exports.removeBy = removeBy;
exports.removeById = removeById;
exports.renameKeys = renameKeys;
exports.replaceBy = replaceBy;
exports.replaceById = replaceById;
exports.serializeKeysToSnakeCase = serializeKeysToSnakeCase;
exports.slugify = slugify;
exports.snakeToCamelCase = snakeToCamelCase;
exports.toLabelAndValue = toLabelAndValue;
exports.transformObjectDeep = transformObjectDeep;
exports.truncate = truncate;
//# sourceMappingURL=index.cjs.js.map
