# neeto-cist

[![BuildStatus](https://neeto-engineering.neetoci.com/badges/neeto-cist/workflows/default.svg)](https://neeto-engineering.neetoci.com/projects/neeto-cist)

A collection of common utility functions used across all our
[neeto](https://neeto.com) products. Try out the utility functions live at
[neetoCommons REPL](https://neeto-cist.neeto.com/).

## Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [List of Pure Functions](#list-of-pure-functions)
  - [Development](#development)

## Installation

Install from npm:

```bash
yarn add @bigbinary/neeto-cist@latest
```

Install the peer dependencies:

```bash
yarn add ramda
```

## Usage

You can import all functions from `@bigbinary/neeto-cist`.

```js
import { slugify } from "@bigbinary/neeto-cist";
```

Exports several general utility functions that are used throughout neeto
products. The functions are structured in a manner reminiscent of Ramda,
enabling seamless interoperability among them.

Pure functions were designed to be fail fast. If you call `findById(10, null)`,
it will throw error saying that it can't iterate through `null`.

But for most such pure functions, there is a failsafe alternative available. The
failsafe alternative function will be prefixed with `_`. Example:
`_findById(10, null)` returns `null`, `_findById(10, undefined)` returns
`undefined` and `_findById(10, [{ id: 10 }])` returns `{ id: 10 }`.

## List of Pure Functions

<table>
<thead>
<tr>
<th>

Array operations

</th>
<th>

Object operations

</th>
<th>

String operations

</th>
<th>

General utility functions

</th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: top;">

- [findById](./arrays/findById.md)
- [findIndexById](./arrays/findIndexById.md)
- [removeById](./arrays/removeById.md)
- [replaceById](./arrays/replaceById.md)
- [modifyById](./arrays/modifyById.md)
- [existsById](./arrays/existsById.md)

---

- [findBy](./arrays/findBy.md)
- [findIndexBy](./arrays/findIndexBy.md)
- [removeBy](./arrays/removeBy.md)
- [replaceBy](./arrays/replaceBy.md)
- [modifyBy](./arrays/modifyBy.md)
- [existsBy](./arrays/existsBy.md)
- [findLastBy](./arrays/findLastBy.md)
- [findLastIndexBy](./arrays/findLastIndexBy.md)
- [filterBy](./arrays/filterBy.md)
- [countBy](./arrays/countBy.md)

---

- [renameKeys](./arrays/renameKeys.md)
- [copyKeys](./arrays/copyKeys.md)
- [copyKeysDeep](./arrays/copyKeysDeep.md)

</td>
<td  style="vertical-align: top;">

- [matchesImpl](./objects/matchesImpl.md)
- [transformObjectDeep](./objects/transformObjectDeep.md)
- [keysToCamelCase](./objects/keysToCamelCase.md)
- [keysToSnakeCase](./objects/keysToSnakeCase.md)
- [serializeKeysToSnakeCase](./objects/serializeKeysToSnakeCase.md)
- [preprocessForSerialization](./objects/preprocessForSerialization.md)
- [deepFreezeObject](./objects/deepFreezeObject.md)
- [matches](./objects/matches.md)
- [filterNonNull](./objects/filterNonNull.md)

</td>
<td  style="vertical-align: top;">

- [slugify](./strings/slugify.md)
- [humanize](./strings/humanize.md)
- [snakeToCamelCase](./strings/snakeToCamelCase.md)
- [camelToSnakeCase](./strings/camelToSnakeCase.md)
- [capitalize](./strings/capitalize.md)
- [hyphenate](./strings/hyphenate.md)
- [truncate](./strings/truncate.md)

</td>
<td  style="vertical-align: top;">

- [nullSafe](./general/nullSafe.md)
- [noop](./general/noop.md)
- [toLabelAndValue](./general/toLabelAndValue.md)
- [getRandomInt](./general/getRandomInt.md)
- [randomPick](./general/randomPick.md)
- [dynamicArray](./general/dynamicArray.md)
- [isNotEmpty](./general/isNotEmpty.md)
- [isNot (notEquals)](./general/isNot.md)
- [isNotPresent](./general/isNotPresent.md)
- [isPresent](./general/isPresent.md)
- [isNotEqualDeep (alias notEqualsDeep)](./general/isNotEqualDeep.md)
- [modifyWithImmer](./general/modifyWithImmer.md)
</td>
<tr>
</tbody>
</table>

## Development

- [Development instructions](./docs/general/development-instructions.md)
- [Building and releasing](./docs/general/building-and-releasing.md)
