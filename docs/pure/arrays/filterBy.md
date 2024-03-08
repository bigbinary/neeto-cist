## filterBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L71-L73))

- Curried: true
- Failsafe status: alternative available

The `filterBy` function filters an array of items based on pattern matching.

### Arguments:

- `pattern`: The pattern using which objects will be matched.
- `entityArray`: The array of objects from which the objects with the given
  pattern will be returned.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

filterBy({ age: 20 }, array); // [{ name: "Oliver", age: 20 }, { name: "Smith", age: 20 }]
filterBy({ age: gt(__, 40) }, array); // [{ name: "George", age: 41 }]
filterBy({ age: 50 }, array); // []
```
