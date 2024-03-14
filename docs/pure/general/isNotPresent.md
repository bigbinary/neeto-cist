## isNotPresent ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L57))

- Curried: true
- Failsafe status: failsafe by default

The `isNotPresent` function is a utility that checks if a value is not present.
It combines checks for null and empty values. It is worth noting that we also
have an [isPresent](./isPresent.md) `isPresent` utility function that returns the complement of
`isNotPresent`.

## Arguments

- The value to be checked for presence.

## Usage

```jsx
isNotPresent([]); // returns true
isNotPresent(null); // returns true
isNotPresent(""); // returns true
isNotPresent("Oliver"); // returns false
```
