## isPresent ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L58))

- Curried: true
- Failsafe status: failsafe by default

The `isPresent` function is a utility that checks if a value is present.
It combines checks for null and empty values. It is worth noting that we also
have an [isNotPresent](./isNotPresent.md) utility function that returns the complement of
`isPresent`.

## Arguments

- The value to be checked for presence.

## Usage

```jsx
isPresent([]); // returns false
isPresent(null); // returns false
isPresent(""); // returns false
isPresent("Oliver"); // returns true
```
