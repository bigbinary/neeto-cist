## copyKeysDeep ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L102-L121))

- Curried: true
- Failsafe status: alternative available

The `copyKeysDeep` function is an advanced version of the
[copyKeys](./copyKeys.md) function. It supports deep copying with nested objects
and offers flexibility in specifying key mappings for the copy operation.

### Arguments:

- `keyMap`: The key mapping object which supports object nesting. The value can
  be of three types:

  - string: the value of the source key in the object of same nesting will be
    copied.
    ```js
    {
      destinationKey: "sourceKey",
      {
        destinationKey: "sourceKeyInNestedObject",
      },
    }
    ```
  - array: to pass an absolute path of the source keys to the object that needs
    to be copied.
    ```js
    {
      destinationKey: ["path", "to", "sourceKeyInNestedObject"];
    }
    ```
  - function: the function will be called with the value corresponding to the
    destination key in the source object and the result will be copied. It will
    also get the root object as the second argument.
    ```js
    { destinationKey: (value, root) => value + root.id, }
    ```

- `objectArray`: The array of objects on which the copyKeysDeep object works.

### Usage:

```js
const data = [
  {
    id: 1,
    name: "Tomato",
    quantity: 10,
    user: { id: 1, name: "John", bonusQty: 3 },
    address: { street: "First street", pin: 101283 },
  },
  {
    id: 2,
    name: "Potato",
    quantity: 20,
    user: { id: 2, name: "Jane", bonusQty: 2 },
    address: { street: "Second street", pin: 998472 },
  },
];

// Create a new array to hold the transformed objects
copyKeysDeep(
  {
    label: "name",
    quantity: (qty, root) => qty + root.user.bonusQty,
    user: { pin: ["address", "pin"] },
  },
  data
);

/*
output: [
  {
    label: "Tomato", // label copied
    id: 1,
    name: "Tomato",
    quantity: 13, // quantity updated
    user: { pin: 101283, id: 1, name: "John", bonusQty: 3 }, // pin copied
    address: { street: "First street", pin: 101283 },
  },
  {
    label: "Potato",
    id: 2,
    name: "Potato",
    quantity: 22,
    user: { id: 2, name: "Jane", bonusQty: 2 },
    address: { pin: 998472, street: "Second street" },
  },
];
*/
```

### See also

- [copyKeys](./copyKeys.md)
- [renameKeys](./renameKeys.md)
