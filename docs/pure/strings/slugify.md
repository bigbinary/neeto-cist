## slugify ([source code](https://github.com/bigbinary/neeto-cist/blob/9b5f349ecf0c1c7d258fa92ef2088c29f85274e6/src/strings.js#L5-L14))

- Curried: false
- Failsafe status: alternative available

The `slugify` function converts a given string into a slug. A slug is a
URL-friendly representation of a string, typically used for creating
human-readable and SEO-friendly URLs. This function transforms a string by
removing spaces, special characters, and converting it to lowercase to create a
valid slug.

### Arguments:

- `string`: The string to be converted.

### Usage:

```js
slugify("My quiz"); // "my-quiz"
slugify("my-quiz"); // "my-quiz"
slugify("-----my----quiz"); // "my-quiz"
slugify("Me & my quiz"); // "me-and-my-quiz"
slugify("my!@#$%^*(quiz"); // "myquiz"
```
