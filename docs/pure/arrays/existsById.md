## existsById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L47-L49))

- Curried: true
- Failsafe status: alternative available

The `existsById` function searches for an item in the provided array using the
given id.

### Arguments:

- `id`: The id of the object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];

existsById(2, array); // true Oliver's id is 2
existsById(5, array); // false no one has an id of 5
```

### See also

- [existsBy](./existsBy.md)
