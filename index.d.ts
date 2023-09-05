export type Primitives = symbol | string | number | boolean | null | undefined;
export type ObjectAndPrimitives = Primitives | object;
type KeyType = string | number | symbol;
type NilOr<T> = T | null | undefined;
type Matchable<Obj, Parent, key extends keyof Obj> = ((object: Obj[key], parent: Parent) => boolean) | MatchPattern<Obj[key], Parent> | Primitives;
type MatchPattern<Obj = any, Parent = Obj> = Obj extends any[] ? Matchable<Obj, Parent, number>[] | {
  [key: number]: Matchable<Obj, Parent, number>;
} : Obj extends Primitives ? Obj : ({ [key in keyof Partial<Obj>]: Matchable<Obj, Parent, key> } & {
  [key: KeyType]: Matchable<any, Parent, KeyType>;
});
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Converts camelCase string to snake_case.
 *
 * @example 
 *
 * camelToSnakeCase("firstName"); // "first_name"
 * @endexample
*/
export function camelToSnakeCase(string: string): string;
export function _camelToSnakeCase(string: NilOr<string>): NilOr<string>;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Convert the first character of string to upper case.
 *
 * @example 
 *
 * capitalize("oliver"); // "Oliver"
 * capitalize("OLIVER"); // "OLIVER"
 * capitalize("oLIVER"); // "OLIVER"
 * @endexample
