## replaceBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L39-L41))

- Curried: true
- Failsafe status: alternative available

The `replaceBy` function replaces all items in the array that match the provided
pattern with the given item.

### Arguments:

- `pattern`: The pattern using which the objects will be matched.
- `newItem`: The object with which the matched objects need to be replaced.
- `entityArray`: The array of objects in which the objects with the given
  pattern will be replaced.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];
const newItem = { id: 2, name: "John" };

replaceBy({ name: "Oliver" }, newItem, array);
/*
[{id: 1, name: "Sam"}, {id: 2, name: "John"}]
 */
```

### See also

- [replaceById](./replaceById.md)
