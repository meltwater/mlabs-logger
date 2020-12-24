import os from 'os'

import createDebugger from 'debug'
import pino, { extreme, stdSerializers } from 'pino'

import { getPinoArgs } from '@meltwater/examplr'

import createNullStream from './null-stream.js'
import createLogStream from './log-stream.js'

export default ({
  name = 'mlabs',
  base = {},
  noop = false,
  t = null,
  outputMode = null,
  outputFilter = null,
  serializers = {},
  createDestination = null,
  useExtreme = false,
  ...options
} = {}) => {
  const isProduction = outputMode === null && !noop && !t
  const defaultBase = {
    name,
    pid: process.pid,
    hostname: os.hostname(),
    ...base
  }

  if (isProduction) {
    const opts = {
      name,
      serializers: {
        req: stdSerializers.req,
        res: stdSerializers.res,
        err: stdSerializers.err,
        ...serializers
      },
      base: defaultBase,
      ...options
    }
    if (useExtreme) return pino(opts, extreme())
    if (createDestination === null) return pino(opts)
    return pino(opts, createDestination())
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

    stream = createLogStream(
      (...args) => {
        t.log(...args)
      },
      {
        outputMode: newOutputMode
      }
    )
  }

  const [pinoOpts, pinoStream] = getPinoArgs({
    outputMode: newOutputMode,
    outputFilter,
    name,
    serializers,
    base: defaultBase,
    ...options,
    ...(level === null ? {} : { level })
  })

  const log = pino(pinoOpts, stream === null ? pinoStream : stream)

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
