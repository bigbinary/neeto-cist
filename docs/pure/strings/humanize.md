## humanize ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/strings.js#L16-L27))

- Curried: false
- Failsafe status: alternative available

The `humanize` function converts common developer-friendly string formats such
as camelCase, snake_case, dash-case, etc., into human-readable strings.

### Arguments:

- `string`: The string to be converted.

### Usage:

```js
humanize("helloWorld"); // "Hello world"
humanize("hello-world"); // "Hello world"
humanize("__hello_world"); // "Hello world"
humanize("HelloUSA"); // "Hello usa"
```
