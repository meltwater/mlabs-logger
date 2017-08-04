import { createLogger } from '../lib'

export default options => async (error = 'On fire.') => {
  const log = createLogger()
  try {
    throw new Error(error)
  } catch (err) {
    log.error({err}, 'Do Foo: Fail')
  }
}
