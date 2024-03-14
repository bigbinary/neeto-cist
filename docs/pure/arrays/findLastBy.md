## findLastBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L55-L57))

- Curried: true
- Failsafe status: alternative available

The `findLastBy` function finds the last item in the array that matches the
provided pattern.

### Arguments:

- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern
  will be searched.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

findLastBy({ age: 20 }, array); // { name: "Smith", age: 20 }
findLastBy({ name: includes("e") }, array); // { name: "George", age: 41 }
```

### See also

- [findLastIndexBy](./findLastIndexBy.md)
