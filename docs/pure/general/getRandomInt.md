## getRandomInt ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L31-L41))

- Curried: false
- Failsafe status: not failsafe

The `getRandomInt` function generates a random integer within a specified range.
If only one argument is provided, it is considered as the upper bound, and the
lower bound is assumed to be 0.

### Arguments:

- `a`: The lower bound of the range. Defaults to 0.
- `b`: The upper bound of the range. Defaults to 9007199254740991.

### Usage:

```js
getRandomInt(); // returns a random integer between 0 and 9007199254740991 (MAX_SAFE_INTEGER)
getRandomInt(10); // returns a random integer between 0 and 10
getRandomInt(1, 5); // returns a random integer between 1 and 5
```
