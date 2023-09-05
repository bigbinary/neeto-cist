# String operations

## slugify

Curried: false
Failsafe status: alternative available

Converts a given string to slug.

<details>
<summary>(click for example)</summary>

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

</details>

## humanize

Curried: false
Failsafe status: alternative available

Converts common developer friendly string formats (camelCase, snake_case,
dash-case etc) to human readable string.

<details>
<summary>(click for example)</summary>

### Arguments:
- `string`: The string to be converted.

### Usage:

```js
humanize("helloWorld"); // "Hello world"
humanize("hello-world"); // "Hello world"
humanize("__hello_world"); // "Hello world"
humanize("HelloUSA"); // "Hello usa"
```

</details>

## snakeToCamelCase

Curried: false
Failsafe status: alternative available

Converts snake_case string to camelCase.

<details>
<summary>(click for example)</summary>

### Arguments:
- `string`: The string to be converted.

### Usage:

```js
snakeToCamelCase("first_name"); // "firstName"
```

</details>

## camelToSnakeCase

Curried: false
Failsafe status: alternative available

Converts camelCase string to snake_case.

<details>
<summary>(click for example)</summary>

### Arguments:
- `string`: The string to be converted.

### Usage:

```js
camelToSnakeCase("firstName"); // "first_name"
```

</details>

## capitalize

Curried: false
Failsafe status: alternative available

Convert the first character of string to upper case.

<details>
<summary>(click for example)</summary>

### Arguments:
- `string`: The string to be converted.

### Usage:

```js
capitalize("oliver"); // "Oliver"
capitalize("OLIVER"); // "OLIVER"
capitalize("oLIVER"); // "OLIVER"
```

</details>

## truncate

Curried: false
Failsafe status: alternative available

Truncate the string with `...` if it is longer than specified string length.

<details>
<summary>(click for example)</summary>

### Arguments:
- `string`: The string to be truncated.
- `length`: The maximum allowed length of the string.

### Usage:

```js
truncate("Hello World", 5); //  "Hello..."
truncate("Hello World", 15); // "Hello World"
```

</details>
