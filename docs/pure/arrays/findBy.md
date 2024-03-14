## findBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L31-L33))

- Curried: true
- Failsafe status: alternative available

The `findBy` function locates the first item in the array that matches the
provided pattern.

### Arguments:

- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern
  will be found.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
];

findBy({ name: "Sam" }, array); // returns object corresponding to Sam
findBy({ id: 2, address: { pin: 654321 } }, array); // returns object corresponding to Oliver
findBy({ id: 3 }, array); // returns undefined
```

### See also

- [findById](./findById.md)
