import { createLogger, stdSerializers } from 'bunyan'
import createDebugger from 'debug'

import createNullStream from './null-stream'
import createLogStream from './log-stream'

export default ({
  name = 'mlabs',
  noop = false,
  logAppId = false,
  t = null,
  outputMode = 'short',
  ...options
} = {}) => {
  let level = null
  let stream = null

  if (noop) stream = createNullStream()

  if (t !== null) {
    level = process.env.NODE_ENV === 'test' && process.env.LOG_LEVEL
      ? process.env.LOG_LEVEL
      : null

    stream = createLogStream((...args) => { t.log(...args) }, {
      outputMode: process.env.LOG_OUTPUT_MODE ? process.env.LOG_OUTPUT_MODE : outputMode
    })
  }

  const log = createLogger({
    name,
    serializers: {err: stdSerializers.err},
    ...(stream === null ? {} : {stream}),
    ...(logAppId ? {appid: name} : {}),
    ...options,
    ...(level === null ? {} : {level})
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
