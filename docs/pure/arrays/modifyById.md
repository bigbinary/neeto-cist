## modifyById ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L27-L29))

- Curried: true
- Failsafe status: alternative available

The `modifyById` function applies a modifier function to the item with the
specified id in an array and returns a new array with the modified item in the
same index.

### Arguments:

- `id`: The id of the object to be modified.
- `modifier`: A modifier function to modify required properties of the object.
- `entityArray`: The array of objects in which the object with given id will be
  modified using the modifier function.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeModified = 2;
const modifier = item => assoc("name", item.name.toUpperCase(), item);

modifyById(idOfItemToBeModified, modifier, array);
/*
[{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
*/
```

### See also

- [modifyBy](./modifyBy.md)
