## copyKeys ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L79-L88))

- Curried: true
- Failsafe status: alternative available

The `copyKeys` function is similar to the [renameKeys](./renameKeys.md) function
but retains both the source and destination keys in the resulting array. For
deep copying of nested objects refer to [copyKeysDeep](./copyKeysDeep.md)
function.

### Arguments:

- `keyMap`: An object where the keys are the original keys of the array of
  objects and values are the new keys that will be added in the object.
  ```js
  {
    sourceKey1: "destinationKey1",
    sourceKey2: "destinationKey2",
  }
  ```
- `objectArray`: The array of objects on which the copy function works.

### Usage:

```js
const data = [
  { id: 1, name: "Tomato", quantity: 10 },
  { id: 2, name: "Potato", quantity: 20 },
];

// copy name to label and id to value
copyKeys({ name: "label", id: "value" }, data);

/*
output: [
  { label: "Tomato", value: 1, id: 1, name: "Tomato", quantity: 10 },
  { label: "Potato", value: 2, id: 2, name: "Potato", quantity: 20 },
];
*/
```

### See also

- [copyKeysDeep](./copyKeysDeep.md)
- [renameKeys](./renameKeys.md)
