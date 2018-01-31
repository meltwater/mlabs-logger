# Logger

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Fmlabs--logger-blue.svg)](https://www.npmjs.com/package/@meltwater/mlabs-logger)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/mlabs-logger)
[![docs](https://img.shields.io/badge/docs-master-green.svg)](https://github.com/meltwater/mlabs-logger/tree/master/docs)
[![Greenkeeper](https://badges.greenkeeper.io/meltwater/mlabs-logger.svg?token=1f87b6a25a53453bee29789f999a4923398c7783e5b0d431f7220bd67d20acae&ts=1516112292140)](https://greenkeeper.io/)
[![Codecov](https://img.shields.io/codecov/c/token/uaIHWRZjoy/github/meltwater/mlabs-logger.svg)](https://codecov.io/gh/meltwater/mlabs-logger)
[![CircleCI](https://circleci.com/gh/meltwater/mlabs-logger.svg?style=shield&circle-token=0ac4375f1f90876828f0b0dbd283d366c8aa38af)](https://circleci.com/gh/meltwater/mlabs-logger)

## Description

Standard logger for mlabs services.

Logs structured JSON to stdout with [Bunyan].
Integrates well with [AVA] tests.

[AVA]: https://github.com/avajs/ava
[Bunyan]: https://github.com/trentm/node-bunyan

## Installation

Add this as a dependency to your project using [npm] with

```
$ npm install @meltwater/mlabs-logger
```

or using [Yarn] with

```
$ yarn add @meltwater/mlabs-logger
```

[npm]: https://www.npmjs.com/
[Yarn]: https://yarnpkg.com/

## Usage

**See the complete [API documentation](./docs) and [working examples](./examples).**

Provides a [Bunyan] logger.

```js
import createLogger from '@meltwater/mlabs-logger'

const log = createLogger({name: 'foo'})

log.info({userId: '42'}, 'User: Create')
log.error({err: new Error('On fire!')}, 'User Create: Fail')
```

### Use in AVA tests

Simply pass `t` as an option to `createLogger`
to send all log output to [AVA's][AVA] `t.log` method.

Override the log level by setting the `LOG_LEVEL` environment variable.
Override the log output mode by either passing `outputMode`
or setting the `LOG_OUTPUT_MODE` environment variable.
The mode may be any mode supported by [bunyan-formatter]
(`short`, `long`, `simple`, `json`, or `bunyan`).

For example, assuming `Foo` takes a logger,

```js
import test from 'ava'
import createLogger from '@meltwater/mlabs-logger'

import Foo from './foo'

test('does bar', t => {
  const foo = new Foo({log: createLogger({t})})
  const bar = foo.bar()
  t.true(bar)
})
```

[bunyan-formatter]: https://www.npmjs.com/package/bunyan-formatter

## Development Quickstart

```
$ git clone https://github.com/meltwater/mlabs-logger.git
$ cd mlabs-logger
$ nvm install
$ yarn
```

Run each command below in a separate terminal window:

```
$ yarn run watch
$ yarn run watch:test
```

## Development and Testing

### Source code

The [mlabs-logger source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:meltwater/mlabs-logger.git
```

[mlabs-logger source]: https://github.com/meltwater/mlabs-logger

### Requirements

You will need [Node.js] with [npm], [Yarn],
and a [Node.js debugging] client.

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

Set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn
```

[Node.js]: https://nodejs.org/
[Node.js debugging]: https://nodejs.org/en/docs/guides/debugging-getting-started/
[npm]: https://www.npmjs.com/
[nvm]: https://github.com/creationix/nvm

#### CircleCI

_CircleCI should already be configured: this section is for reference only._

The following environment variables must be set on [CircleCI]:

- `NPM_TOKEN`: npm token for installing and publishing packages.
- `NPM_TEAM`: npm team to grant read-only package access
  (format `org:team`, optional).
- `CODECOV_TOKEN`: Codecov token for uploading coverage reports (optional).

These may be set manually or by running the script `./circleci/envvars.sh`.

Greenkeeper requires a deployment key with write permission:
see the [CircleCI documentation for adding one][CircleCI deployment key].

[CircleCI]: https://circleci.com/
[CircleCI deployment key]: https://circleci.com/docs/1.0/adding-read-write-deployment-key/

### Development tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

#### Production build

Lint, test, and transpile the production build to `dist` with

```
$ yarn run dist
```

##### Publishing a new release

_Update the CHANGELOG before each new release._

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit,
and trigger CircleCI to publish the new version to npm.

[npm version]: https://docs.npmjs.com/cli/version

#### Examples

**See the [full documentation on using examples](./examples).**

View all examples with

```
$ yarn run example
```

#### Linting

Linting against the [JavaScript Standard Style] and [JSON Lint]
is handled by [gulp].

View available commands with

```
$ yarn run gulp -- --tasks
```

In a separate window, use gulp to watch for changes
and lint JavaScript and JSON files with

```
$ yarn run watch
```

Automatically fix most JavaScript formatting errors with

```
$ yarn run format
```

[gulp]: http://gulpjs.com/
[JavaScript Standard Style]: http://standardjs.com/
[JSON Lint]: https://github.com/zaach/jsonlint

#### Tests

Unit and integration testing is handled by [AVA]
and coverage is reported by [Istanbul] and uploaded to [Codecov].

- Test files end in `.spec.js`.
- Unit tests are placed under `lib` alongside the tested module.
- Integration tests are placed in `test`.
- Static files used in tests are placed in `fixtures`.

Watch and run tests on changes with

```
$ yarn run watch:test
```

Generate a coverage report with

```
$ yarn run report
```

An HTML version will be saved in `coverage`.

##### Debugging tests

Create a breakpoint by adding the statement `debugger` to the test
and start a debug session with, e.g.,

```
$ yarn run ava:inspect lib/true.spec.js
```

Watch and restart the debugging session on changes with

```
$ yarn run ava:inspect:watch lib/true.spec.js
```

[Codecov]: https://codecov.io/
[Istanbul]: https://istanbul.js.org/

## Contributing

The author and active contributors may be found in `package.json`,

```
$ jq .author < package.json
$ jq .contributors < package.json
```

To submit a patch:

1. Request repository access by submitting a new issue.
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes and write tests.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This npm package is Copyright (c) 2016-2018 Meltwater Group.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
