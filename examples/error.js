import { createLogger } from '../lib'

export default options => async (error = 'On fire.') => {
  const log = createLogger({
    outputMode: 'short',
    outputFilter: log => log.foo !== 'bar'
  })
  try {
    log.info({ foo: 'bar' }, 'FooBar')
    throw new Error(error)
  } catch (err) {
    log.error({ err }, 'Do Foo: Fail')
  }
}
