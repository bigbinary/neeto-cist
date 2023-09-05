import { assoc, gt, includes, __ } from "ramda";

import {
  copyKeysDeep,
  existsBy,
  existsById,
  renameKeys,
  removeById,
  findById,
  replaceById,
  modifyById,
  findBy,
  removeBy,
  replaceBy,
  modifyBy,
  copyKeys,
  findLastBy,
  findIndexById,
  findIndexBy,
  findLastIndexBy,
  filterBy,
  countBy,
  _removeById,
  _replaceById,
} from "src/arrays";

describe("Array operations", () => {
  const array = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Oliver" },
    { id: 3, name: "Harry" },
  ];

  test("removeById() method should remove an item from an array of items based on an identifier", () => {
    expect(removeById(2, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 3, name: "Harry" },
    ]);

    // curried
    expect(removeById(2)(array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 3, name: "Harry" },
    ]);
    expect(removeById(4, array)).toEqual(array);
    expect(_removeById(4, array)).toEqual(array);
    expect(_removeById(4, null)).toEqual(null);
    expect(_removeById(4)(array)).toEqual(array);
    expect(_removeById(4)(null)).toEqual(null);
    expect(array.length).toEqual(3);
  });

  test("findById() method should find an item from an array of items based on an identifier", () => {
    expect(findById(2, array)).toEqual({ id: 2, name: "Oliver" });
    expect(findById(2)(array)).toEqual({ id: 2, name: "Oliver" }); //curried
    expect(findById(4, array)).toBe(undefined);
  });

  test("replaceById() method should replace an item with the new item based on an identifier", () => {
    const expected = [
      { id: 1, name: "Sam" },
      { id: 2, name: "John" },
      { id: 3, name: "Harry" },
    ];
    expect(replaceById(2, { id: 2, name: "John" }, array)).toEqual(expected);
    expect(replaceById(2)({ id: 2, name: "John" })(array)).toEqual(expected); // curried
    expect(_replaceById(2, { id: 2, name: "John" }, array)).toEqual(expected);
    expect(_replaceById(2)({ id: 2, name: "John" })(array)).toEqual(expected); // curried
    expect(_replaceById(2, { id: 2, name: "John" }, null)).toEqual(null);
    expect(_replaceById(2)({ id: 2, name: "John" })(null)).toEqual(null); // curried
    expect(replaceById(4, { id: 4, name: "John" }, array)).toEqual(array);
  });

  test("modifyById() method should modify an item using modifier function based on an identifier", () => {
    const modifier = item => assoc("name", item.name.toUpperCase(), item);

    expect(modifyById(2, modifier, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "OLIVER" },
      { id: 3, name: "Harry" },
    ]);

    // curried
    expect(modifyById(2)(modifier)(array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "OLIVER" },
      { id: 3, name: "Harry" },
    ]);
    expect(modifyById(4, modifier, array)).toEqual(array);
  });

  test("findBy() method should find an item from an array of items based on a pattern", () => {
    expect(findBy({ name: "Oliver" }, array)).toEqual({
      id: 2,
      name: "Oliver",
    });

    // curried
    expect(findBy({ name: "Oliver" })(array)).toEqual({
      id: 2,
      name: "Oliver",
    });
    expect(findBy({ name: "John" }, array)).toBe(undefined);
  });

  test("removeBy() method should remove an item from an array of items based on a pattern", () => {
    expect(removeBy({ name: "Oliver" }, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 3, name: "Harry" },
    ]);

    // curried
    expect(removeBy({ name: "Oliver" })(array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 3, name: "Harry" },
    ]);
    expect(removeBy({ name: "John" }, array)).toEqual(array);
    expect(array.length).toEqual(3);
  });

  test("replaceBy() method should replace an item with a new item based on a pattern", () => {
    const newItem = { id: 2, name: "John" };

    expect(replaceBy({ name: "Oliver" }, newItem, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "John" },
      { id: 3, name: "Harry" },
    ]);

    // curried
    expect(replaceBy({ name: "Oliver" })(newItem)(array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "John" },
      { id: 3, name: "Harry" },
    ]);
    expect(replaceBy({ name: "John" }, newItem, array)).toEqual(array);
  });

  test("modifyBy() method should modify an item using modifier function based on a pattern", () => {
    const modifier = item => assoc("name", item.name.toUpperCase(), item);

    expect(modifyBy({ name: "Oliver" }, modifier, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "OLIVER" },
      { id: 3, name: "Harry" },
    ]);

    // curried
    expect(modifyBy({ name: "Oliver" })(modifier)(array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 2, name: "OLIVER" },
      { id: 3, name: "Harry" },
    ]);
    expect(modifyBy({ name: "John" }, modifier, array)).toEqual(array);
  });

  test("existsById() returns true if an item with given ID is present in the array", () => {
    expect(existsById(2, array)).toEqual(true);
    expect(existsById(5, array)).toEqual(false);
  });

  test("existsBy() returns true if an item with matching properties is present in the array", () => {
    expect(existsBy({ name: "Sam" }, array)).toEqual(true);
    expect(existsBy({ name: "Michael" }, array)).toEqual(false);
  });

  test("findLastBy() returns the last value that matches given pattern", () => {
    const newArray = [...array, { id: 4, name: "Sam" }];
    expect(findLastBy({ name: "Sam" }, newArray).id).toEqual(4);
    expect(findLastBy({ name: "Oliver" }, newArray).id).toEqual(2);
    expect(findLastBy({ name: "Michael" }, newArray)).toBeUndefined();
  });

  test("findIndexById() returns the index of entity with given id", () => {
    expect(findIndexById(1, array)).toEqual(0);
    expect(findIndexById(4, array)).toEqual(-1);
  });

  test("findIndexBy() returns the index of entity matching the given pattern", () => {
    expect(findIndexBy({ name: "Sam" }, array)).toEqual(0);
    expect(findIndexBy({ name: "Michael" }, array)).toEqual(-1);
  });

  test("findLastIndexBy() returns the index of the last entity matching the given pattern", () => {
    const newArray = [...array, { id: 4, name: "Sam" }];
    expect(findLastIndexBy({ name: "Sam" }, newArray)).toEqual(3);
    expect(findLastIndexBy({ name: "Oliver" }, newArray)).toEqual(1);
    expect(findLastIndexBy({ name: "Michael" }, newArray)).toEqual(-1);
  });

  test("filterBy() correctly filters all matching entities", () => {
    expect(filterBy({ name: includes("a") }, array)).toEqual([
      { id: 1, name: "Sam" },
      { id: 3, name: "Harry" },
    ]);

    const newArray = [...array, { id: 4, name: "Sam" }];
    expect(filterBy({ name: "Sam" }, newArray)).toEqual([
      { id: 1, name: "Sam" },
      { id: 4, name: "Sam" },
    ]);
    expect(filterBy({ name: "Michael" }, newArray)).toEqual([]);
  });

  test("countBy() correctly counts all matching entities", () => {
    const newArray = [...array, { id: 4, name: "Sam" }];
    expect(countBy({ name: "Sam" }, newArray)).toEqual(2);
    expect(countBy({ name: "Oliver" }, newArray)).toEqual(1);
    expect(countBy({ name: "Michael" }, newArray)).toEqual(0);
    expect(countBy({ id: gt(__, 1) }, newArray)).toEqual(3);
  });

  test("copyKeys() method should return an array of objects with keys-value pairs based on the keymap provided", () => {
    const data = [
      { id: 1, name: "Tomato", quantity: 10 },
      { id: 2, name: "Potato", quantity: 20 },
    ];

    expect(copyKeys({ name: "label", quantity: "value" }, data)).toEqual([
      { label: "Tomato", value: 10, id: 1, name: "Tomato", quantity: 10 },
      { label: "Potato", value: 20, id: 2, name: "Potato", quantity: 20 },
    ]);

    expect(copyKeys({ name: "label", qty: "value" }, data)).toEqual([
      {
        label: "Tomato",
        value: undefined,
        id: 1,
        name: "Tomato",
        quantity: 10,
      },
      {
        label: "Potato",
        value: undefined,
        id: 2,
        name: "Potato",
        quantity: 20,
      },
    ]);

    expect(copyKeys({ name: "label", quantity: "id" }, data)).toEqual([
      { id: 10, label: "Tomato", name: "Tomato", quantity: 10 },
      { id: 20, label: "Potato", name: "Potato", quantity: 20 },
    ]);
  });

  test("copyKeysDeep() method should return an array of objects with values deeply copied based on the keymap provided", () => {
    const data = [
      {
        id: 1,
        name: "Tomato",
        quantity: 10,
        user: { id: 1, name: "John" },
        address: { id: 1, street: "Main St", phone: "1234567890" },
      },
      {
        id: 2,
        name: "Potato",
        quantity: 20,
        user: { id: 2, name: "Jane" },
        address: { id: 2, street: "Second St", phone: "1234567891" },
      },
    ];

    expect(
      copyKeysDeep(
        {
          userName: ["user", "name"], // array indicating the path to the value
          user: {
            // nested objects
            phone: ["address", "phone"], // path is always from the root object
            name: prevName => `${prevName} (copy)`, // function to modify the value
          },
          quantity: (oldQuantity, root) => oldQuantity + root.id, // update value of existing key
          totalQuantity: "quantity", // copy from existing key, that is going to be updated (it will take the old value)
          address: {
            street2: "street", // string indicating the name of property in immediate parent (here, address)
          },
        },
        data
      )
    ).toEqual([
      {
        id: 1,
        name: "Tomato",
        quantity: 11,
        totalQuantity: 10,
        userName: "John",
        user: { phone: "1234567890", id: 1, name: "John (copy)" },
        address: {
          id: 1,
          street: "Main St",
          street2: "Main St",
          phone: "1234567890",
        },
      },
      {
        id: 2,
        name: "Potato",
        quantity: 22,
        totalQuantity: 20,
        userName: "Jane",
        user: { phone: "1234567891", id: 2, name: "Jane (copy)" },
        address: {
          id: 2,
          street: "Second St",
          street2: "Second St",
          phone: "1234567891",
        },
      },
    ]);

    expect(copyKeysDeep({ name: ["some", "unknown", "path"] }, data)).toEqual([
      { ...data[0], name: undefined },
      { ...data[1], name: undefined },
    ]);
  });

  test("renameKeys() method replace the keys of an object based on the keymap provided", () => {
    expect(renameKeys({ name: "label", id: "value" }, array)).toEqual([
      { label: "Sam", value: 1 },
      { label: "Oliver", value: 2 },
      { label: "Harry", value: 3 },
    ]);

    expect(renameKeys({ age: "userAge" }, array)).toEqual([
      { id: 1, name: "Sam", userAge: undefined },
      { id: 2, name: "Oliver", userAge: undefined },
      { id: 3, name: "Harry", userAge: undefined },
    ]);
  });
});
