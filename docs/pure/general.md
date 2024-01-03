# General Functions

## nullSafe

Curried: false
Failsafe status: failsafe by default

This function takes a function as an argument and returns a curried version of the function.

<details>
<summary>{click for more}</summary>

### Arguments:
  - `func`: A function that needs to be curried.

### Usage:
```js
const add = (a, b) => a + b;
nullSafe(add)(1)(2);
// Output: 3
```

</details>

## noop

Curried: false
Failsafe status: failsafe by default

A "no-operation" function, which does nothing and returns nothing (`undefined`).

## toLabelAndValue

Curried: false
Failsafe status: failsafe by default

This function takes a string as an argument and returns an object with keys
"label" and "value".

<details>
<summary>(click for more)</summary>

### Arguments:
- `string`: A string that needs to be converted to an object.

### Usage:

```js
toLabelAndValue("test");

// output: {label: "test", value: "test"}
```

</details>

## getRandomInt

Curried: false
Failsafe status: not failsafe

This function is used to generate a random integer in the given range. If only 1 argument is provided, it is considered as the upper bound.

<details>
<summary>(click for more)</summary>

### Arguments:
- `a`: The lower bound of the range. Defaults to 0.
- `b`: The upper bound of the range. Defaults to 9007199254740991.

### Usage:

```js
getRandomInt(); // returns a random integer between 0 and 9007199254740991 (MAX_SAFE_INTEGER)
getRandomInt(10); // returns a random integer between 0 and 10
getRandomInt(1, 5); // returns a random integer between 1 and 5
```

</details>

## randomPick

Curried: false
Failsafe status: not failsafe

This function accepts a variable number of arguments and returns a random
element from the list of arguments.

<details>
<summary>(click for more)</summary>

### Arguments:
- Any number of arguments.

### Usage:

```js
randomPick("arg1", "arg2", "arg3", "arg4", "arg5");

// output: a random element from the list "arg1", "arg2", "arg3", "arg4" and "arg5"
```

</details>

## dynamicArray

Curried: false
Failsafe status: not failsafe

Builds an array of given length using a given function to generate each element.
The function will get index as parameter and is expected to return the element
corresponding to that index.

<details>
<summary>(click for more)</summary>

### Arguments:
- `count`: The length of the array to be generated.
- `elementGenerator`: The function that returns the element to be generated for that index. This function will get index as a parameter.

### Usage:

```js
dynamicArray(3, index => `option ${index + 1}`);

// output: ["option 1", "option 2", "option 3"]
```

</details>

## isNotEmpty

Curried: false
Failsafe status: failsafe by default

Returns `true` if the given value is not empty (includes strings, arrays,
objects). False otherwise. (the opposite of `isEmpty` in ramda)

<details>
<summary>(click for more)</summary>

### Arguments:
- The value to be checked. Accepts strings, arrays or objects

### Usage:

```js
isNotEmpty(""); // returns false
isNotEmpty(["a"]); // returns true
isNotEMpty({ name: "Oliver" }); //return true
```

</details>

## isNot (alias notEquals)

Curried: false
Failsafe status: failsafe by default

Returns `true` if the given values (or references) are not equal. False
otherwise. (the opposite of `Object.is()`)

<details>
<summary>(click for more)</summary>

### Arguments:
- The two values to be checked for equality.

### Usage:

```js
isNot("Oliver", "Sam"); // returns true
isNot("Oliver", "Oliver"); // returns false
```

</details>

## isNotPresent

Curried: false
Failsafe status: failsafe by default

Returns `true` if value is not present. Returns false otherwise.

<details>
<summary>(click for more)</summary>

### Arguments:
  - One value to be checked

### Usage:
```js
isNotPresent(null);
// Output: true
```
</details>

## isPresent

Curried: false
Failsafe status: failsafe by default

Returns `true` if value is present. Returns false otherwise.

<details>
<summary>(click for more)</summary>

### Arguments:
  - One value to be checked

### Usage:
```js
isPresent(null);
// Output: false
```
</details>

## isNotEqualDeep (alias notEqualsDeep)

Curried: false
Failsafe status: failsafe by default

Returns `true` if the given values not equal (deeply). False otherwise.

<details>
<summary>(click for more)</summary>

### Arguments:
- The two values to be checked for equality. It can also include deeply nested objects.

### Usage:

```js
const object1 = {
  a: 1,
  b: { c: 3 }
}

const object2 = {
  a: 1,
  b: { c: 2 }
}
isNotEqualsDeep(object1, object2); //returns true
```

</details>

## modifyWithImmer

Curried: true
Failsafe status: Not failsafe

Receives a state and a modifier function. Returns modified state. Original state object is left untouched.

Modifier function receives draft state as the argument. We can use mutating methods like `push`, `pop`, `splice`, `delete` without any issues on that parameter.

<details>
<summary>(click for more)</summary>

### Arguments:
  - `modifier`: The modifier function.
  - `data`: The state object.

### Usage:
```js
const modifier = (state) => state.names.push("Tom");
const data = { names: ["Oliver", "Sam", "Jon"] };
const updatedState = modifyWithImmer(modifier, data);

console.log(data);
// { names: ["Oliver", "Sam", "Jon"] }
console.log(updatedState);
// { names: ["Oliver", "Sam", "Jon", "Tom"] }
```
</details>
