# API Reference

## Top-Level Exports

- [`createLogger(options)`](#createloggeroptions)

### Importing

Every function described above is a top-level export.
You can import any of them like this:

```js
import { createLogger } from '@meltwater/mlabs-logger'
```

## `createLogger(options)`

Returns a new [Bunyan] logger.

#### Arguments

1. `options` (*object*): Options to pass to [Bunyan].
    Also supports the following custom options.
    - `name`: The name of the logger. Default is `mlabs`.
    - `logAppId` (*boolean*): Log `appid` as the `name`.
      Default is `false`.
    - `noop` (*boolean*): Log all output to [debug]
      with the namespace set to the logger `name`.
      This suppresses all output unless the `DEBUG` environment variable is set.
      Default is `false`.

#### Returns

(*object*): The [Bunyan] logger.

[Bunyan]: https://github.com/trentm/node-bunyan
[debug]: https://github.com/visionmedia/debug
