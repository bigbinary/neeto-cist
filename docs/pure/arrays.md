# Array operations

## findById

Curried: true
Failsafe status: alternative available

Find an object having the given id from an array.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeFind = 2;

findById(idOfItemToBeFind, array);
// { id: 2, name: "Oliver" }
```

</details>

## findIndexById

Curried: true
Failsafe status: alternative available

Find an index of an item from an array of items based on the `id` property of
entities inside it.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: "1001", name: "Sam" },
  { id: "2001", name: "Oliver" },
];

findIndexById("2001", array); // returns 1
findIndexById("1001", array); // returns 0
findIndexById("3001", array); // returns -1
```

</details>

## removeById

Curried: true
Failsafe status: alternative available

Return a new array with the item with the given `id` removed.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of object to be removed.
- `entityArray`: The array of objects from which the object with given id will be removed.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeRemoved = 2;

removeById(idOfItemToBeRemoved, array);
// [{ id: 1, name: "Sam" }]
```

</details>

## replaceById

Curried: true
Failsafe status: alternative available

Returns a new array with the item having the given id is replaced with the given
object.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of the object to be replaced.
- `newItem`: The new object to replace.
- `entityArray`: The array of objects in which the object with given id will be replaced with the given object.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeReplaced = 2;
const newItem = { id: 3, name: "John" };

replaceById(idOfItemToBeReplaced, newItem, array);
/*
[{ id: 1, name: "Sam" }, { id: 3, name: "John" }]
*/
```

</details>

## modifyById

Curried: true
Failsafe status: alternative available

Applies the modifier function on the item having the given id in an array and
returns a new array with the return value of the modifier function in the index
of the match.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of the object to be modified.
- `modifier`: A modifier function to modify required properties of the object.
- `entityArray`: The array of objects in which the object with given id will be modified using the modifier function.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];
const idOfItemToBeModified = 2;
const modifier = item => assoc("name", item.name.toUpperCase(), item);

modifyById(idOfItemToBeModified, modifier, array);
/*
[{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
*/
```

</details>

## existsById

Curried: true
Failsafe status: alternative available

Search for an item in the given array using the given id.

<details>
<summary>(click for more)</summary>

### Arguments:
- `id`: The id of the object to be searched.
- `entityArray`: The array of objects in which the given id will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Oliver" },
];

existsById(2, array); // true Oliver's id is 2
existsById(5, array); // false no one has an id of 5
```

</details>

## findBy

Curried: true
Failsafe status: alternative available

Find the first item that matches the given pattern from an array.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern will be found.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
];

findBy({ name: "Sam" }, array); // returns object corresponding to Sam
findBy({ id: 2, address: { pin: 654321 } }, array); // returns object corresponding to Oliver
findBy({ id: 3 }, array); // returns undefined
```

</details>

## findIndexBy

Curried: true
Failsafe status: alternative available

Find the index of an item that matches the pattern from the given array.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
];

findIndexBy({ name: "Sam" }, array); // returns 0
findIndexBy({ id: 2, address: { pin: 654321 } }, array); // returns 1
findIndexBy({ id: 3 }, array); // returns -1
```

</details>

## findLastBy

Curried: true
Failsafe status: alternative available

Find the last item that matches the given pattern.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern will be searched.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

findLastBy({ age: 20 }, array); // { name: "Smith", age: 20 }
findLastBy({ name: includes("e") }, array); // { name: "George", age: 41 }
```

</details>

## findLastIndexBy

Curried: true
Failsafe status: alternative available

Find the last index of item that matches the given pattern.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern will be searched.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

findLastIndexBy({ age: 20 }, array); // returns 3
findLastIndexBy({ name: includes("e") }, array); // returns 2
```

</details>

## removeBy

Curried: true
Failsafe status: alternative available

Remove all items that matches the given pattern from an array of items.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which the objects will be matched.
- `entityArray`: The array of objects in which the objects with the given pattern will be removed.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];

removeBy({ name: "Sam" }, array); // removes Sam
removeBy({ id: 2, address: { pin: 654321 } }, array); // removes Oliver
removeBy({ id: 3 }, array); // does nothing
```

</details>

## replaceBy

Curried: true
Failsafe status: alternative available

Replace all items that matches the given pattern with the given item.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which the objects will be matched.
- `newItem`: The object with which the matched objects need to be replaced.
- `entityArray`: The array of objects in which the objects with the given pattern will be replaced.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];
const newItem = { id: 2, name: "John" };

replaceBy({ name: "Oliver" }, newItem, array);
/*
[{id: 1, name: "Sam"}, {id: 2, name: "John"}]
 */
```

</details>

## modifyBy

Curried: true
Failsafe status: alternative available

Modify all items using modifier function based on a pattern passed as an
argument to the function.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which the objects will be matched.
- `modifier`: A modifier function to modify required properties of the matched objects.
- `entityArray`: The array of objects in which the objects with given pattern will be modified using the modifier function.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];
const modifier = item => assoc("name", item.name.toUpperCase(), item);

