import { findById, isNotPresent, isPresent } from "src";
import { _findById } from "src/arrays";
import {
  dynamicArray,
  getRandomInt,
  isNotEmpty,
  isNot,
  isNotEqualDeep,
  noop,
  notEquals,
  notEqualsDeep,
  randomPick,
  toLabelAndValue,
  nullSafe,
} from "src/general";

describe("General functions", () => {
  describe("nullSafe() method should convert a function to return null instead of throwing error", () => {
    test("Basic functionality", () => {
      const func = array => array.map(item => item.count + 1);
      expect(() => func(null)).toThrow();
      expect(() => nullSafe(func)(null)).not.toThrow();
    });

    test("Currying & point free expressions should work", () => {
      const data = [
        null,
        [{ id: 1 }, { id: 2 }],
        [{ id: 3 }, { id: 4 }],
        undefined,
      ];
      const expected = [null, undefined, { id: 3 }, undefined];
      expect(() => data.flatMap(findById(3))).toThrow();
      expect(data.flatMap(nullSafe(findById)(3))).toEqual(expected);
      expect(data.flatMap(_findById(3))).toEqual(expected);
    });

    test("Only the last parameter should be safely nullable", () => {
      const func = (a, b) => a.length === b.length;
      expect(() => nullSafe(func)(null, [])).toThrow();
      expect(() => nullSafe(func)([], null)).not.toThrow();
    });

    test("Optional parameters should not be considered for currying", () => {
      const func = (a, b = 10) => a + b;
      expect(nullSafe(func)(2)).toBe(12);
      expect(nullSafe(func)(2, 1)).toBe(3);
    });
  });

  test("noop() method should return undefined", () => {
    expect(noop()).toBeUndefined();
  });

  test("toLabelAndValue() method should convert a string to an object with keys label and value", () => {
    const string = "test";
    expect(toLabelAndValue(string)).toEqual({ label: "test", value: "test" });
  });

  test("getRandomInt() method should return a random integer", () => {
    const randomInt1 = getRandomInt();
    expect(randomInt1).toBeGreaterThanOrEqual(0);
    expect(randomInt1).toBeLessThan(Number.MAX_SAFE_INTEGER);

    const randomInt2 = getRandomInt(10);
    expect(randomInt2).toBeGreaterThanOrEqual(0);
    expect(randomInt2).toBeLessThan(10);

    const randomInt3 = getRandomInt(0, 10);
    expect(randomInt3).toBeGreaterThanOrEqual(0);
    expect(randomInt3).toBeLessThan(10);

    const randomInt4 = getRandomInt(1.5, 4.5);
    expect(randomInt4).toBeGreaterThanOrEqual(2);
    expect(randomInt4).toBeLessThan(4);

    const randomInt5 = getRandomInt(1.5, 1.5);
    expect(randomInt5).toBe(1);
  });

  test("randomPick() method should return a random argument from the list of arguments passed to the function", () => {
    expect(["arg1", "arg2", "arg3"]).toContain(
      randomPick("arg1", "arg2", "arg3")
    );
    expect(randomPick("arg1")).toBe("arg1");
    expect(randomPick()).toBe(undefined);
  });

  test("dynamicArray() method should return an array of elements based on the given count and generator function", () => {
    const elementGenerator = index => `Option ${index + 1}`;
    const array = dynamicArray(5, elementGenerator);

    expect(array).toHaveLength(5);
    array.forEach((element, index) => {
      expect(element).toEqual(`Option ${index + 1}`);
    });
  });

  test("notEquals() method return true for unequal references & primitives", () => {
    expect(notEquals(1, 2)).toBe(true);
    expect(notEquals(1, 1)).toBe(false);
    expect(notEquals([], [])).toBe(true);
    expect(notEquals).toBe(isNot);
  });

  test("notEqualsDeep() method return true for unequal objects", () => {
    expect(notEqualsDeep(1, 2)).toBe(true);
    expect(notEqualsDeep(1, 1)).toBe(false);
    expect(notEqualsDeep([{ a: 1 }], [{ a: 2 }])).toBe(true);
    expect(notEqualsDeep([{ a: 1 }], [{ a: 1 }])).toBe(false);
    expect(notEqualsDeep).toBe(isNotEqualDeep);
  });

  test("isNotEmpty() method return true for non-empty objects, arrays and strings", () => {
    expect(isNotEmpty({})).toBe(false);
    expect(isNotEmpty([])).toBe(false);
    expect(isNotEmpty("")).toBe(false);
    expect(isNotEmpty({ a: 0 })).toBe(true);
    expect(isNotEmpty([1, 1])).toBe(true);
    expect(isNotEmpty("hello world")).toBe(true);
  });

  test("isNotPresent() method return true if object is null/undefined/empty", () => {
    expect(isNotPresent("")).toBe(true);
    expect(isNotPresent([])).toBe(true);
    expect(isNotPresent(0)).toBe(false);
    expect(isNotPresent([1])).toBe(false);
    expect(isNotPresent({ a: 1 })).toBe(false);
    expect(isNotPresent(" ")).toBe(false);
  });

  test("isPresent() method return true if object is not null/undefined/empty", () => {
    expect(isPresent({ a: "b" })).toBe(true);
    expect(isPresent("string")).toBe(true);
    expect(isPresent([])).toBe(false);
    expect(isPresent([1])).toBe(true);
    expect(isPresent(undefined)).toBe(false);
    expect(isPresent(null)).toBe(false);
  });
});
