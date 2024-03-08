## isNotEmpty ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L52))

- Curried: false
- Failsafe status: failsafe by default

The `isNotEmpty` returns `true` if the given value is not empty (includes
strings, arrays, objects) and `false` otherwise. It provides the opposite
behavior of checking if a value is empty, similar to the isEmpty function in
Ramda.

### Arguments:

- The value to be checked. Accepts strings, arrays or objects

### Usage:

```js
isNotEmpty(""); // returns false
isNotEmpty(["a"]); // returns true
isNotEmpty({ name: "Oliver" }); //return true
```