modifyBy({ name: "Oliver" }, modifier, array);
/*
[{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 */
```

</details>

## existsBy

Curried: true
Failsafe status: alternative available

Search for an item that matches the given pattern in an array. Returns true if
found, false otherwise.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which an object will be matched.
- `entityArray`: The array of objects in which the object with the given pattern will be searched.

### Usage:

```js
const array = [
  { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
  { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
];

existsBy({ name: "Sam" }, array); // true
existsBy({ name: "Harry" }, array); // false
```

</details>

## filterBy

Curried: true
Failsafe status: alternative available

Filter an array of items based on pattern matching.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which objects will be matched.
- `entityArray`: The array of objects from which the objects with the given pattern will be returned.

### Usage:


```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

filterBy({ age: 20 }, array); // [{ name: "Oliver", age: 20 }, { name: "Smith", age: 20 }]
filterBy({ age: gt(__, 40) }, array); // [{ name: "George", age: 41 }]
filterBy({ age: 50 }, array); // []
```

</details>

## countBy

Curried: true
Failsafe status: alternative available

Counts an array of items for items that matches the given pattern.

<details>
<summary>(click for more)</summary>

### Arguments:
- `pattern`: The pattern using which objects will be matched.
- `entityArray`: The array of objects from which the objects with the given pattern will be counted.

### Usage:

```js
const array = [
  { name: "Oliver", age: 20 },
  { name: "Sam", age: 40 },
  { name: "George", age: 41 },
  { name: "Smith", age: 20 },
];

countBy({ age: 20 }, array); // returns 2
countBy({ age: gt(__, 40) }, array); // returns 1
countBy({ age: 50 }, array); // returns 0
```

</details>

## renameKeys

Curried: true
Failsafe status: alternative available

Renames the specified keys keeping its value the same for all elements of an
array. This creates a new instance and doesn't mutate the array.

<details>
<summary>(click for more)</summary>

### Arguments:
- `keyMap`: An object where the keys are the original keys of the array of objects and values are the keys to which it should be renamed.
  ```js
  {
    sourceKey1: "destinationKey1",
    sourceKey2: "destinationKey2",
  }
  ```
- `entityArray`: The array of objects on which the rename function works.

### Usage:

```js
const data = [
  { id: 1, name: "Tomato", quantity: 10 },
  { id: 2, name: "Potato", quantity: 20 },
];

// rename name to label and id to value
renameKeys({ name: "label", id: "value" }, data);

/*
output: [
  { label: "Tomato", value: 1, quantity: 10 },
  { label: "Potato", value: 2, quantity: 20 },
];
*/
```

</details>

## copyKeys

Curried: true
Failsafe status: alternative available

Similar to `renameKeys` function, but it keeps both the source and destination
keys in the resulting array.

<details>
<summary>(click for more)</summary>

### Arguments:
- `keyMap`: An object where the keys are the original keys of the array of objects and values are the new keys that will be added in the object.
  ```js
  {
    sourceKey1: "destinationKey1",
    sourceKey2: "destinationKey2",
  }
  ```
- `objectArray`: The array of objects on which the copy function works.

### Usage:

```js
const data = [
  { id: 1, name: "Tomato", quantity: 10 },
  { id: 2, name: "Potato", quantity: 20 },
];

// copy name to label and id to value
copyKeys({ name: "label", id: "value" }, data);

/*
output: [
  { label: "Tomato", value: 1, id: 1, name: "Tomato", quantity: 10 },
  { label: "Potato", value: 2, id: 2, name: "Potato", quantity: 20 },
];
*/
```

</details>

## copyKeysDeep

Curried: true
Failsafe status: alternative available

A more advanced version of `copyKeys` function. It supports nested objects. It
has a different structure for the key mapping to support nesting.

<details>
<summary>(click for more)</summary>

### Arguments:

- `keyMap`: The key mapping object which supports object nesting.
  The value can be of three types:
  - string: the value of the source key in the object of same nesting will be copied.
    ```js
    {
      destinationKey: "sourceKey",
      {
        destinationKey: "sourceKeyInNestedObject",
      },
    }
    ```
  - array: to pass an absolute path of the source keys to the object that needs to be copied.
    ```js
    { destinationKey: ["path", "to", "sourceKeyInNestedObject"] }
    ```
  - function: the function will be called with the value corresponding to the destination key in the source object and the result will be copied. It will also get the root object as the second argument.
    ```js
    { destinationKey: (value, root) => value + root.id, }
    ```

- `objectArray`: The array of objects on which the copyKeysDeep object works.

### Usage:

```js
const data = [
  {
    id: 1,
    name: "Tomato",
    quantity: 10,
    user: { id: 1, name: "John", bonusQty: 3 },
    address: { street: "First street", pin: 101283 },
  },
  {
    id: 2,
    name: "Potato",
    quantity: 20,
    user: { id: 2, name: "Jane", bonusQty: 2 },
    address: { street: "Second street", pin: 998472 },
  },
];

// reformatting `data` to label-and-value format for neetoui-select.
copyKeysDeep(
  {
    name: "label",
    quantity: (qty, root) => qty + root.user.bonusQty,
    user: { pin: ["address", "pin"] },
  },
  data
);

/*
output: [
  {
    label: "Tomato", // label copied
    id: 1,
    name: "Tomato",
    quantity: 13, // quantity updated
    user: { pin: 101283, id: 1, name: "John", bonusQty: 3 }, // pin copied
    address: { street: "First street", pin: 101283 },
  },
  {
    label: "Potato",
    id: 2,
    name: "Potato",
    quantity: 22,
    user: { id: 2, name: "Jane", bonusQty: 2 },
    address: { pin: 998472, street: "Second street" },
  },
];
*/
```

</details>
