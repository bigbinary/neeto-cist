# Object operations

## matchesImpl

Curried: false
Failsafe status: failsafe by default

Non curried version of [matches](#matches). See matches for curried version.

Checks whether the given object matches the given pattern. Each primitive value (int, boolean, string, etc.) in the pattern should be same as the corresponding value in the object (deeply) and all conditions (functions) should be satisfied for a match.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern object to be matched against the data.
  It's values can be either a value or a function.
  - value: Returns true if all the keys in pattern exist in data and the primitive values of those keys are identical to the data. Object values are compared recursively for inner primitives.
  - function: equality test is performed with corresponding object property. If equality fails, the function will be evaluated with the value of the corresponding property of the data. If function returns true, it will be considered as a match.
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

</details>

## transformObjectDeep

Curried: false
Failsafe status: failsafe by default

Passes each key and value of the given object (recursively) to the given
transformer function. Reconstructs an object of the same hierarchy with the key
value pair the transformer function returns.

<details>
<summary>(click for more)</summary>

### Arguments:
- `object`: The object or array to be modified.
- `keyValueTransforme`: The transformer function that receives the key and value as parameters. It should return a key-value pair.
- `objectPreProcessor`: An object transformer which will be executed on every value (including the supplied object itself) before any processing is done to it. (optional)

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

</details>

## preprocessForSerialization

Curried: false
Failsafe status: failsafe by default

Creates a ready-to-be-serialized version of the given object by recursively
going to all the object properties and replacing it with its JSON serializable
version.

This is helpful when serializing `Date` objects, `dayjs` objects etc.

<details>
<summary>(click for more)</summary>

### Arguments:
- `object`: The object to be JSON serialized.

### Usage:

```js
preprocessForSerialization(dayjs("1980-01-01")); // returns "1980-01-01T00:00:00.000Z"
preprocessForSerialization({
  toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }),
}); // returns { firstName: "Oliver", lastName: "Smith" }
```

</details>

## keysToCamelCase

Curried: false
Failsafe status: failsafe by default

Recursively converts the snake cased object keys to camel case

<details>
<summary>(click for more)</summary>

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

</details>

## keysToSnakeCase

Curried: false
Failsafe status: failsafe by default

Recursively converts the camel cased object keys to snake case.

<details>
<summary>(click for more)</summary>

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

</details>

## serializeKeysToSnakeCase

Curried: false
Failsafe status: failsafe by default

Recursively converts the camel cased object keys to snake case. It will gracefully handle special objects like `Date`, `dayjs` instance etc.
While converting, this function checks if the function named `toJSON` is present in the value (if the value is an object) and if found, it calls the function and uses the return value for further processing.

<details>
<summary>(click for more)</summary>

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

In the above example, the value of `dob` is an date object and has `toJSON` method present in it. The `toJSON` method returns the date in ISO format which will be used for further processing instead of recursively converting the original date object.

</details>

## deepFreezeObject

Curried: false
Failsafe status: failsafe by default

To make an object immutable, recursively freeze each property which is of type object.

<details>
<summary>(click for more)</summary>

### Arguments:
- `object`: The object to be deep freezed.

### Usage:

```js
const user = {
  address: { city: "Miami", phoneNumber: "389791382" },
  firstName: "Oliver",
};
deepFreezeObject(user);

user.address.phoneNumber = "123456789"; // fails silently in non-strict mode
user.lastName = "Smith"; // fails silently in non-strict mode

console.log(user);

/*
{
  address: { city: "Miami", phoneNumber: "389791382" },
  firstName: "Oliver",
};
*/
```

The assignment operation will throw the error only when we execute it in strict mode, in non-strict mode it will fail silently.

<!-- prettier-ignore -->
```js
"use strict"; user.address.phoneNumber = "123456789";
/*
Cannot assign to read only property 'phoneNumber' of object '#<Object>
*/

"use strict"; user.lastName = "Smith";
/*
Cannot add property lastName, object is not extensible
*/
```

</details>

## matches

Curried: true
Failsafe status: failsafe by default

Checks whether the given object matches the given pattern. Each primitive value (int, boolean, string, etc.) in the pattern should be same as the corresponding value in the object (deeply) and all conditions (functions) should be satisfied for a match.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern object to be matched against the data.
  It's values can be either a value or a function.
  - value: Returns true if all the keys in pattern exist in data and the primitive values of those keys are identical to the data. Object values are compared recursively for inner primitives.
  - function: equality test is performed with corresponding object property. If equality fails, the function will be evaluated with the value of the corresponding property of the data. If function returns true, it will be considered as a match.
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

</details>

## filterNonNull

Curried: false
Failsafe status: alternative available

A function that accepts an object and returns a new object with only the
properties that are not `null` or `undefined`. This won't work well for arrays.

<details>
<summary>(click for more)</summary>

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

</details>
