## serializeKeysToSnakeCase ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L54-L59))

- Curried: false
- Failsafe status: failsafe by default

The `serializeKeysToSnakeCase` function recursively converts the camel-cased
object keys to snake case. It gracefully handles special objects like `Date` and
`dayjs` instances. Additionally, while converting, this function checks if the
value being processed is an object and if it has a `toJSON` function. If the
`toJSON` function is present, it calls the function and uses the return value
for further processing.

### Arguments:

- `object`: An object with `camelCase` keys to be converted and serialized.

### Usage:

Example 1:

```js
serializeKeysToSnakeCase({
  name: { toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }) },
  phoneNumber: "389791382",
});

/*
{
  name: { first_name: "Oliver", last_name: "Smith" },
  phone_number: "389791382",
}
*/
```

Example 2: (Real world example)

```js
serializeKeysToSnakeCase({
  address: { city: "Miami", phoneNumber: "389791382" },
  firstName: "Oliver",
  lastName: "Smith",
  dob: new Date("1980-01-01"),
});

/*
{
  first_name: "Oliver",
  last_name: "Smith",
  address: { city: "Miami", phone_number: "389791382" },
  dob: "1980-01-01T00:00:00.000Z",
}
*/
```

In the above example, the value of `dob` is an date object and has `toJSON`
method present in it. The `toJSON` method returns the date in ISO format which
will be used for further processing instead of recursively converting the
original date object.
