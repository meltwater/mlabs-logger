import { createLogger, stdSerializers } from 'bunyan'
import createDebugger from 'debug'
import blackhole from 'stream-blackhole'

export default (options = {}) => {
  const name = options.name === undefined
    ? 'mlabs-logger'
    : options.name

  const log = createLogger({
    name,
    appid: name,
    stream: options.noop ? blackhole() : undefined,
    serializers: {err: stdSerializers.err},
    ...options
  })

  if (options.noop) {
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
