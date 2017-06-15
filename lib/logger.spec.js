import test from 'ava'

import createLogger from './logger'

test('returns a logger', t => {
  t.truthy(createLogger())
})

test('takes a options and returns a logger', t => {
  const log = createLogger({name: 'foo', noop: true})
  t.truthy(log)
  t.is(log.fields.name, 'foo')
})
