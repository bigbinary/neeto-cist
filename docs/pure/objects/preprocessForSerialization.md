## preprocessForSerialization ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L61-L66))

- Curried: false
- Failsafe status: failsafe by default

The `preprocessForSerialization` function creates a ready-to-be-serialized
version of the given object by recursively traversing all the object properties
and replacing them with their JSON serializable versions. This is particularly
helpful when serializing objects that include non-serializable data types, such
as `Date` objects, `dayjs` objects or custom classes.

### Arguments:

- `object`: The object to be JSON serialized.

### Usage:

```js
preprocessForSerialization(dayjs("1980-01-01")); // returns "1980-01-01T00:00:00.000Z"
preprocessForSerialization({
  toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }),
}); // returns { firstName: "Oliver", lastName: "Smith" }
```
