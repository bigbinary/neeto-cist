## dynamicArray ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/general.js#L49-L50))

- Curried: false
- Failsafe status: not failsafe

The `dynamicArray` function constructs an array of a specified length using a
provided function to generate each element. The function takes the index as a
parameter and is expected to return the element corresponding to that index.

This function does not include a failsafe mechanism, so it is important to
ensure that the provided function and length are valid to prevent errors.

### Arguments:

- `count`: The length of the array to be generated.
- `elementGenerator`: The function that returns the element to be generated for
  that index. This function will get index as a parameter.

### Usage:

```js
dynamicArray(3, index => `option ${index + 1}`);

// output: ["option 1", "option 2", "option 3"]
```
