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

Returns a new [Bunyan] logger.

#### Arguments

1. `options` (*object*): Options to pass to [Bunyan].
    Also supports the following custom options.
    - `name`: The name of the logger. Default is `mlabs`.
    - `t`: The [AVA] test object.
      When provided, all logging output will be passed to `t.log`.
      Optionally, set `t.context.logOutputMode` to select a format
      supported by [bunyan-formatter].
    - `logAppId` (*boolean*): Log `appid` as the `name`.
      Default is `false`.
    - `noop` (*boolean*): Log all output to [debug]
      with the namespace set to the logger `name`.
      This suppresses all output unless the `DEBUG` environment variable is set.
      Default is `false`.

#### Returns

(*object*): The [Bunyan] logger.

[AVA]: https://github.com/avajs/ava
[Bunyan]: https://github.com/trentm/node-bunyan
[bunyan-formatter]: https://www.npmjs.com/package/bunyan-formatter
[debug]: https://github.com/visionmedia/debug
