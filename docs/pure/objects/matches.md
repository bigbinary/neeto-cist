## matches ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L77-L79))

- Curried: true
- Failsafe status: failsafe by default

The `matches` function checks whether the given object matches the given
pattern. It compares the primitive value (int, boolean, string, etc.) in the
object with the corresponding values in the pattern (deeply) and checks if all
conditions (functions) are satisfied for a match.

### Arguments:

- `pattern`: The pattern object to be matched against the data. It's values can
  be either a value or a function.
  - value: Returns true if all the keys in pattern exist in data and the
    primitive values of those keys are identical to the data. Object values are
    compared recursively for inner primitives.
  - function: equality test is performed with corresponding object property. If
    equality fails, the function will be evaluated with the value of the
    corresponding property of the data. If function returns true, it will be
    considered as a match.
- `data`: The data object.

### Usage:

```js
const user = {
  firstName: "Oliver",
  address: { city: "Miami", phoneNumber: "389791382" },
  cars: [{ brand: "Ford" }, { brand: "Honda" }],
};

matches({ firstName: "Oliver" }, user); // true
matches({ address: { city: "Miami" } }, user); // true
matches({ cars: [{ brand: "Ford" }] }, user); // true
matches({ firstName: "Sam" }, user); // false
matches({ address: { country: "US" } }, user); // false
matches({ cars: [{ brand: "Honda" }] }, user); // false
// array index as object key
matches({ cars: { 1: { brand: "Honda" } } }, user); // true
// conditional functions
matches({ cars: arr => arr.length === 2 }, user); // true
// point-free functions with ramda
matches({ firstName: startsWith("O") }, user); // true
```
