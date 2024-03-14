## existsBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L51-L53))

- Curried: true
- Failsafe status: alternative available

The `existsBy` function searches for an item in the array that matches the
provided pattern and returns true if found, or false otherwise.

### Arguments:

- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern
  will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];

existsBy({ name: "Sam" }, array); // true
existsBy({ name: "Harry" }, array); // false
```

### See also

- [existsById](./existsById.md)
