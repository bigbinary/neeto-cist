## modifyBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L43-L45))

- Curried: true
- Failsafe status: alternative available

The `modifyBy` function modifies all items in the array that match the provided
pattern using the given modifier function.

### Arguments:

- `pattern`: The pattern using which the objects will be matched.
- `modifier`: A modifier function to modify required properties of the matched
  objects.
- `entityArray`: The array of objects in which the objects with given pattern
  will be modified using the modifier function.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];
const modifier = item => assoc("name", item.name.toUpperCase(), item);

modifyBy({ name: "Oliver" }, modifier, array);
/*
[{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 */
```

### See also

- [modifyById](./modifyById.md)
