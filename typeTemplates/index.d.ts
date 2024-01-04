import { Draft } from "immer";

export type Primitives = symbol | string | number | boolean | null | undefined;
export type ObjectAndPrimitives = Primitives | object;
type KeyType = string | number | symbol;
type NilOr<T> = T | null | undefined;

type Matchable<Obj, Parent, key extends keyof Obj> =
  | ((object: Obj[key], parent: Parent) => boolean)
  | MatchPattern<Obj[key], Parent>
  | Primitives;

type MatchPattern<Obj = any, Parent = Obj> = Obj extends any[]
  ?
      | Matchable<Obj, Parent, number>[]
      | { [key: number]: Matchable<Obj, Parent, number> }
  : Obj extends Primitives
  ? Obj
  :
      | {
          [key in keyof Partial<Obj>]: Matchable<Obj, Parent, key>;
        } & {
          [key: KeyType]: Matchable<any, Parent, KeyType>;
        };

export function camelToSnakeCase(string: string): string;
export function _camelToSnakeCase(string: NilOr<string>): NilOr<string>;

export function capitalize(string: string): string;
export function _capitalize(string: NilOr<string>): NilOr<string>;

export function copyKeys<T>(
  keyMap: { [key in keyof Partial<T>]: string },
  objectArray: T[]
): (T & { [key: string]: any })[];
export function copyKeys(keyMap: {
  [key: string]: string;
}): <T>(objectArray: T[]) => (T & { [key: string]: any })[];
export function _copyKeys<T>(
  keyMap: { [key in keyof Partial<T>]: string },
  objectArray: NilOr<T[]>
): NilOr<(T & { [key: string]: any })[]>;
export function _copyKeys(keyMap: {
  [key: string]: string;
}): <T>(objectArray: NilOr<T[]>) => NilOr<(T & { [key: string]: any })[]>;

export function copyKeysDeep(keyMap: object, objectArray: object[]): object[];
export function copyKeysDeep(
  keyMap: object
): (objectArray: object[]) => object[];
export function _copyKeysDeep(
  keyMap: object,
  objectArray: NilOr<object[]>
): NilOr<object[]>;
export function _copyKeysDeep(
  keyMap: object
): (objectArray: NilOr<object[]>) => NilOr<object[]>;

export function countBy<T>(pattern: MatchPattern<T>, entityArray: T[]): number;
export function countBy(
  pattern: MatchPattern
): (entityArray: object[]) => number;
export function _countBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<number>;
export function _countBy(
  pattern: MatchPattern
): (entityArray: NilOr<object[]>) => NilOr<number>;

export function deepFreezeObject<T>(object: T): Readonly<T>;

export function dynamicArray<T>(
  count: number,
  elementGenerator: (index: number) => T
): T[];

export function existsBy<T>(
  pattern: MatchPattern<T>,
  entityArray: T[]
): boolean;
export function existsBy(
  pattern: MatchPattern
): (entityArray: object[]) => boolean;

export function _existsBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<boolean>;
export function _existsBy(
  pattern: MatchPattern
): (entityArray: NilOr<object[]>) => NilOr<boolean>;

export function existsById(id: any, entityArray: object[]): boolean;
export function existsById(id: any): (entityArray: object[]) => boolean;
export function _existsById(
  id: any,
  entityArray: NilOr<object[]>
): NilOr<boolean>;
export function _existsById(
  id: any
): (entityArray: NilOr<object[]>) => NilOr<boolean>;

export function filterBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
export function filterBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _filterBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<T[]>;
export function _filterBy(
  pattern: MatchPattern
): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;

export function filterNonNull(object: object): object;
export function _filterNonNull(object: NilOr<object>): NilOr<object>;

export function findBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T;
export function findBy(pattern: MatchPattern): <T>(entityArray: T[]) => T;
export function _findBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<T>;
export function _findBy(
  pattern: MatchPattern
): <T>(entityArray: NilOr<T[]>) => NilOr<T>;

