## modifyWithImmer ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L63-L65))

- Curried: true
- Failsafe status: not failsafe

The `modifyWithImmer` function is designed for immutable modification of values
and is an abstraction over Immer's `produce` method. Immer is a library that
simplifies working with complex data structures and state updates in a more
immutable manner.

This function does not include a failsafe mechanism, so it is important to use
it with care, especially when working with complex data structures.

You can read more about Immer [here](https://immerjs.github.io/immer).

### Arguments:

- `modifier`: This is a function that receives a draft state as its parameter.
  The draft state is a mutable version of the original state. Inside the
  modifier function, we can directly make changes to the draft state as if it
  were mutable. Once the modifier function finishes, the changes made to the
  draft state are used to create a new immutable result.
- `state`: The value that needs to be modified.

Returns the new modified value.

### Usage:

```js
const data = { name: "Oliver" };
modifyWithImmer(draft => {
  draft.name = "Oliver smith";
})(data);
// outputs: { name: "Oliver smith" }
```

We can utilize currying with state updator functions:

```js
const { setUsers } = useZustandStore.pick();

setUsers(
  modifyWithImmer(draft => {
    draft[0].addresses.push("Oliver smith");
  })
);

// updates users to: [{ name: "Oliver smith" }, { name: "Eve" }]
```
