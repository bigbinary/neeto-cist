## findById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L19-L21))

- Curried: true
- Failsafe status: alternative available

The `findById` function is used to locate an object within an array based on the
provided Id.

### Arguments:

- `id`: The id of object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeFind = 2;

findById(idOfItemToBeFind, array);
// { id: 2, name: "Oliver" }
```

### See also

- [findBy](./findBy.md)
