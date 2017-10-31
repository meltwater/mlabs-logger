import { createLogger, stdSerializers } from 'bunyan'
import createDebugger from 'debug'

import createNullStream from './null-stream'
import createLogStream from './log-stream'

export default ({
  name = 'mlabs',
  noop = false,
  logAppId = false,
  t = null,
  ...options
} = {}) => {
  let stream = null
  if (noop) stream = createNullStream()

  if (t !== null) {
    stream = createLogStream(
      (...args) => { t.log(...args) },
      t.context.loggerOutput
    )
  }

  const log = createLogger({
    name,
    serializers: {err: stdSerializers.err},
    ...(stream === null ? {} : {stream}),
    ...(logAppId ? {appid: name} : {}),
    ...options
  })

  if (noop) {
    const debug = createDebugger(name)
    log.trace = debug
    log.debug = debug
    log.info = debug
    log.warn = debug
    log.error = debug
    log.fatal = debug
  }

  return log
}
