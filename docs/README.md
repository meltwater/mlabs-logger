# API Reference

## Top-Level Exports

- [`createLogger(options)`](#createloggeroptions)

### Importing

Every function described above is a top-level export.
You can import any of them like this:

```js
import { createLogger } from '@meltwater/mlabs-logger'
```

---
### `createLogger(options)`

Returns a new [Pino] logger.

For a production logger, do not set
`outputMode`, `outputFilter`, `t`, or `noop`.

#### Arguments

1. `options` (*object*): Options to pass to [Pino].
    Also supports the following custom options.
    - `name`: The name of the logger. Default is `mlabs`.
    - `outputMode` (*string*): Select a output format to use.
      Default is `json`.
    - `outputFilter` (*function*): Output filter to use.
      The function will receive the log message object
      and should return `true` if the log should be printed, `false` otherwise.
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

[AVA]: https://github.com/avajs/ava
[Pino]: https://github.com/pinojs/pino
[bunyan-formatter]: https://www.npmjs.com/package/bunyan-formatter
[debug]: https://github.com/visionmedia/debug
