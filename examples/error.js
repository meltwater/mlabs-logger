import { createLogger } from '../lib'

export default options => async () => {
  const log = createLogger()
  try {
    throw new Error('On fire.')
  } catch (err) {
    log.error({err}, 'Do Foo: Fail')
  }
}
