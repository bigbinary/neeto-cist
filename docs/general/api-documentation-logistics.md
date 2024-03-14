# API documentation logistics

We offer a meticulously organized API documentation to support developers in
enhancing their comprehension of the functionalities available within the
`@bigbinary/neeto-cist` package. This documentation serves the dual
purpose of generating [JSDocs](https://jsdoc.app/), underscoring the importance
of upholding a uniform format.

To ensure a consistent structure for the documentation, it's necessary to follow
the guidelines outlined below when adding a new utility or editing an existing
one within the package:

1. When adding a new utility, create a file with the same name as that of
   function in the respective directory inside the `pure` directory based on its use case.
2. Follow the format below to compose the function documentation:

```
## <function-name> ([source code](<perma-link>))

<description>

### Arguments:

<Arguments as points>

### Return value:

<Return values as points>

### Usage

<Usage goes here>
```

3. Link to the source code should be attached using a
   [permalink](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files)
   from GitHub instead of generic links. Whenever the function is edited in the
   future, make sure to update the permalink to reference the latest version of
   the function.
4. `Arguments` and `Return value` sections may be omitted depending on the
   function signature.
5. In the `Usage` section, include comprehensive examples that demonstrate how
   the function should be utilized in various scenarios. If a function requires
   additional context, consider explaining the problem it solves using
   real-world scenarios.
6. Maintain a clear and concise language. Avoid unnecessary embellishments and
   keep your descriptions succinct.
7. Ensure that sentences are well-formed with proper punctuation.
8. It's worth noting that when the document is converted to JSDoc, all headers
   and bullet points will be excluded, leaving only the descriptive portion of
   the function documentation.
9. It's crucial to present examples in the `Usage` section within a code block.
   The content within the code block will be parsed, and its contents will be
   added within the [example](https://jsdoc.app/tags-example.html) tags in
   JSDoc.
