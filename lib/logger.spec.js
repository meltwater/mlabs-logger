import test from 'ava'

import createLogger from './logger.js'

test('returns a logger', (t) => {
  t.truthy(createLogger())
})

test('takes a options and returns a logger', (t) => {
  const log = createLogger({ name: 'foo', noop: true })
  t.truthy(log)
})

test('logs test output', (t) => {
  class Foo {
    constructor (log) {
      this.log = log
    }

    bar (...args) {
      this.log.info(...args)
    }
  }

  const log = createLogger({ t })
  const foo = new Foo(log)
  foo.bar('a')
  foo.bar({ data: { foo: 'bar' } }, 'b')
  t.log('c')
  t.pass()
})