export function findById<T>(id: any, entityArray: T[]): T;
export function findById(id: any): <T>(entityArray: T[]) => T;
export function _findById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T>;
export function _findById(id: any): <T>(entityArray: NilOr<T[]>) => NilOr<T>;

export function findIndexBy<T>(
  pattern: MatchPattern<T>,
  entityArray: T[]
): number;
export function findIndexBy(
  pattern: MatchPattern
): (entityArray: object[]) => number;
export function _findIndexBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<number>;
export function _findIndexBy(
  pattern: MatchPattern
): (entityArray: NilOr<object[]>) => NilOr<number>;

export function findIndexById(id: any, entityArray: object[]): number;
export function findIndexById(id: any): (entityArray: object[]) => number;
export function _findIndexById(
  id: any,
  entityArray: NilOr<object[]>
): NilOr<number>;
export function _findIndexById(
  id: any
): (entityArray: NilOr<object[]>) => NilOr<number>;

export function findLastBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T;
export function findLastBy(pattern: MatchPattern): <T>(entityArray: T[]) => T;
export function _findLastBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<T>;
export function _findLastBy(
  pattern: MatchPattern
): <T>(entityArray: NilOr<T[]>) => NilOr<T>;

export function findLastIndexBy(id: any, entityArray: object[]): number;
export function findLastIndexBy(id: any): (entityArray: object[]) => number;
export function _findLastIndexBy(
  id: any,
  entityArray: NilOr<object[]>
): NilOr<number>;
export function _findLastIndexBy(
  id: any
): (entityArray: NilOr<object[]>) => NilOr<number>;

export function getRandomInt(a?: number, b?: number): number;
export function humanize(string: string): string;
export function _humanize(string: NilOr<string>): NilOr<string>;

export function hyphenate(string: string): string;
export function _hyphenate(string: NilOr<string>): NilOr<string>;

export function isNot(a: any, b: any): boolean;
export function isNot(a: any): (b: any) => boolean;

export const isNotEmpty: (a: any) => boolean;

export function isNotEqualDeep(a: any, b: any): boolean;
export function isNotEqualDeep(a: any): (b: any) => boolean;

export function keysToCamelCase(object: any): any;
export function keysToSnakeCase(object: any): any;

export function matches<T>(pattern: MatchPattern<T>, data: T): boolean;
export function matches(pattern: MatchPattern): (data: any) => boolean;

