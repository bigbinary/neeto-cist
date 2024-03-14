## replaceById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L23-L25))

- Curried: true
- Failsafe status: alternative available

The `replaceById` function returns a new array with the item having the
specified id replaced by the provided object.

### Arguments:

- `id`: The id of the object to be replaced.
- `newItem`: The new object to replace.
- `entityArray`: The array of objects in which the object with given id will be
  replaced with the given object.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeReplaced = 2;
const newItem = { id: 3, name: "John" };

replaceById(idOfItemToBeReplaced, newItem, array);
/*
[{ id: 1, name: "Sam" }, { id: 3, name: "John" }]
*/
```

### See also

- [replaceBy](./replaceBy.md)
