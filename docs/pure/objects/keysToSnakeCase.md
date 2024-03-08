## keysToSnakeCase ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L51-L52))

- Curried: false
- Failsafe status: failsafe by default

The `keysToSnakeCase` function recursively converts the camel-cased object keys
to snake case.

### Arguments:

- `object`: An object with `camelCase` keys.

### Usage:

```js
keysToSnakeCase({
  address: { city: "Miami", phoneNumber: "389791382" },
  firstName: "Oliver",
  lastName: "Smith",
});
/*
{
  first_name: "Oliver",
  last_name: "Smith",
  address: { city: "Miami", phone_number: "389791382" },
}
*/
```
