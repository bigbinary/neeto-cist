## transformObjectDeep ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L20-L46))

- Curried: false
- Failsafe status: failsafe by default

The `transformObjectDeep` function passes each key and value of the given object
(recursively) to the provided transformer function. It reconstructs an object of
the same hierarchy with the key-value pairs that the transformer function
returns.

### Arguments:

- `object`: The object or array to be modified.
- `keyValueTransforme`: The transformer function that receives the key and value
  as parameters. It should return a key-value pair.
- `objectPreProcessor`: An object transformer which will be executed on every
  value (including the supplied object itself) before any processing is done to
  it. (optional)

Usage:

```js
transformObjectDeep(
  {
    name: "Oliver",
    email: "oliver@example.com",
    address: { street: "First street", pin: 123456 },
  },
  (key, value) => [key.toUpperCase(), value]
);
/*
output: {
  NAME: "Oliver",
  EMAIL: "oliver@example.com",
  ADDRESS: { STREET: "First street", PIN: 123456 },
}
*/

transformObjectDeep(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  (key, value) => [key, value],
  item => (Array.isArray(item) ? item.slice(1) : item)
);
/*
output: [[5, 6], [8, 9]]
*/
```
