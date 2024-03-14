## toLabelAndValue ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L28))

- Curried: false
- Failsafe status: failsafe by default

The `toLabelAndValue` function takes a string as an argument and returns an
object with keys "label" and "value." It is often used to transform a string
into an object with specific key-value pairs.

### Arguments:

- `string`: A string that needs to be converted to an object.

### Usage:

```js
toLabelAndValue("test");

// output: {label: "test", value: "test"}
```
