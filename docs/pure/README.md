# General utility functions

Exports several general utility functions that are used throughout neeto
products. The functions are designed in a similar fashion as ramda so that they
can easily interoperate with each other.

Pure functions were designed to be fail fast. If you call `findById(10, null)`,
it will throw error saying that it can't iterate through `null`.

But for most such pure functions, there is a failsafe alternative available. The
failsafe alternative function will be prefixed with `_`. Example:
`_findById(10, null)` returns `null`, `_findById(10, undefined)` returns
`undefined` and `_findById(10, [{ id: 10 }])` returns `{ id: 10 }`.

## Usage

You can import all functions from `@bigbinary/neeto-cist`.

```js
import { slugify } from "@bigbinary/neeto-cist";
```

## Available functions

<table>
<thead>
<tr>
<th>

[Array operations](./arrays.md)

</th>
<th>

[Object operations](./objects.md)

</th>
<th>

[String operations](./strings.md)

</th>
<th>

[General utility functions](./general.md)

</th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: top;">

- [findById](./arrays.md#findbyid)
- [findIndexById](./arrays.md#findindexbyid)
- [removeById](./arrays.md#removebyid)
- [replaceById](./arrays.md#replacebyid)
- [modifyById](./arrays.md#modifybyid)
- [existsById](./arrays.md#existsbyid)

---

- [findBy](./arrays.md#findby)
- [findIndexBy](./arrays.md#findindexby)
- [removeBy](./arrays.md#removeby)
- [replaceBy](./arrays.md#replaceby)
- [modifyBy](./arrays.md#modifyby)
- [existsBy](./arrays.md#existsby)
- [findLastBy](./arrays.md#findlastby)
- [findLastIndexBy](./arrays.md#findlastindexby)
- [filterBy](./arrays.md#filterby)
- [countBy](./arrays.md#countby)

---

- [renameKeys](./arrays.md#renamekeys)
- [copyKeys](./arrays.md#copykeys)
- [copyKeysDeep](./arrays.md#copykeysdeep)

</td>
<td  style="vertical-align: top;">

- [transformObjectDeep](./objects.md#transformobjectdeep)
- [preprocessForSerialization](./objects.md#preprocessforserialization)
- [keysToCamelCase](./objects.md#keystocamelcase)
- [keysToSnakeCase](./objects.md#keystosnakecase)
- [deepFreezeObject](./objects.md#deepfreezeobject)
- [matches](./objects.md#matches)
- [filterNonNull](./objects.md#filternonnull)

</td>
<td  style="vertical-align: top;">

- [slugify](./strings.md#slugify)
- [humanize](./strings.md#humanize)
- [snakeToCamelCase](./strings.md#snaketocamelcase)
- [camelToSnakeCase](./strings.md#cameltosnakecase)
- [capitalize](./strings.md#capitalize)
- [hyphenate](./strings.md#hyphenate)
- [truncate](./strings.md#truncate)

</td>
<td  style="vertical-align: top;">

- [noop](./general.md#noop)
- [toLabelAndValue](./general.md#tolabelandvalue)
- [getRandomInt](./general.md#getrandomint)
- [randomPick](./general.md#randompick)
- [dynamicArray](./general.md#dynamicarray)
- [isNotEmpty](./general.md#isnotempty)
- [isNot (alias notEquals)](./general.md#isnot_alias_notequals)
- [isNotEqualDeep (alias notEqualsDeep)](./general.md#isnotequaldeep_alias_notequalsdeep)
</td>
<tr>
</tbody>
</table>
