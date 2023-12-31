import {
  camelToSnakeCase,
  humanize,
  snakeToCamelCase,
  slugify,
  capitalize,
  hyphenate,
  _hyphenate,
  truncate,
  _truncate,
} from "src/strings";

describe("String operations", () => {
  test("slugify() method should convert a string into a slug", () => {
    expect(slugify("My quiz")).toBe("my-quiz");
    expect(slugify("my-quiz")).toBe("my-quiz");
    expect(slugify("   my-quiz    ")).toBe("my-quiz");
    expect(slugify("-----my----quiz")).toBe("my-quiz");
    expect(slugify("Me & my quiz")).toBe("me-and-my-quiz");
    expect(slugify("my!@#$%^*(quiz")).toBe("myquiz");
  });

  test("humanize() method should convert a string into a human readable string", () => {
    expect(humanize("helloWorld")).toBe("Hello world");
    expect(humanize("hello-world")).toBe("Hello world");
    expect(humanize("   hello-world   ")).toBe("Hello world");
    expect(humanize("__hello_world")).toBe("Hello world");
    expect(humanize("HelloUSA")).toBe("Hello usa");
  });

  test("snakeToCamelCase() method should convert snake_case to camelCase", () => {
    expect(snakeToCamelCase("first_name")).toBe("firstName");
    expect(snakeToCamelCase("user_first_name")).toBe("userFirstName");
  });

  test("camelToSnakeCase() method should convert camelCase to snake_case", () => {
    expect(camelToSnakeCase("firstName")).toBe("first_name");
    expect(camelToSnakeCase("userFirstName")).toBe("user_first_name");
  });

  test("capitalize() method should convert the first character to upper case and the remaining to lower case", () => {
    expect(capitalize("oliver")).toBe("Oliver");
    expect(capitalize("Oliver")).toBe("Oliver");
    expect(capitalize("OLIVER")).toBe("OLIVER");
  });

  test("hyphenate() method should hyphenate the string", () => {
    expect(hyphenate("Hello World")).toBe("hello-world");
    expect(hyphenate("hello_world")).toBe("hello-world");
    expect(hyphenate("helloWorld")).toBe("hello-world");
  });

  test("_hyphenate() method should hyphenate the string", () => {
    expect(_hyphenate("Hello World")).toBe("hello-world");
    expect(_hyphenate("hello_world")).toBe("hello-world");
    expect(_hyphenate("helloWorld")).toBe("hello-world");
  });

  test("truncate() method should truncate the string if it is longer than specified string length", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hello World", 15)).toBe("Hello World");
  });

  test("_truncate() method should truncate the string if it is longer than specified string length", () => {
    expect(_truncate("Hello World", 5)).toBe("Hello...");
    expect(_truncate("Hello World", 15)).toBe("Hello World");
  });
});