*/
export function capitalize(string: string): string;
export function _capitalize(string: NilOr<string>): NilOr<string>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Similar to renameKeys function, but it keeps both the source and destination
 *
 * keys in the resulting array.
 *
 * @example 
 *
 * const data = [
 *   { id: 1, name: "Tomato", quantity: 10 },
 *   { id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * // copy name to label and id to value
 * copyKeys({ name: "label", id: "value" }, data);
 * 
 * 
 * output: [
 *   { label: "Tomato", value: 1, id: 1, name: "Tomato", quantity: 10 },
 *   { label: "Potato", value: 2, id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * @endexample
*/
export function copyKeys<T>(keyMap: { [key in keyof Partial<T>]: string }, objectArray: T[]): (T & {
  [key: string]: any;
})[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Similar to renameKeys function, but it keeps both the source and destination
 *
 * keys in the resulting array.
 *
 * @example 
 *
 * const data = [
 *   { id: 1, name: "Tomato", quantity: 10 },
 *   { id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * // copy name to label and id to value
 * copyKeys({ name: "label", id: "value" }, data);
 * 
 * 
 * output: [
 *   { label: "Tomato", value: 1, id: 1, name: "Tomato", quantity: 10 },
 *   { label: "Potato", value: 2, id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * @endexample
*/
export function copyKeys(keyMap: {
  [key: string]: string;
}): <T>(objectArray: T[]) => (T & {
  [key: string]: any;
})[];
export function _copyKeys<T>(keyMap: { [key in keyof Partial<T>]: string }, objectArray: NilOr<T[]>): NilOr<(T & {
  [key: string]: any;
})[]>;
export function _copyKeys(keyMap: {
  [key: string]: string;
}): <T>(objectArray: NilOr<T[]>) => NilOr<(T & {
  [key: string]: any;
})[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * A more advanced version of copyKeys function. It supports nested objects. It
 *
 * has a different structure for the key mapping to support nesting.
 *
 * @example 
 *
 * const data = [
 *   {
 *     id: 1,
 *     name: "Tomato",
 *     quantity: 10,
 *     user: { id: 1, name: "John", bonusQty: 3 },
 *     address: { street: "First street", pin: 101283 },
 *   },
 *   {
 *     id: 2,
 *     name: "Potato",
 *     quantity: 20,
 *     user: { id: 2, name: "Jane", bonusQty: 2 },
 *     address: { street: "Second street", pin: 998472 },
 *   },
 * ];
 * 
 * // reformatting `data` to label-and-value format for neetoui-select.
 * copyKeysDeep(
 *   {
 *     name: "label",
 *     quantity: (qty, root) => qty + root.user.bonusQty,
 *     user: { pin: ["address", "pin"] },
 *   },
 *   data
 * );
 * 
 * 
 * output: [
 *   {
 *     label: "Tomato", // label copied
 *     id: 1,
 *     name: "Tomato",
 *     quantity: 13, // quantity updated
 *     user: { pin: 101283, id: 1, name: "John", bonusQty: 3 }, // pin copied
 *     address: { street: "First street", pin: 101283 },
 *   },
 *   {
 *     label: "Potato",
 *     id: 2,
 *     name: "Potato",
 *     quantity: 22,
 *     user: { id: 2, name: "Jane", bonusQty: 2 },
 *     address: { pin: 998472, street: "Second street" },
 *   },
 * ];
 * 
 * @endexample
*/
export function copyKeysDeep(keyMap: object, objectArray: object[]): object[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * A more advanced version of copyKeys function. It supports nested objects. It
 *
 * has a different structure for the key mapping to support nesting.
 *
 * @example 
 *
 * const data = [
 *   {
 *     id: 1,
 *     name: "Tomato",
 *     quantity: 10,
 *     user: { id: 1, name: "John", bonusQty: 3 },
 *     address: { street: "First street", pin: 101283 },
 *   },
 *   {
 *     id: 2,
 *     name: "Potato",
 *     quantity: 20,
 *     user: { id: 2, name: "Jane", bonusQty: 2 },
 *     address: { street: "Second street", pin: 998472 },
 *   },
 * ];
 * 
 * // reformatting `data` to label-and-value format for neetoui-select.
 * copyKeysDeep(
 *   {
 *     name: "label",
 *     quantity: (qty, root) => qty + root.user.bonusQty,
 *     user: { pin: ["address", "pin"] },
 *   },
 *   data
 * );
 * 
 * 
 * output: [
 *   {
 *     label: "Tomato", // label copied
 *     id: 1,
 *     name: "Tomato",
 *     quantity: 13, // quantity updated
 *     user: { pin: 101283, id: 1, name: "John", bonusQty: 3 }, // pin copied
 *     address: { street: "First street", pin: 101283 },
 *   },
 *   {
 *     label: "Potato",
 *     id: 2,
 *     name: "Potato",
 *     quantity: 22,
 *     user: { id: 2, name: "Jane", bonusQty: 2 },
 *     address: { pin: 998472, street: "Second street" },
 *   },
 * ];
 * 
 * @endexample
*/
export function copyKeysDeep(keyMap: object): (objectArray: object[]) => object[];
export function _copyKeysDeep(keyMap: object, objectArray: NilOr<object[]>): NilOr<object[]>;
export function _copyKeysDeep(keyMap: object): (objectArray: NilOr<object[]>) => NilOr<object[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Counts an array of items for items that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * countBy({ age: 20 }, array); // returns 2
 * countBy({ age: gt(__, 40) }, array); // returns 1
 * countBy({ age: 50 }, array); // returns 0
 * @endexample
*/
export function countBy<T>(pattern: MatchPattern<T>, entityArray: T[]): number;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Counts an array of items for items that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * countBy({ age: 20 }, array); // returns 2
 * countBy({ age: gt(__, 40) }, array); // returns 1
 * countBy({ age: 50 }, array); // returns 0
 * @endexample
*/
export function countBy(pattern: MatchPattern): (entityArray: object[]) => number;
export function _countBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<number>;
export function _countBy(pattern: MatchPattern): (entityArray: NilOr<object[]>) => NilOr<number>;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * To make an object immutable, recursively freeze each property which is of type object.
 *
 * @example 
 *
 * const user = {
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   firstName: "Oliver",
 * };
 * deepFreezeObject(user);
 * 
 * user.address.phoneNumber = "123456789"; // fails silently in non-strict mode
 * user.lastName = "Smith"; // fails silently in non-strict mode
 * 
 * console.log(user);
 * 
 * 
 * {
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   firstName: "Oliver",
 * };
 * 
 * @endexample
 * The assignment operation will throw the error only when we execute it in strict mode, in non-strict mode it will fail silently.
 *
 * @example 
 *
 * "use strict"; user.address.phoneNumber = "123456789";
 * 
 * Cannot assign to read only property 'phoneNumber' of object '#<Object>
 * 
 * 
 * "use strict"; user.lastName = "Smith";
 * 
 * Cannot add property lastName, object is not extensible
 * 
 * @endexample
*/
export function deepFreezeObject<T>(object: T): Readonly<T>;
/**
 *
 * Curried: false
 *
 * Failsafe status: not failsafe
 *
 * Builds an array of given length using a given function to generate each element.
 *
 * The function will get index as parameter and is expected to return the element
 *
 * corresponding to that index.
 *
 * @example 
 *
 * dynamicArray(3, index => `option ${index + 1}`);
 * 
 * // output: ["option 1", "option 2", "option 3"]
 * @endexample
*/
export function dynamicArray<T>(count: number, elementGenerator: (index: number) => T): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Search for an item that matches the given pattern in an array. Returns true if
 *
 * found, false otherwise.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * 
 * existsBy({ name: "Sam" }, array); // true
 * existsBy({ name: "Harry" }, array); // false
 * @endexample
*/
export function existsBy<T>(pattern: MatchPattern<T>, entityArray: T[]): boolean;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Search for an item that matches the given pattern in an array. Returns true if
 *
 * found, false otherwise.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * 
 * existsBy({ name: "Sam" }, array); // true
 * existsBy({ name: "Harry" }, array); // false
 * @endexample
*/
export function existsBy(pattern: MatchPattern): (entityArray: object[]) => boolean;
export function _existsBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<boolean>;
export function _existsBy(pattern: MatchPattern): (entityArray: NilOr<object[]>) => NilOr<boolean>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Search for an item in the given array using the given id.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * 
 * existsById(2, array); // true Oliver's id is 2
 * existsById(5, array); // false no one has an id of 5
 * @endexample
*/
export function existsById(id: any, entityArray: object[]): boolean;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Search for an item in the given array using the given id.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * 
 * existsById(2, array); // true Oliver's id is 2
 * existsById(5, array); // false no one has an id of 5
 * @endexample
*/
export function existsById(id: any): (entityArray: object[]) => boolean;
export function _existsById(id: any, entityArray: NilOr<object[]>): NilOr<boolean>;
export function _existsById(id: any): (entityArray: NilOr<object[]>) => NilOr<boolean>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Filter an array of items based on pattern matching.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * filterBy({ age: 20 }, array); // [{ name: "Oliver", age: 20 }, { name: "Smith", age: 20 }]
 * filterBy({ age: gt(__, 40) }, array); // [{ name: "George", age: 41 }]
 * filterBy({ age: 50 }, array); // []
 * @endexample
*/
export function filterBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Filter an array of items based on pattern matching.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * filterBy({ age: 20 }, array); // [{ name: "Oliver", age: 20 }, { name: "Smith", age: 20 }]
 * filterBy({ age: gt(__, 40) }, array); // [{ name: "George", age: 41 }]
 * filterBy({ age: 50 }, array); // []
 * @endexample
*/
export function filterBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _filterBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _filterBy(pattern: MatchPattern): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * A function that accepts an object and returns a new object with only the
 *
 * properties that are not null or undefined. This won't work well for arrays.
 *
 * @example 
 *
 * filterNonNull({
 *   firstName: "Oliver",
 *   lastName: null,
 *   phoneNumbers: { home: undefined, office: "1234567890" },
 * });
 * 
 * 
 * {
 *   firstName: "Oliver",
 *   phoneNumbers: { office: "1234567890" },
 * }
 * 
 * @endexample
*/
export function filterNonNull(object: object): object;
export function _filterNonNull(object: NilOr<object>): NilOr<object>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the first item that matches the given pattern from an array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
 * ];
 * 
 * findBy({ name: "Sam" }, array); // returns object corresponding to Sam
 * findBy({ id: 2, address: { pin: 654321 } }, array); // returns object corresponding to Oliver
 * findBy({ id: 3 }, array); // returns undefined
 * @endexample
*/
export function findBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the first item that matches the given pattern from an array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
 * ];
 * 
 * findBy({ name: "Sam" }, array); // returns object corresponding to Sam
 * findBy({ id: 2, address: { pin: 654321 } }, array); // returns object corresponding to Oliver
 * findBy({ id: 3 }, array); // returns undefined
 * @endexample
*/
export function findBy(pattern: MatchPattern): <T>(entityArray: T[]) => T;
export function _findBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<T>;
export function _findBy(pattern: MatchPattern): <T>(entityArray: NilOr<T[]>) => NilOr<T>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find an object having the given id from an array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeFind = 2;
 * 
 * findById(idOfItemToBeFind, array);
 * // { id: 2, name: "Oliver" }
 * @endexample
*/
export function findById<T>(id: any, entityArray: T[]): T;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find an object having the given id from an array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeFind = 2;
 * 
 * findById(idOfItemToBeFind, array);
 * // { id: 2, name: "Oliver" }
 * @endexample
*/
export function findById(id: any): <T>(entityArray: T[]) => T;
export function _findById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T>;
export function _findById(id: any): <T>(entityArray: NilOr<T[]>) => NilOr<T>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the index of an item that matches the pattern from the given array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
 * ];
 * 
 * findIndexBy({ name: "Sam" }, array); // returns 0
 * findIndexBy({ id: 2, address: { pin: 654321 } }, array); // returns 1
 * findIndexBy({ id: 3 }, array); // returns -1
 * @endexample
*/
export function findIndexBy<T>(pattern: MatchPattern<T>, entityArray: T[]): number;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the index of an item that matches the pattern from the given array.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 123456 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 654321 } },
 * ];
 * 
 * findIndexBy({ name: "Sam" }, array); // returns 0
 * findIndexBy({ id: 2, address: { pin: 654321 } }, array); // returns 1
 * findIndexBy({ id: 3 }, array); // returns -1
 * @endexample
*/
export function findIndexBy(pattern: MatchPattern): (entityArray: object[]) => number;
export function _findIndexBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<number>;
export function _findIndexBy(pattern: MatchPattern): (entityArray: NilOr<object[]>) => NilOr<number>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find an index of an item from an array of items based on the id property of
 *
 * entities inside it.
 *
 * @example 
 *
 * const array = [
 *   { id: "1001", name: "Sam" },
 *   { id: "2001", name: "Oliver" },
 * ];
 * 
 * findIndexById("2001", array); // returns 1
 * findIndexById("1001", array); // returns 0
 * findIndexById("3001", array); // returns -1
 * @endexample
*/
export function findIndexById(id: any, entityArray: object[]): number;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find an index of an item from an array of items based on the id property of
 *
 * entities inside it.
 *
 * @example 
 *
 * const array = [
 *   { id: "1001", name: "Sam" },
 *   { id: "2001", name: "Oliver" },
 * ];
 * 
 * findIndexById("2001", array); // returns 1
 * findIndexById("1001", array); // returns 0
 * findIndexById("3001", array); // returns -1
 * @endexample
*/
export function findIndexById(id: any): (entityArray: object[]) => number;
export function _findIndexById(id: any, entityArray: NilOr<object[]>): NilOr<number>;
export function _findIndexById(id: any): (entityArray: NilOr<object[]>) => NilOr<number>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the last item that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * findLastBy({ age: 20 }, array); // { name: "Smith", age: 20 }
 * findLastBy({ name: includes("e") }, array); // { name: "George", age: 41 }
 * @endexample
*/
export function findLastBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the last item that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * findLastBy({ age: 20 }, array); // { name: "Smith", age: 20 }
 * findLastBy({ name: includes("e") }, array); // { name: "George", age: 41 }
 * @endexample
*/
export function findLastBy(pattern: MatchPattern): <T>(entityArray: T[]) => T;
export function _findLastBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<T>;
export function _findLastBy(pattern: MatchPattern): <T>(entityArray: NilOr<T[]>) => NilOr<T>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the last index of item that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * findLastIndexBy({ age: 20 }, array); // returns 3
 * findLastIndexBy({ name: includes("e") }, array); // returns 2
 * @endexample
*/
export function findLastIndexBy(id: any, entityArray: object[]): number;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Find the last index of item that matches the given pattern.
 *
 * @example 
 *
 * const array = [
 *   { name: "Oliver", age: 20 },
 *   { name: "Sam", age: 40 },
 *   { name: "George", age: 41 },
 *   { name: "Smith", age: 20 },
 * ];
 * 
 * findLastIndexBy({ age: 20 }, array); // returns 3
 * findLastIndexBy({ name: includes("e") }, array); // returns 2
 * @endexample
*/
export function findLastIndexBy(id: any): (entityArray: object[]) => number;
export function _findLastIndexBy(id: any, entityArray: NilOr<object[]>): NilOr<number>;
export function _findLastIndexBy(id: any): (entityArray: NilOr<object[]>) => NilOr<number>;
/**
 *
 * Curried: false
 *
 * Failsafe status: not failsafe
 *
 * This function is used to generate a random integer in the given range. If only 1 argument is provided, it is considered as the upper bound.
 *
 * @example 
 *
 * getRandomInt(); // returns a random integer between 0 and 9007199254740991 (MAX_SAFE_INTEGER)
 * getRandomInt(10); // returns a random integer between 0 and 10
 * getRandomInt(1, 5); // returns a random integer between 1 and 5
 * @endexample
*/
export function getRandomInt(a?: number, b?: number): number;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Converts common developer friendly string formats (camelCase, snake_case,
 *
 * dash-case etc) to human readable string.
 *
 * @example 
 *
 * humanize("helloWorld"); // "Hello world"
 * humanize("hello-world"); // "Hello world"
 * humanize("__hello_world"); // "Hello world"
 * humanize("HelloUSA"); // "Hello usa"
 * @endexample
*/
export function humanize(string: string): string;
export function _humanize(string: NilOr<string>): NilOr<string>;
export function isNot(a: any, b: any): boolean;
export function isNot(a: any): (b: any) => boolean;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Returns true if the given value is not empty (includes strings, arrays,
 *
 * objects). False otherwise. (the opposite of isEmpty in ramda)
 *
 * @example 
 *
 * isNotEmpty(""); // returns false
 * isNotEmpty(["a"]); // returns true
 * isNotEMpty({ name: "Oliver" }); //return true
 * @endexample
*/
export const isNotEmpty: (a: any) => boolean;
export function isNotEqualDeep(a: any, b: any): boolean;
export function isNotEqualDeep(a: any): (b: any) => boolean;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Recursively converts the snake cased object keys to camel case
 *
 * @example 
 *
 * keysToCamelCase({
 *   first_name: "Oliver",
 *   last_name: "Smith",
 *   address: { city: "Miami", phone_number: "389791382" },
 * });
 * 
 * {
 *   address: {city: 'Miami', phoneNumber: '389791382'},
 *   firstName: "Oliver",
 *   lastName: "Smith",
 * }
 * 
 * @endexample
*/
export function keysToCamelCase(object: any): any;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Recursively converts the camel cased object keys to snake case.
 *
 * @example 
 *
 * keysToSnakeCase({
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   firstName: "Oliver",
 *   lastName: "Smith",
 * });
 * 
 * {
 *   first_name: "Oliver",
 *   last_name: "Smith",
 *   address: { city: "Miami", phone_number: "389791382" },
 * }
 * 
 * @endexample
*/
export function keysToSnakeCase(object: any): any;
/**
 *
 * Curried: true
 *
 * Failsafe status: failsafe by default
 *
 * Checks whether the given object matches the given pattern. Each primitive value (int, boolean, string, etc.) in the pattern should be same as the corresponding value in the object (deeply) and all conditions (functions) should be satisfied for a match.
 *
 * @example 
 *
 * const user = {
 *   firstName: "Oliver",
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   cars: [{ brand: "Ford" }, { brand: "Honda" }],
 * };
 * 
 * matches({ firstName: "Oliver" }, user); // true
 * matches({ address: { city: "Miami" } }, user); // true
 * matches({ cars: [{ brand: "Ford" }] }, user); // true
 * matches({ firstName: "Sam" }, user); // false
 * matches({ address: { country: "US" } }, user); // false
 * matches({ cars: [{ brand: "Honda" }] }, user); // false
 * // array index as object key
 * matches({ cars: { 1: { brand: "Honda" } } }, user); // true
 * // conditional functions
 * matches({ cars: arr => arr.length === 2 }, user); // true
 * // point-free functions with ramda
 * matches({ firstName: startsWith("O") }, user); // true
 * @endexample
*/
export function matches<T>(pattern: MatchPattern<T>, data: T): boolean;
/**
 *
 * Curried: true
 *
 * Failsafe status: failsafe by default
 *
 * Checks whether the given object matches the given pattern. Each primitive value (int, boolean, string, etc.) in the pattern should be same as the corresponding value in the object (deeply) and all conditions (functions) should be satisfied for a match.
 *
 * @example 
 *
 * const user = {
 *   firstName: "Oliver",
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   cars: [{ brand: "Ford" }, { brand: "Honda" }],
 * };
 * 
 * matches({ firstName: "Oliver" }, user); // true
 * matches({ address: { city: "Miami" } }, user); // true
 * matches({ cars: [{ brand: "Ford" }] }, user); // true
 * matches({ firstName: "Sam" }, user); // false
 * matches({ address: { country: "US" } }, user); // false
 * matches({ cars: [{ brand: "Honda" }] }, user); // false
 * // array index as object key
 * matches({ cars: { 1: { brand: "Honda" } } }, user); // true
 * // conditional functions
 * matches({ cars: arr => arr.length === 2 }, user); // true
 * // point-free functions with ramda
 * matches({ firstName: startsWith("O") }, user); // true
 * @endexample
*/
export function matches(pattern: MatchPattern): (data: any) => boolean;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Modify all items using modifier function based on a pattern passed as an
 *
 * argument to the function.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyBy({ name: "Oliver" }, modifier, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 *  
 * @endexample
*/
export function modifyBy<T>(pattern: MatchPattern<T>, modifier: (previous: T) => T, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Modify all items using modifier function based on a pattern passed as an
 *
 * argument to the function.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyBy({ name: "Oliver" }, modifier, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 *  
 * @endexample
*/
export function modifyBy<T>(pattern: MatchPattern<T>, modifier: (previous: T) => T): (entityArray: T[]) => T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Modify all items using modifier function based on a pattern passed as an
 *
 * argument to the function.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyBy({ name: "Oliver" }, modifier, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 *  
 * @endexample
*/
export function modifyBy(pattern: MatchPattern): <T>(modifier: (previous: T) => T, entityArray: T[]) => T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Modify all items using modifier function based on a pattern passed as an
 *
 * argument to the function.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyBy({ name: "Oliver" }, modifier, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "OLIVER"}]
 *  
 * @endexample
*/
export function modifyBy(pattern: MatchPattern): <T>(modifier: (previous: T) => T) => (entityArray: T[]) => T[];
export function _modifyBy<T>(pattern: MatchPattern<T>, modifier: (previous: T) => T, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _modifyBy<T>(pattern: MatchPattern<T>, modifier: (previous: T) => T): (entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyBy(pattern: MatchPattern): <T>(modifier: (previous: T) => T, entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyBy(pattern: MatchPattern): <T>(modifier: (previous: T) => T) => (entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Applies the modifier function on the item having the given id in an array and
 *
 * returns a new array with the return value of the modifier function in the index
 *
 * of the match.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeModified = 2;
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyById(idOfItemToBeModified, modifier, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
 * 
 * @endexample
*/
export function modifyById<T>(id: any, modifier: (previous: T) => T, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Applies the modifier function on the item having the given id in an array and
 *
 * returns a new array with the return value of the modifier function in the index
 *
 * of the match.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeModified = 2;
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyById(idOfItemToBeModified, modifier, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
 * 
 * @endexample
*/
export function modifyById<T>(id: any, modifier: (previous: T) => T): (entityArray: T[]) => T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Applies the modifier function on the item having the given id in an array and
 *
 * returns a new array with the return value of the modifier function in the index
 *
 * of the match.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeModified = 2;
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyById(idOfItemToBeModified, modifier, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
 * 
 * @endexample
*/
export function modifyById(id: any): <T>(modifier: (previous: T) => T, entityArray: T[]) => T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Applies the modifier function on the item having the given id in an array and
 *
 * returns a new array with the return value of the modifier function in the index
 *
 * of the match.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeModified = 2;
 * const modifier = item => assoc("name", item.name.toUpperCase(), item);
 * 
 * modifyById(idOfItemToBeModified, modifier, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 2, name: "OLIVER" }]
 * 
 * @endexample
*/
export function modifyById(id: any): <T>(modifier: (previous: T) => T) => (entityArray: T[]) => T[];
export function _modifyById<T>(id: any, modifier: (previous: T) => T, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _modifyById<T>(id: any, modifier: (previous: T) => T): (entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyById(id: any): <T>(modifier: (previous: T) => T, entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyById(id: any): <T>(modifier: (previous: T) => T) => (entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * A "no-operation" function, which does nothing and returns nothing (undefined).
 *
*/
export function noop(...args: any[]): void;
export function notEquals(a: any, b: any): boolean;
export function notEquals(a: any): (b: any) => boolean;
export function notEqualsDeep(a: any, b: any): boolean;
export function notEqualsDeep(a: any): (b: any) => boolean;
/**
 *
 * Curried: false
 *
 * Failsafe status: not failsafe
 *
 * This function accepts a variable number of arguments and returns a random
 *
 * element from the list of arguments.
 *
 * @example 
 *
 * randomPick("arg1", "arg2", "arg3", "arg4", "arg5");
 * 
 * // output: a random element from the list "arg1", "arg2", "arg3", "arg4" and "arg5"
 * @endexample
*/
export function randomPick<T>(...args: T[]): T;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Remove all items that matches the given pattern from an array of items.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * 
 * removeBy({ name: "Sam" }, array); // removes Sam
 * removeBy({ id: 2, address: { pin: 654321 } }, array); // removes Oliver
 * removeBy({ id: 3 }, array); // does nothing
 * @endexample
*/
export function removeBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Remove all items that matches the given pattern from an array of items.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * 
 * removeBy({ name: "Sam" }, array); // removes Sam
 * removeBy({ id: 2, address: { pin: 654321 } }, array); // removes Oliver
 * removeBy({ id: 3 }, array); // does nothing
 * @endexample
*/
export function removeBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _removeBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _removeBy(pattern: MatchPattern): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Return a new array with the item with the given id removed.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeRemoved = 2;
 * 
 * removeById(idOfItemToBeRemoved, array);
 * // [{ id: 1, name: "Sam" }]
 * @endexample
*/
export function removeById<T>(id: any, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Return a new array with the item with the given id removed.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeRemoved = 2;
 * 
 * removeById(idOfItemToBeRemoved, array);
 * // [{ id: 1, name: "Sam" }]
 * @endexample
*/
export function removeById(id: any): <T>(entityArray: T[]) => T[];
export function _removeById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _removeById(id: any): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Renames the specified keys keeping its value the same for all elements of an
 *
 * array. This creates a new instance and doesn't mutate the array.
 *
 * @example 
 *
 * const data = [
 *   { id: 1, name: "Tomato", quantity: 10 },
 *   { id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * // rename name to label and id to value
 * renameKeys({ name: "label", id: "value" }, data);
 * 
 * 
 * output: [
 *   { label: "Tomato", value: 1, quantity: 10 },
 *   { label: "Potato", value: 2, quantity: 20 },
 * ];
 * 
 * @endexample
*/
export function renameKeys<T, M extends { [key in keyof Partial<T>]: string }>(keyMap: M, entityArray: T[]): (Omit<T, keyof M> & {
  [key: string]: any;
})[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Renames the specified keys keeping its value the same for all elements of an
 *
 * array. This creates a new instance and doesn't mutate the array.
 *
 * @example 
 *
 * const data = [
 *   { id: 1, name: "Tomato", quantity: 10 },
 *   { id: 2, name: "Potato", quantity: 20 },
 * ];
 * 
 * // rename name to label and id to value
 * renameKeys({ name: "label", id: "value" }, data);
 * 
 * 
 * output: [
 *   { label: "Tomato", value: 1, quantity: 10 },
 *   { label: "Potato", value: 2, quantity: 20 },
 * ];
 * 
 * @endexample
*/
export function renameKeys<M extends {
  [key: string]: string;
}>(keyMap: M): <T>(entityArray: T[]) => (Omit<T, keyof M> & {
  [key: string]: any;
})[];
export function _renameKeys<T, M extends { [key in keyof Partial<T>]: string }>(keyMap: M, entityArray: NilOr<T[]>): NilOr<(Omit<T, keyof M> & {
  [key: string]: any;
})[]>;
export function _renameKeys<M extends {
  [key: string]: string;
}>(keyMap: M): <T>(entityArray: NilOr<T[]>) => NilOr<(Omit<T, keyof M> & {
  [key: string]: any;
})[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Replace all items that matches the given pattern with the given item.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const newItem = { id: 2, name: "John" };
 * 
 * replaceBy({ name: "Oliver" }, newItem, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "John"}]
 *  
 * @endexample
*/
export function replaceBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Replace all items that matches the given pattern with the given item.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam", address: { street: "First street", pin: 101283 } },
 *   { id: 2, name: "Oliver", address: { street: "Second street", pin: 998472 } },
 * ];
 * const newItem = { id: 2, name: "John" };
 * 
 * replaceBy({ name: "Oliver" }, newItem, array);
 * 
 * [{id: 1, name: "Sam"}, {id: 2, name: "John"}]
 *  
 * @endexample
*/
export function replaceBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _replaceBy<T>(pattern: MatchPattern<T>, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _replaceBy(pattern: MatchPattern): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Returns a new array with the item having the given id is replaced with the given
 *
 * object.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeReplaced = 2;
 * const newItem = { id: 3, name: "John" };
 * 
 * replaceById(idOfItemToBeReplaced, newItem, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 3, name: "John" }]
 * 
 * @endexample
*/
export function replaceById<T>(id: any, entityArray: T[]): T[];
/**
 *
 * Curried: true
 *
 * Failsafe status: alternative available
 *
 * Returns a new array with the item having the given id is replaced with the given
 *
 * object.
 *
 * @example 
 *
 * const array = [
 *   { id: 1, name: "Sam" },
 *   { id: 2, name: "Oliver" },
 * ];
 * const idOfItemToBeReplaced = 2;
 * const newItem = { id: 3, name: "John" };
 * 
 * replaceById(idOfItemToBeReplaced, newItem, array);
 * 
 * [{ id: 1, name: "Sam" }, { id: 3, name: "John" }]
 * 
 * @endexample
*/
export function replaceById(id: any): <T>(entityArray: T[]) => T[];
export function _replaceById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _replaceById(id: any): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Recursively converts the camel cased object keys to snake case. It will gracefully handle special objects like Date, dayjs instance etc.
 *
 * While converting, this function checks if the function named toJSON is present in the value (if the value is an object) and if found, it calls the function and uses the return value for further processing.
 *
 * Example 1:
 *
 * @example 
 *
 * serializeKeysToSnakeCase({
 *   name: { toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }) },
 *   phoneNumber: "389791382",
 * });
 * 
 * 
 * {
 *   name: { first_name: "Oliver", last_name: "Smith" },
 *   phone_number: "389791382",
 * }
 * 
 * @endexample
 * Example 2: (Real world example)
 *
 * @example 
 *
 * serializeKeysToSnakeCase({
 *   address: { city: "Miami", phoneNumber: "389791382" },
 *   firstName: "Oliver",
 *   lastName: "Smith",
 *   dob: new Date("1980-01-01"),
 * });
 * 
 * 
 * {
 *   first_name: "Oliver",
 *   last_name: "Smith",
 *   address: { city: "Miami", phone_number: "389791382" },
 *   dob: "1980-01-01T00:00:00.000Z",
 * }
 * 
 * @endexample
 * In the above example, the value of dob is an date object and has toJSON method present in it. The toJSON method returns the date in ISO format which will be used for further processing instead of recursively converting the original date object.
 *
*/
export function serializeKeysToSnakeCase(object: object): object;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Creates a ready-to-be-serialized version of the given object by recursively
 *
 * going to all the object properties and replacing it with its JSON serializable
 *
 * version.
 *
 * This is helpful when serializing Date objects, dayjs objects etc.
 *
 * @example 
 *
 * preprocessForSerialization(dayjs("1980-01-01")); // returns "1980-01-01T00:00:00.000Z"
 * preprocessForSerialization({
 *   toJSON: () => ({ firstName: "Oliver", lastName: "Smith" }),
 * }); // returns { firstName: "Oliver", lastName: "Smith" }
 * @endexample
*/
export function preprocessForSerialization(object: object): object;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Converts a given string to slug.
 *
 * @example 
 *
 * slugify("My quiz"); // "my-quiz"
 * slugify("my-quiz"); // "my-quiz"
 * slugify("-----my----quiz"); // "my-quiz"
 * slugify("Me & my quiz"); // "me-and-my-quiz"
 * slugify("my!@#$%^*(quiz"); // "myquiz"
 * @endexample
*/
export function slugify(string: string): string;
export function _slugify(string: NilOr<string>): NilOr<string>;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Converts snake_case string to camelCase.
 *
 * @example 
 *
 * snakeToCamelCase("first_name"); // "firstName"
 * @endexample
*/
export function snakeToCamelCase(string: string): string;
export function _snakeToCamelCase(string: NilOr<string>): NilOr<string>;
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * This function takes a string as an argument and returns an object with keys
 *
 * "label" and "value".
 *
 * @example 
 *
 * toLabelAndValue("test");
 * 
 * // output: {label: "test", value: "test"}
 * @endexample
*/
export function toLabelAndValue(string: string): {
  label: string;
  value: string;
};
/**
 *
 * Curried: false
 *
 * Failsafe status: failsafe by default
 *
 * Passes each key and value of the given object (recursively) to the given
 *
 * transformer function. Reconstructs an object of the same hierarchy with the key
 *
 * value pair the transformer function returns.
 *
 * Usage:
 *
 * @example 
 *
 * transformObjectDeep(
 *   {
 *     name: "Oliver",
 *     email: "oliver@example.com",
 *     address: { street: "First street", pin: 123456 },
 *   },
 *   (key, value) => [key.toUpperCase(), value]
 * );
 * 
 * output: {
 *   NAME: "Oliver",
 *   EMAIL: "oliver@example.com",
 *   ADDRESS: { STREET: "First street", PIN: 123456 },
 * }
 * 
 * 
 * transformObjectDeep(
 *   [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9],
 *   ],
 *   (key, value) => [key, value],
 *   item => (Array.isArray(item) ? item.slice(1) : item)
 * );
 * 
 * output: [[5, 6], [8, 9]]
 * 
 * @endexample
*/
export function transformObjectDeep(object: object, keyValueTransformer: (key: string | number | symbol, object: any) => any[], objectPreProcessor?: (object: any) => any): object;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Truncate the string with ... if it is longer than specified string length.
 *
 * @example 
 *
 * truncate("Hello World", 5); //  "Hello..."
 * truncate("Hello World", 15); // "Hello World"
 * @endexample
*/
export function truncate(string: string, length: number): string;
/**
 *
 * Curried: false
 *
 * Failsafe status: alternative available
 *
 * Truncate the string with ... if it is longer than specified string length.
 *
 * @example 
 *
 * truncate("Hello World", 5); //  "Hello..."
 * truncate("Hello World", 15); // "Hello World"
 * @endexample
*/
export function truncate(string: NilOr<string>, length: number): NilOr<string>;
export function nullSafe<T extends Function>(func: T): (...args: any) => ReturnType<T>;
export function isNotPresent(object: any): boolean;
export function isPresent(object: any): boolean;