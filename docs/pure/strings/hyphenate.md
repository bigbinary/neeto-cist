## hyphenate ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/strings.js#L38-L50))

- Curried: false
- Failsafe status: alternative available

The `hyphenate` function converts strings that contain underscores, spaces, and
camelCase strings into hyphenated strings

### Arguments:

- `string`: The string to be hyphenated.
- `fallbackString`: value to be returned if string is empty.

### Usage:

```js
hyphenate("Hello World"); //  "hello-world"
hyphenate("hello_world"); // "hello-world"
hyphenate("helloWorld"); // "hello-world"
```
