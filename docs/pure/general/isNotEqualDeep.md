## isNotEqualDeep ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L60-L61))

- Alias: notEqualsDeep
- Curried: false
- Failsafe status: failsafe by default

The `isNotEqualDeep` function returns `true` if the given values are not equal,
considering deep equality. It checks for deep inequality between objects or
arrays.

### Arguments:

- The two values to be checked for equality. It can also include deeply nested
  objects.

### Usage:

```js
const object1 = {
  a: 1,
  b: { c: 3 },
};

const object2 = {
  a: 1,
  b: { c: 2 },
};

isNotEqualsDeep(object1, object2); //returns true
notEqualsDeep(object1, object2); //returns true
```
