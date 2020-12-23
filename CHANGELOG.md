# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [7.0.0] / 2020-12-23

### Changed

- (**Breaking**) The `default` export is now an object
  containing all other top-level exports.

## [6.1.1] / 2020-11-17

### Changed

- License to MIT.

## [6.1.0] / 2020-11-17

### Changed

- Update examplr v5.

## [6.0.0] / 2020-06-16

### Changed

- Update to pino v6.

## [5.4.0] / 2020-02-25

### Changed

- Update minimum examplr version.

## [5.3.0] / 2019-04-11

### Changed

- Open source under the Apache License, Version 2.0!

## [5.2.0] / 2019-03-28

### Added

- Export the `destination` and `extreme` methods from Pino.
- New options `useExtreme` and `createDestination`.

### Changed

- Update pino to v5.12.0.

## [5.1.2] / 2018-12-17

### Changed

- Update to [makenew-node-lib] v5.3.0.

## [5.1.1] / 2018-09-26

### Changed

- Update to debug v4.

## [5.1.0] / 2018-09-26

### Added

- Export the `final` method from Pino.

### Changed

- Update to [makenew-node-lib] v5.1.0.

## [5.0.0] / 2018-8-30

### Changed

- Update pino from v4 to v5.
- Update to [makenew-node-lib] v4.7.2.

## [4.1.1] / 2018-03-29

### Fixed

- Expliclty use `req`, `res`, and `err` serializers
  to suppress pino warning.

### Changed

- Update to Pino to v4.15.3.
- Update to [makenew-node-lib] v4.6.1.

## [4.1.0] / 2017-02-01

### Added

- The `base` option now merges with the Pino `base` option.

### Fixed

- Logger options were not merged into development logger.

### Changed

- Update to [makenew-node-lib] v4.3.4.

## [4.0.3] / 2017-02-01

### Fixed

- Cases where `outputMode` was ignored.

## [4.0.2] / 2017-02-01

### Fixed

- Corrected documentation for `outputMode`.

## [4.0.1] / 2017-01-31

### Changed

- Update to [makenew-node-lib] v4.3.3.

## [4.0.0] / 2017-01-31

### Added

- Filter log messages in development with `logFilter` option.

### Changed

- (**Breaking**) Replace Bunyan with [Pino].
- Update to [makenew-node-lib] v4.3.2.

## [3.1.0] / 2017-11-15

### Changed

- Update to [makenew-node-lib] v4.1.3.

### Removed

- The `logAppId` option is unnecessary, was unused, and has been removed.

## [3.0.1] / 2017-11-14

### Changed

- Update to [makenew-node-lib] v4.1.2.

## [3.0.0] / 2017-11-14

### Changed

- (**Breaking**) Build for Node.js LTS Carbon:
  drop support for Node versions less than 8.9.0.
- Update to [makenew-node-lib] v4.1.1.

## [2.1.0] / 2017-10-31

### Added

- Test logging support via `t` and `outputMode` options.

### Changed

- Update to [makenew-node-lib] v3.2.0.

## [2.0.11] / 2017-10-20

### Changed

- Update to [makenew-node-lib] v3.0.1.

## [2.0.10] / 2017-09-14

### Changed

- Update to [makenew-node-lib] v2.3.5.

## [2.0.9] / 2017-08-28

### Changed

- Update to [makenew-node-lib] v2.3.3.

## [2.0.8] / 2017-08-23

### Changed

- Update to [makenew-node-lib] v2.3.1.

## [2.0.7] / 2017-08-15

### Changed

- Update to [makenew-node-lib] v2.1.0.

## [2.0.6] / 2017-08-07

### Changed

- Update to [makenew-node-lib] v2.0.1.

## [2.0.5] / 2017-08-04

### Changed

- Add arg to error example.

## [2.0.4] / 2017-08-04

### Changed

- Update to [makenew-node-lib] v2.0.0.

