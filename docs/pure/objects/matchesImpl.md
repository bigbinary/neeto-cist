## matchesImpl ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L6-L18))

- Curried: false
- Failsafe status: failsafe by default

Non curried version of [matches](./matches.md). See matches for curried version.

The `matchesImpl` function checks whether the given object matches the given pattern. Each primitive value (int, boolean, string, etc.) in the pattern should be same as the corresponding value in the object (deeply) and all conditions (functions) should be satisfied for a match.

### Arguments:

- `pattern`: The pattern object to be matched against the data.
  It's values can be either a value or a function.
  - `value`: Returns true if all the keys in pattern exist in data and the primitive values of those keys are identical to the data. Object values are compared recursively for inner primitives.
  - `function`: equality test is performed with corresponding object property. If equality fails, the function will be evaluated with the value of the corresponding property of the data. If function returns true, it will be considered as a match.
- `data`: The data object.

### Usage:

```js
const user = {
  firstName: "Oliver",
  address: { city: "Miami", phoneNumber: "389791382" },
  cars: [{ brand: "Ford" }, { brand: "Honda" }],
};

matchesImpl({ firstName: "Oliver" }, user); // true
matchesImpl({ address: { city: "Miami" } }, user); // true
matchesImpl({ cars: [{ brand: "Ford" }] }, user); // true
matchesImpl({ firstName: "Sam" }, user); // false
matchesImpl({ address: { country: "US" } }, user); // false
matchesImpl({ cars: [{ brand: "Honda" }] }, user); // false
// array index as object key
matchesImpl({ cars: { 1: { brand: "Honda" } } }, user); // true
// conditional functions
matchesImpl({ cars: arr => arr.length === 2 }, user); // true
// point-free functions with ramda
matchesImpl({ firstName: startsWith("O") }, user); // true
```
