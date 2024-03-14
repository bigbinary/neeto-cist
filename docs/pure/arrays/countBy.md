## countBy ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/arrays.js#L75-L77))

- Curried: true
- Failsafe status: alternative available

The `countBy` function counts the number of items in an array that match the
provided pattern.

### Arguments:

- `pattern`: The pattern using which objects will be matched.
- `entityArray`: The array of objects from which the objects with the given
  pattern will be counted.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

countBy({ age: 20 }, array); // returns 2
countBy({ age: gt(__, 40) }, array); // returns 1
countBy({ age: 50 }, array); // returns 0
```