export function modifyBy<T>(
  pattern: MatchPattern<T>,
  modifier: (previous: T) => T,
  entityArray: T[]
): T[];
export function modifyBy<T>(
  pattern: MatchPattern<T>,
  modifier: (previous: T) => T
): (entityArray: T[]) => T[];
export function modifyBy(
  pattern: MatchPattern
): <T>(modifier: (previous: T) => T, entityArray: T[]) => T[];
export function modifyBy(
  pattern: MatchPattern
): <T>(modifier: (previous: T) => T) => (entityArray: T[]) => T[];
export function _modifyBy<T>(
  pattern: MatchPattern<T>,
  modifier: (previous: T) => T,
  entityArray: NilOr<T[]>
): NilOr<T[]>;
export function _modifyBy<T>(
  pattern: MatchPattern<T>,
  modifier: (previous: T) => T
): (entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyBy(
  pattern: MatchPattern
): <T>(modifier: (previous: T) => T, entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyBy(
  pattern: MatchPattern
): <T>(modifier: (previous: T) => T) => (entityArray: NilOr<T[]>) => NilOr<T[]>;

export function modifyById<T>(
  id: any,
  modifier: (previous: T) => T,
  entityArray: T[]
): T[];
export function modifyById<T>(
  id: any,
  modifier: (previous: T) => T
): (entityArray: T[]) => T[];
export function modifyById(
  id: any
): <T>(modifier: (previous: T) => T, entityArray: T[]) => T[];
export function modifyById(
  id: any
): <T>(modifier: (previous: T) => T) => (entityArray: T[]) => T[];
export function _modifyById<T>(
  id: any,
  modifier: (previous: T) => T,
  entityArray: NilOr<T[]>
): NilOr<T[]>;
export function _modifyById<T>(
  id: any,
  modifier: (previous: T) => T
): (entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyById(
  id: any
): <T>(modifier: (previous: T) => T, entityArray: NilOr<T[]>) => NilOr<T[]>;
export function _modifyById(
  id: any
): <T>(modifier: (previous: T) => T) => (entityArray: NilOr<T[]>) => NilOr<T[]>;

export function noop(...args: any[]): void;

export function notEquals(a: any, b: any): boolean;
export function notEquals(a: any): (b: any) => boolean;

export function notEqualsDeep(a: any, b: any): boolean;
export function notEqualsDeep(a: any): (b: any) => boolean;

export function randomPick<T>(...args: T[]): T;

export function removeBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
export function removeBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _removeBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<T[]>;
export function _removeBy(
  pattern: MatchPattern
): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;

export function removeById<T>(id: any, entityArray: T[]): T[];
export function removeById(id: any): <T>(entityArray: T[]) => T[];
export function _removeById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _removeById(
  id: any
): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;

export function renameKeys<T, M extends { [key in keyof Partial<T>]: string }>(
  keyMap: M,
  entityArray: T[]
): (Omit<T, keyof M> & { [key: string]: any })[];
export function renameKeys<M extends { [key: string]: string }>(
  keyMap: M
): <T>(entityArray: T[]) => (Omit<T, keyof M> & { [key: string]: any })[];
export function _renameKeys<T, M extends { [key in keyof Partial<T>]: string }>(
  keyMap: M,
  entityArray: NilOr<T[]>
): NilOr<(Omit<T, keyof M> & { [key: string]: any })[]>;
export function _renameKeys<M extends { [key: string]: string }>(
  keyMap: M
): <T>(
  entityArray: NilOr<T[]>
) => NilOr<(Omit<T, keyof M> & { [key: string]: any })[]>;

export function replaceBy<T>(pattern: MatchPattern<T>, entityArray: T[]): T[];
export function replaceBy(pattern: MatchPattern): <T>(entityArray: T[]) => T[];
export function _replaceBy<T>(
  pattern: MatchPattern<T>,
  entityArray: NilOr<T[]>
): NilOr<T[]>;
export function _replaceBy(
  pattern: MatchPattern
): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;

export function replaceById<T>(id: any, entityArray: T[]): T[];
export function replaceById(id: any): <T>(entityArray: T[]) => T[];
export function _replaceById<T>(id: any, entityArray: NilOr<T[]>): NilOr<T[]>;
export function _replaceById(
  id: any
): <T>(entityArray: NilOr<T[]>) => NilOr<T[]>;

export function serializeKeysToSnakeCase(object: object): object;
export function preprocessForSerialization(object: object): object;

export function slugify(string: string): string;
export function _slugify(string: NilOr<string>): NilOr<string>;

export function snakeToCamelCase(string: string): string;
export function _snakeToCamelCase(string: NilOr<string>): NilOr<string>;

export function toLabelAndValue(string: string): {
  label: string;
  value: string;
};
export function transformObjectDeep(
  object: object,
  keyValueTransformer: (key: string | number | symbol, object: any) => any[],
  objectPreProcessor?: (object: any) => any
): object;

export function truncate(string: string, length: number): string;
export function _truncate(string: NilOr<string>, length: number): NilOr<string>;

export function nullSafe<T extends (...args: any) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T>;

export function isNotPresent(object: any): boolean;
export function isPresent(object: any): boolean;

export function modifyWithImmer<T>(
  modifier: (draft: Draft<T>) => void,
  data: T
): T;

export function modifyWithImmer<T>(
  modifier: (draft: Draft<T>) => void
): (data: T) => T;
