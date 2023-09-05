import dayjs from "dayjs";
import { equals, startsWith } from "ramda";

import {
  deepFreezeObject,
  keysToCamelCase,
  keysToSnakeCase,
  transformObjectDeep,
  matches,
  filterNonNull,
  serializeKeysToSnakeCase,
  preprocessForSerialization,
} from "src/objects";

describe("Object operations", () => {
  test("transformObjectDeep() method should return an object of same hierarchy with the key value pair the transformer function returns", () => {
    expect(
      transformObjectDeep(
        { name: "Oliver", email: "oliver@example.com" },
        (key, value) => [key, value.toUpperCase()]
      )
    ).toEqual({ name: "OLIVER", email: "OLIVER@EXAMPLE.COM" });

    expect(
      transformObjectDeep(
        {
          name: "Oliver",
          address: {
            countryCode: "US",
            phoneNumber: "+1-123-456-7890",
          },
        },
        (key, value) => [key.toUpperCase(), value]
      )
    ).toEqual({
      NAME: "Oliver",
      ADDRESS: { COUNTRYCODE: "US", PHONENUMBER: "+1-123-456-7890" },
    });

    expect(
      transformObjectDeep(
        [
          { name: "Oliver", email: "oliver@example.com" },
          { name: "Sam", email: "sam@example.com" },
        ],
        (key, value) => [key, value.toUpperCase()]
      )
    ).toEqual([
      { name: "OLIVER", email: "OLIVER@EXAMPLE.COM" },
      { name: "SAM", email: "SAM@EXAMPLE.COM" },
    ]);

    expect(
      transformObjectDeep(null, (key, value) => [key, value.toUpperCase()])
    ).toBe(null);

    expect(
      transformObjectDeep("hello world", (key, value) => [
        key,
        value.toUpperCase(),
      ])
    );

    expect(
      transformObjectDeep(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        (key, value) => [key, value],
        item => (Array.isArray(item) ? item.slice(1) : item)
      )
    ).toEqual([
      [5, 6],
      [8, 9],
    ]);
  });

  test("keysToCamelCase() method should recursively convert the snake cased object keys to camel case", () => {
    expect(
      keysToCamelCase({
        first_name: "Oliver",
        last_name: "Smith",
        address: { city: "Miami", phone_number: "389791382" },
      })
    ).toEqual({
      firstName: "Oliver",
      lastName: "Smith",
      address: { city: "Miami", phoneNumber: "389791382" },
    });
  });

  test("keysToSnakeCase() method should recursively convert the camel cased object keys to snake case", () => {
    expect(
      keysToSnakeCase({
        firstName: "Oliver",
        lastName: "Smith",
        address: { city: "Miami", phoneNumber: "389791382" },
      })
    ).toEqual({
      first_name: "Oliver",
      last_name: "Smith",
      address: { city: "Miami", phone_number: "389791382" },
    });
  });

  test("serializeKeysToSnakeCase() method should use the value returned by the toJSON() method if present for the transformation", () => {
    expect(
      serializeKeysToSnakeCase({
        address: { city: "Miami", phoneNumber: "389791382" },
        firstName: "Oliver",
        lastName: "Smith",
        dob: new Date("1980-01-01"),
      })
    ).toEqual({
      first_name: "Oliver",
      last_name: "Smith",
      address: { city: "Miami", phone_number: "389791382" },
      dob: "1980-01-01T00:00:00.000Z",
    });

    expect(
      serializeKeysToSnakeCase({
        dob: [new Date("1980-01-01"), new Date("1980-02-02")],
      })
    ).toEqual({
      dob: ["1980-01-01T00:00:00.000Z", "1980-02-02T00:00:00.000Z"],
    });

    expect(
      serializeKeysToSnakeCase([new Date("1980-01-01"), new Date("1980-02-02")])
    ).toEqual(["1980-01-01T00:00:00.000Z", "1980-02-02T00:00:00.000Z"]);

    expect(
      serializeKeysToSnakeCase({
        name: { toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }) },
        phoneNumber: "389791382",
      })
    ).toEqual({
      name: { first_name: "Oliver", last_name: "Smith" },
      phone_number: "389791382",
    });

    expect(
      serializeKeysToSnakeCase({
        toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }),
      })
    ).toEqual({ first_name: "Oliver", last_name: "Smith" });
  });

  test("preprocessForSerialization() method should transform object based on the value returned by the toJSON() method", () => {
    expect(
      preprocessForSerialization({
        address: { city: "Miami", phone_number: "389791382" },
        firstName: "Oliver",
        lastName: "Smith",
        dob: new Date("1980-01-01"),
      })
    ).toEqual({
      address: { city: "Miami", phone_number: "389791382" },
      firstName: "Oliver",
      lastName: "Smith",
      dob: "1980-01-01T00:00:00.000Z",
    });

    expect(
      preprocessForSerialization({
        dob: [dayjs(new Date("1980-01-01")), new Date("1980-02-02")],
      })
    ).toEqual({
      dob: ["1980-01-01T00:00:00.000Z", "1980-02-02T00:00:00.000Z"],
    });

    expect(
      preprocessForSerialization({
        name: { toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }) },
        phoneNumber: "389791382",
      })
    ).toEqual({
      name: { firstName: "Oliver", lastName: "Smith" },
      phoneNumber: "389791382",
    });

    expect(preprocessForSerialization(dayjs(new Date("1980-01-01")))).toEqual(
      "1980-01-01T00:00:00.000Z"
    );
  });

  test("deepFreezeObject() method should recursively freeze each property which is of type object", () => {
    const user = {
      firstName: "Oliver",
      address: { city: "Miami", phoneNumber: "389791382" },
    };
    deepFreezeObject(user);

    expect(() => {
      user.firstName = "Sam";
    }).toThrow(
      "Cannot assign to read only property 'firstName' of object '#<Object>"
    );

    expect(() => {
      user.address.phoneNumber = "123456789";
    }).toThrow(
      "Cannot assign to read only property 'phoneNumber' of object '#<Object>'"
    );

    expect(() => {
      user.lastName = "Smith";
    }).toThrow("Cannot add property lastName, object is not extensible");
  });

  test("matches() method should return true if the object matches the pattern else return false", () => {
    const user = {
      firstName: "Oliver",
      address: {
        houseOwnerName: "Sam",
        city: "Miami",
        phoneNumber: "389791382",
      },
      cars: [
        { ownerName: "Sam", brand: "Ford" },
        { ownerName: "Oliver", brand: "Honda" },
      ],
    };

    expect(matches({ firstName: "Oliver" }, user)).toBe(true);
    expect(matches({ firstName: "Oliver" })(user)).toBe(true); // curried
    expect(matches({ address: { city: "Miami" } }, user)).toBe(true);
    expect(matches({ cars: [{ brand: "Ford" }] }, user)).toBe(true);
    expect(matches({ firstName: "Sam" }, user)).toBe(false);
    expect(matches({ address: { country: "US" } }, user)).toBe(false);
    expect(matches({ cars: [{ brand: "Honda" }] }, user)).toBe(false);
    // array index as object key
    expect(matches({ cars: { 1: { brand: "Honda" } } }, user)).toBe(true);
    // function based
    expect(matches({ cars: cars => cars.length === 2 }, user)).toBe(true);
    expect(matches({ firstName: startsWith("Oli") }, user)).toBe(true);
    expect(matches({ address: { city: equals("Goa") } }, user)).toBe(false);
    // referencing the parent object
    const isEqualToUserFirstName = (carOwnerName, userObject) =>
      carOwnerName === userObject.firstName;

    expect(
      matches({ address: { houseOwnerName: isEqualToUserFirstName } }, user)
    ).toBe(false);

    expect(
      matches({ cars: { 1: { ownerName: isEqualToUserFirstName } } }, user)
    ).toBe(true);
  });

  test("filterNonNull() method should return an object with only the properties that are not null or undefined", () => {
    expect(filterNonNull({ firstName: "Oliver", lastName: null })).toEqual({
      firstName: "Oliver",
    });

    expect(filterNonNull({ firstName: "Oliver", lastName: undefined })).toEqual(
      { firstName: "Oliver" }
    );

    expect(
      filterNonNull({
        firstName: "Oliver",
        phonenumbers: {
          home: null,
          office: "1112223334",
        },
      })
    ).toEqual({
      firstName: "Oliver",
      phonenumbers: { office: "1112223334" },
    });
  });
});
