## keysToCamelCase ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L48-L49))

- Curried: false
- Failsafe status: failsafe by default

The `keysToCamelCase` function recursively converts the snake-cased object keys
to camel case.

### Arguments:

- `object`: An object with `snake_case` keys.

### Usage:

```js
keysToCamelCase({
  first_name: "Oliver",
  last_name: "Smith",
  address: { city: "Miami", phone_number: "389791382" },
});
/*
{
  address: {city: 'Miami', phoneNumber: '389791382'},
  firstName: "Oliver",
  lastName: "Smith",
}
*/
```
