# neeto-cist

[![BuildStatus](https://neeto-engineering.neetoci.com/badges/neeto-cist/workflows/default.svg)](https://neeto-engineering.neetoci.com/projects/neeto-cist)

A collection of common utility functions used across all our
[neeto](https://neeto.com) products. Try out the utility functions live at
[neetoCommons REPL](https://neeto-cist.neeto.com/).

## Installation Instructions

Install from npm:

```bash
yarn add @bigbinary/neeto-cist
```

Install the peer dependencies:

```bash
yarn add ramda
```

## List of Pure Functions

<table>
<thead>
<tr>
<th>

Name

</th>
</tr>
</thead>
<tbody>
<tr></tr>
<tr></tr>
<tr>
<td style="vertical-align: top;">

- [findById](./docs/pure/arrays.md#findbyid)
- [findIndexById](./docs/pure/arrays.md#findindexbyid)
- [removeById](./docs/pure/arrays.md#removebyid)
- [replaceById](./docs/pure/arrays.md#replacebyid)
- [modifyById](./docs/pure/arrays.md#modifybyid)
- [existsById](./docs/pure/arrays.md#existsbyid)
- [findBy](./docs/pure/arrays.md#findby)
- [findIndexBy](./docs/pure/arrays.md#findindexby)
- [removeBy](./docs/pure/arrays.md#removeby)
- [replaceBy](./docs/pure/arrays.md#replaceby)
- [modifyBy](./docs/pure/arrays.md#modifyby)
- [existsBy](./docs/pure/arrays.md#existsby)
- [findLastBy](./docs/pure/arrays.md#findlastby)
- [findLastIndexBy](./docs/pure/arrays.md#findlastindexby)
- [filterBy](./docs/pure/arrays.md#filterby)
- [countBy](./docs/pure/arrays.md#countby)
- [renameKeys](./docs/pure/arrays.md#renamekeys)
- [copyKeys](./docs/pure/arrays.md#copykeys)
- [copyKeysDeep](./docs/pure/arrays.md#copykeysdeep)
- [transformObjectDeep](./docs/pure/objects.md#transformobjectdeep)
- [preprocessForSerialization](./docs/pure/objects.md#preprocessforserialization)
- [keysToCamelCase](./docs/pure/objects.md#keystocamelcase)
- [keysToSnakeCase](./docs/pure/objects.md#keystosnakecase)
- [deepFreezeObject](./docs/pure/objects.md#deepfreezeobject)
- [matches](./docs/pure/objects.md#matches)
- [filterNonNull](./docs/pure/objects.md#filternonnull)
- [slugify](./docs/pure/strings.md#slugify)
- [humanize](./docs/pure/strings.md#humanize)
- [snakeToCamelCase](./docs/pure/strings.md#snaketocamelcase)
- [camelToSnakeCase](./docs/pure/strings.md#cameltosnakecase)
- [capitalize](./docs/pure/strings.md#capitalize)
- [hyphenate](./docs/pure/strings.md#hyphenate)
- [truncate](./docs/pure/strings.md#truncate)
- [noop](./docs/pure/general.md#noop)
- [toLabelAndValue](./docs/pure/general.md#tolabelandvalue)
- [getRandomInt](./docs/pure/general.md#getrandomint)
- [randomPick](./docs/pure/general.md#randompick)
- [dynamicArray](./docs/pure/general.md#dynamicarray)
- [isNotEmpty](./docs/pure/general.md#isnotempty)
- [isNot (alias notEquals)](./docs/pure/general.md#isnot_alias_notequals)
- [isNotEqualDeep (alias notEqualsDeep)](./docs/pure/general.md#isnotequaldeep_alias_notequalsdeep)

</td>
</tr>

<tr></tr>
</tbody>
</table>

## Installation Instructions

Install from npm:

```bash
yarn add "@bigbinary/neeto-cist@latest"
```

## Usage

You can import all functions from `@bigbinary/neeto-cist`.

```js
import { slugify } from "@bigbinary/neeto-cist";
```

Exports several general utility functions that are used throughout neeto
products. The functions are designed in a similar fashion as ramda so that they
can easily interoperate with each other.

Pure functions were designed to be fail fast. If you call `findById(10, null)`,
it will throw error saying that it can't iterate through `null`.

But for most such pure functions, there is a failsafe alternative available. The
failsafe alternative function will be prefixed with `_`. Example:
`_findById(10, null)` returns `null`, `_findById(10, undefined)` returns
`undefined` and `_findById(10, [{ id: 10 }])` returns `{ id: 10 }`.

## Other references

- [Development instructions](./docs/general/development-instructions.md)
- [Building and releasing](./docs/general/building-and-releasing.md)
