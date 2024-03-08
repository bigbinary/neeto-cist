## removeBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L35-L37))

- Curried: true
- Failsafe status: alternative available

The `removeBy` function removes all items in the array that match the provided
pattern.

### Arguments:

- `pattern`: The pattern using which the objects will be matched.
- `entityArray`: The array of objects in which the objects with the given
  pattern will be removed.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];

removeBy({ name: "Sam" }, array); // removes Sam
removeBy({ id: 2, address: { pin: 654321 } }, array); // removes Oliver
removeBy({ id: 3 }, array); // does nothing
```

### See also

- [removeById](./removeById.md)
