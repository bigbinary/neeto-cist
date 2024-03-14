## findIndexById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L59-L61))

- Curried: true
- Failsafe status: alternative available

The `findIndexById` function is used to find the index of an item within an
array of items based on the `id` property of the entities within it.

### Arguments:

- `id`: The id of object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: "1001", name: "Sam" },
  { id: "2001", name: "Oliver" },
];

findIndexById("2001", array); // returns 1
findIndexById("1001", array); // returns 0
findIndexById("3001", array); // returns -1
```

### See also

- [findIndexBy](./findIndexBy.md)
