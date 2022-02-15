# API Reference

## Top-Level Exports

- [`createLogger(options)`](#createloggeroptions)
- [`destination`](#destination)
- [`final`](#final)

### Importing

Every function described above is a top-level export.
You can import any of them like this:

```js
import { createLogger } from '@meltwater/mlabs-logger'
```

---
### `createLogger(options)`

Returns a new [Pino] logger.

To use the production logger, do not set `outputMode`, `t`, or `noop`.

#### Arguments

1. `options` (*object*): Options to pass to [Pino].
    Also supports the following custom options.
    - `name`: The name of the logger. Default is `mlabs`.
    - `base`: Properties to add to the base logger.
      Will be merged with the default ones added by Pino.
      Default: no extra properties.
    - `useAsync` (*boolean*): Use the pino destination with `sync: false`.
      Overrides `createDestination` below. Only used in production.
      Default: `false`.
    - `createDestination` (*function*): Function that returns a valid
      pino [destination parameter] to use in production.
      If null, this options will be ignored.
      Default: `null`.
    - `outputMode` (*string*): Select an output format to use.
      May be either `null` (Pino default output),
      `pretty` (the Pino pretty formatter),
      or any mode supported by [bunyan-formatter]:
      `short`, `long`, `simple`, or `bunyan`.
      Default is `null`.
    - `outputFilter` (*function*): Output filter to use.
      The function will receive the log message object
      and should return `true` if the log should be printed, `false` otherwise.
      This option is ignored when using the production logger.
      Default is no filter.
    - `noop` (*boolean*): Log all output to [debug]
      with the namespace set to the logger `name`.
      This suppresses all output unless the `DEBUG` environment variable is set.
      Default is `false`.
    - `t` (*object*): The [AVA] test object to use if running tests.
      When provided, all logging output will be passed to `t.log`.
      In this mode, the log level may be set
      via the environment variable `LOG_LEVEL`,
      and the output mode via `LOG_OUTPUT_MODE`.

#### Returns

(*object*): The [Pino] logger.

---
### destination

The [`destination` method from Pino][pino.destination].

---
### final

The [`final` method from Pino][pino.final].

[AVA]: https://github.com/avajs/ava
[Pino]: https://github.com/pinojs/pino
[pino.destination]: https://getpino.io/#/docs/api?id=pino-destination
[pino.final]: https://getpino.io/#/docs/api?id=pinofinallogger-handler-gt-function-finallogger
[bunyan-formatter]: https://www.npmjs.com/package/bunyan-formatter
[debug]: https://github.com/visionmedia/debug
