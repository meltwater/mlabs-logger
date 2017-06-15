# Logger

[![npm](https://img.shields.io/badge/npm-%40meltwater%2Fmlabs--logger-blue.svg)](https://www.npmjs.com/package/@meltwater/mlabs-logger)
[![github](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/mlabs-logger)
[![CircleCI](https://circleci.com/gh/meltwater/mlabs-logger.svg?style=shield&circle-token=0ac4375f1f90876828f0b0dbd283d366c8aa38af)](https://circleci.com/gh/meltwater/mlabs-logger)

## Description

Standard logger for mlabs services.

## Installation

Add this as a dependency to your project using [yarn] with

```
$ yarn add @meltwater/mlabs-logger
```

[yarn]: https://yarnpkg.com/

## Usage

Provides a [Bunyan] logger.

```js
import createLogger from '@mlabs/logger'

const log = createLogger({name: 'foo'})

log.info({userId: '42'}, 'User: Create')
log.error({err: new Error('On fire!')}, 'User Create: Fail')
```

[Bunyan]: https://github.com/trentm/node-bunyan

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

### Source Code

The [mlabs-logger source] is hosted on GitHub.
Clone the project with

```
$ git clone git@github.com:meltwater/mlabs-logger.git
```

[mlabs-logger source]: https://github.com/meltwater/mlabs-logger

### Requirements

You will need [Node.js] with [yarn].

Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

and set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn
```

[Node.js]: https://nodejs.org/
[nvm]: https://github.com/creationix/nvm

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

#### Production Build

Lint, test, and transpile the production build to `dist` with

```
$ yarn run dist
```

##### Publishing a new release

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit,
and trigger CircleCI to publish the new version to npm.

[npm version]: https://docs.npmjs.com/cli/version

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

Unit testing is handled by [AVA] and coverage is reported by [Istanbul].
Watch and run tests on change with

```
$ yarn run watch:test
```

Generate a coverage report with

```
$ yarn run report
```

An HTML version will be saved in `coverage`.

[AVA]: https://github.com/avajs/ava
[Istanbul]: https://istanbul.js.org/

## License

This npm package is Copyright (c) 2016-2017 Meltwater Group.

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
