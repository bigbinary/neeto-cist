## nullSafe ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L18-L24))

- Curried: false
- Failsafe status: failsafe by default

The `nullSafe` function takes a function as an argument and returns a curried version of the function. It ensures that the last argument passed to the curried function is not null or undefined before invoking the original function `func`.

## Arguments

- `func`: A function that needs to be curried.

## Usage

```js
const add = (a, b) => a + b;
nullSafe(add)(1)(2);
// Output: 3
```