## [2.0.3] / 2017-07-15

### Changed

- Update to [makenew-node-lib] v1.5.1.

## [2.0.2] / 2017-07-14

### Changed

- Update to [makenew-node-lib] v1.5.0.

## [2.0.1] / 2017-07-07

### Changed

- Update to [makenew-node-lib] v1.3.0.

## [2.0.0] / 2017-07-07

### Changed

- Do not log `appid` by default.
  Use the new `logAppId` option to control this.

### Fixed

- Formatting and typos in docs.

## [1.0.3] / 2017-06-28

### Changed

- Update to [makenew-node-lib] v1.2.0.

## [1.0.2] / 2017-06-22

### Fixed

- CHANGELOG links.

## [1.0.1] / 2017-06-22

### Added

- Examples.
- Codecov support.

## 1.0.0 / 2017-06-15

- Initial release.

[makenew-node-lib]: https://github.com/meltwater/makenew-node-lib
[Pino]: https://github.com/pinojs/pino

[Unreleased]: https://github.com/meltwater/mlabs-logger/compare/v7.0.0...HEAD
[7.0.0]: https://github.com/meltwater/mlabs-logger/compare/v6.1.1...v7.0.0
[6.1.1]: https://github.com/meltwater/mlabs-logger/compare/v6.1.0...v6.1.1
[6.1.0]: https://github.com/meltwater/mlabs-logger/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/meltwater/mlabs-logger/compare/v5.4.0...v6.0.0
[5.4.0]: https://github.com/meltwater/mlabs-logger/compare/v5.3.0...v5.4.0
[5.3.0]: https://github.com/meltwater/mlabs-logger/compare/v5.2.0...v5.3.0
[5.2.0]: https://github.com/meltwater/mlabs-logger/compare/v5.1.2...v5.2.0
[5.1.2]: https://github.com/meltwater/mlabs-logger/compare/v5.1.1...v5.1.2
[5.1.1]: https://github.com/meltwater/mlabs-logger/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/meltwater/mlabs-logger/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/meltwater/mlabs-logger/compare/v4.1.1...v5.0.0
[4.1.1]: https://github.com/meltwater/mlabs-logger/compare/v4.1.0...v4.1.1
[4.1.0]: https://github.com/meltwater/mlabs-logger/compare/v4.0.3...v4.1.0
[4.0.3]: https://github.com/meltwater/mlabs-logger/compare/v4.0.2...v4.0.3
[4.0.2]: https://github.com/meltwater/mlabs-logger/compare/v4.0.1...v4.0.2
[4.0.1]: https://github.com/meltwater/mlabs-logger/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/meltwater/mlabs-logger/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/meltwater/mlabs-logger/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/meltwater/mlabs-logger/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/meltwater/mlabs-logger/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/meltwater/mlabs-logger/compare/v2.0.11...v2.1.0
[2.0.11]: https://github.com/meltwater/mlabs-logger/compare/v2.0.10...v2.0.11
[2.0.10]: https://github.com/meltwater/mlabs-logger/compare/v2.0.9...v2.0.10
[2.0.9]: https://github.com/meltwater/mlabs-logger/compare/v2.0.8...v2.0.9
[2.0.8]: https://github.com/meltwater/mlabs-logger/compare/v2.0.7...v2.0.8
[2.0.7]: https://github.com/meltwater/mlabs-logger/compare/v2.0.6...v2.0.7
[2.0.6]: https://github.com/meltwater/mlabs-logger/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/meltwater/mlabs-logger/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/meltwater/mlabs-logger/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/meltwater/mlabs-logger/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/meltwater/mlabs-logger/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/meltwater/mlabs-logger/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/meltwater/mlabs-logger/compare/v1.0.3...v2.0.0
[1.0.3]: https://github.com/meltwater/mlabs-logger/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/meltwater/mlabs-logger/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/meltwater/mlabs-logger/compare/v1.0.0...v1.0.1
