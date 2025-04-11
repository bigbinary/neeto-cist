# neeto-cist

[![BuildStatus](https://neeto-engineering.neetoci.com/badges/neeto-cist/workflows/default.svg)](https://neeto-engineering.neetoci.com/projects/neeto-cist)

A collection of common utility functions used across all our
[neeto](https://neeto.com) products. Try out the utility functions live at
[neetoCommons REPL](https://neeto-cist.neeto.com/). 

## Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Available functions](#available-functions)
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

## Available functions

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

- [findById](docs/pure/arrays/findById.md)
- [findIndexById](docs/pure/arrays/findIndexById.md)
- [removeById](docs/pure/arrays/removeById.md)
- [replaceById](docs/pure/arrays/replaceById.md)
- [modifyById](docs/pure/arrays/modifyById.md)
- [existsById](docs/pure/arrays/existsById.md)

---

- [findBy](docs/pure/arrays/findBy.md)
- [findIndexBy](docs/pure/arrays/findIndexBy.md)
- [removeBy](docs/pure/arrays/removeBy.md)
- [replaceBy](docs/pure/arrays/replaceBy.md)
- [modifyBy](docs/pure/arrays/modifyBy.md)
- [existsBy](docs/pure/arrays/existsBy.md)
- [findLastBy](docs/pure/arrays/findLastBy.md)
- [findLastIndexBy](docs/pure/arrays/findLastIndexBy.md)
- [filterBy](docs/pure/arrays/filterBy.md)
- [countBy](docs/pure/arrays/countBy.md)

---

- [renameKeys](docs/pure/arrays/renameKeys.md)
- [copyKeys](docs/pure/arrays/copyKeys.md)
- [copyKeysDeep](docs/pure/arrays/copyKeysDeep.md)

</td>
<td  style="vertical-align: top;">

- [matchesImpl](docs/pure/objects/matchesImpl.md)
- [transformObjectDeep](docs/pure/objects/transformObjectDeep.md)
- [keysToCamelCase](docs/pure/objects/keysToCamelCase.md)
- [keysToSnakeCase](docs/pure/objects/keysToSnakeCase.md)
- [serializeKeysToSnakeCase](docs/pure/objects/serializeKeysToSnakeCase.md)
- [preprocessForSerialization](docs/pure/objects/preprocessForSerialization.md)
- [deepFreezeObject](docs/pure/objects/deepFreezeObject.md)
- [matches](docs/pure/objects/matches.md)
- [filterNonNull](docs/pure/objects/filterNonNull.md)

</td>
<td  style="vertical-align: top;">

- [slugify](docs/pure/strings/slugify.md)
- [humanize](docs/pure/strings/humanize.md)
- [snakeToCamelCase](docs/pure/strings/snakeToCamelCase.md)
- [camelToSnakeCase](docs/pure/strings/camelToSnakeCase.md)
- [capitalize](docs/pure/strings/capitalize.md)
- [hyphenate](docs/pure/strings/hyphenate.md)
- [truncate](docs/pure/strings/truncate.md)

</td>
<td  style="vertical-align: top;">

- [nullSafe](docs/pure/general/nullSafe.md)
- [noop](docs/pure/general/noop.md)
- [toLabelAndValue](docs/pure/general/toLabelAndValue.md)
- [getRandomInt](docs/pure/general/getRandomInt.md)
- [randomPick](docs/pure/general/randomPick.md)
- [dynamicArray](docs/pure/general/dynamicArray.md)
- [isNotEmpty](docs/pure/general/isNotEmpty.md)
- [isNot (notEquals)](docs/pure/general/isNot.md)
- [isNotPresent](docs/pure/general/isNotPresent.md)
- [isPresent](docs/pure/general/isPresent.md)
- [isNotEqualDeep (alias notEqualsDeep)](docs/pure/general/isNotEqualDeep.md)
- [modifyWithImmer](docs/pure/general/modifyWithImmer.md)
</td>
<tr>
</tbody>
</table>

## Development

- [Development instructions](./docs/general/development-instructions.md)
- [API documentation logistics](./docs/general/api-documentation-logistics.md)
- [Building and releasing](./docs/general/building-and-releasing.md)
