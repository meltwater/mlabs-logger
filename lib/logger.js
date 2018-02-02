import createDebugger from 'debug'
import pino, { stdSerializers } from 'pino'

import { getPinoArgs } from '@meltwater/examplr'

import createNullStream from './null-stream'
import createLogStream from './log-stream'

export default ({
  name = 'mlabs',
  noop = false,
  t = null,
  outputMode = null,
  outputFilter = null,
  serializers = {},
  ...options
} = {}) => {
  const isProduction = outputMode === null && !noop && !t

  if (isProduction) {
    return pino({
      name,
      serializers: {...stdSerializers, ...serializers},
      ...options
    })
  }

  let level = null
  let stream = null
  let newOutputMode = outputMode || 'short'

  if (noop) stream = createNullStream()

  if (t !== null && process.env.NODE_ENV === 'test') {
    level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : null

    const envOutputMode = process.env.LOG_OUTPUT_MODE
    if (envOutputMode) newOutputMode = envOutputMode

    if (newOutputMode === 'pretty') {
      throw new Error('Log output mode pretty is not supported with AVA t.log.')
    }

    stream = createLogStream((...args) => { t.log(...args) }, {
      outputMode: newOutputMode
    })
  }

  const [pinoOpts, pinoStream] = getPinoArgs({
    outputMode: newOutputMode,
    outputFilter,
    serializers,
    name,
    ...(level === null ? {} : {level})
  })

  const log = pino(
    pinoOpts,
    stream === null ? pinoStream : stream
  )

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
