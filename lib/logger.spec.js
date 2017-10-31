import test from 'ava'

import createLogger from './logger'

test('returns a logger', t => {
  t.truthy(createLogger())
})

test('takes a options and returns a logger', t => {
  const log = createLogger({name: 'foo', noop: true, logAppId: true})
  t.truthy(log)
  t.is(log.fields.name, 'foo')
  t.is(log.fields.appid, 'foo')
})

test('logs test output', t => {
  class Foo {
    constructor (log) { this.log = log }
    bar (...args) { this.log.info(...args) }
  }

  const log = createLogger({t})
  const foo = new Foo(log)
  foo.bar('a')
  foo.bar({data: {foo: 'bar'}}, 'b')
  t.log('c')
  t.pass()
})
