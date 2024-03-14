## renameKeys ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L90-L100))

- Curried: true
- Failsafe status: alternative available

The `renameKeys` function renames specified keys in each object of an array
while keeping their values the same. It creates a new instance and does not
mutate the original array.

### Arguments:

- `keyMap`: An object where the keys are the original keys of the array of
  objects and values are the keys to which it should be renamed.
  ```js
  {
    sourceKey1: "destinationKey1",
    sourceKey2: "destinationKey2",
  }
  ```
- `entityArray`: The array of objects on which the rename function works.

### Usage:

```js
const data = [
  { id: 1, name: "Tomato", quantity: 10 },
  { id: 2, name: "Potato", quantity: 20 },
];

// rename name to label and id to value
renameKeys({ name: "label", id: "value" }, data);

/*
output: [
  { label: "Tomato", value: 1, quantity: 10 },
  { label: "Potato", value: 2, quantity: 20 },
];
*/
```

### See also

- [copyKeys](./copyKeys.md)
- [copyKeysDeep](./copyKeysDeep.md)
