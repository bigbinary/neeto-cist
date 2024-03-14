## findLastIndexBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L67-L69))

- Curried: true
- Failsafe status: alternative available

The `findLastIndexBy` function finds the last index of an item in the array that
matches the provided pattern.

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

findLastIndexBy({ age: 20 }, array); // returns 3
findLastIndexBy({ name: includes("e") }, array); // returns 2
```

### See also

- [findLastBy](./findLastBy.md)
