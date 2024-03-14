## truncate ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/strings.js#L52-L53))

- Curried: false
- Failsafe status: alternative available

The `truncate` function truncates a string by adding "..." if it exceeds a
specified maximum length.

### Arguments:

- `string`: The string to be truncated.
- `length`: The maximum allowed length of the string.

### Usage:

```js
truncate("Hello World", 5); //  "Hello..."
truncate("Hello World", 15); // "Hello World"
```
