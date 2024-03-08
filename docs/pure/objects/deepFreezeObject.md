## deepFreezeObject ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/objects.js#L68-L75))

- Curried: false
- Failsafe status: failsafe by default

The `deepFreezeObject` function is used to make an object immutable by
recursively freezing each property that is of type object. Freezing an object
prevents any changes to its properties, making it effectively immutable.

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

The assignment operation will throw the error only when we execute it in strict
mode, in non-strict mode it will fail silently.

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
