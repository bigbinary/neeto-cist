## filterNonNull ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L81-L89))

- Curried: false
- Failsafe status: alternative available

The `filterNonNull` function accepts an object and returns a new object with
only the properties that are not `null` or `undefined`. It filters out
properties with these values, creating a new object with only the non-null and
non-undefined properties.

### Arguments:

- `object`: An object which can contain `null` or `undefined` values.

### Usage:

```js
filterNonNull({
  firstName: "Oliver",
  lastName: null,
  phoneNumbers: { home: undefined, office: "1234567890" },
});

/*
{
  firstName: "Oliver",
  phoneNumbers: { office: "1234567890" },
}
*/
```
