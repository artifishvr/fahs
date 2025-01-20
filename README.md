# fahs

> Prettily inspect variables and log to console.

## Install

```sh
npm install fahs
```

## Usage

```ts
import { inspect, info } from 'fahs';
// success, warn, error, share the same text, just different colors

const a = 42;
const b = [1, 2, 3];
const c = { a, b };

info("Hello, world!");
// [12/31, 23:59:59] Hello, world!

info("Hello, world!", "Label");
// [12/31, 23:59:59] [Label] Hello, world!

info("Hello, world!", false);
// Hello, world!

inspect(a);
// Inspecting from /full/path/to/file.ts:0
// Type: number
// 42

inspect(b);
// Inspecting from /full/path/to/file.ts:0
// Type: Array
// [
//   1,
//   2,
//   3
// ]'

inspect(c);
// Inspecting from /full/path/to/file.ts:0
// Type: object
// {
//   "a": 1,
//   "b": 2,
//   "c": 3
// }
```

## API

### Methods

#### inspect(variable)

##### variable

Type: `any`

Any variable to inspect.

#### info(message, options?)

Logs an informational message
> Uses [Common Parameters](#common-parameters)

#### success(message, options?)

Logs a success message
> Uses [Common Parameters](#common-parameters)

#### warn(message, options?)

Logs a warning message
> Uses [Common Parameters](#common-parameters)

#### error(message, options?)

Logs an error message
> Uses [Common Parameters](#common-parameters)

### Common Parameters

#### message

Type: `string`

Message to print.

#### options?

Type: `string | boolean | object`\
If `string`, it will be used as the label.\
If `boolean`, it will be used as the `timestamp` option.\
If `object`, it will be used as the `options` object.

##### label?

Type: `string`\
Default: `undefined`

Label to appear before the message, like `[Label] Hello, world!`.

##### timestamp?

Type: `boolean`\
Default: `true`

Whether to show the timestamp before the label (if provided) and message.

## Related

- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
  