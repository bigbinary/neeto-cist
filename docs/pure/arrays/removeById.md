## removeById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L15-L17))

- Curried: true
- Failsafe status: alternative available

The `removeById` function generates a new array with the item possessing the
specified id removed.

### Arguments:

- `id`: The id of object to be removed.
- `entityArray`: The array of objects from which the object with given id will
  be removed.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeRemoved = 2;

removeById(idOfItemToBeRemoved, array);
// [{ id: 1, name: "Sam" }]
```

### See also

- [removeBy](./removeBy.md)
