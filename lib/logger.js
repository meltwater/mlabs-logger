import { createLogger, stdSerializers } from 'bunyan'
import createDebugger from 'debug'
import blackhole from 'stream-blackhole'

export default ({
  name = 'mlabs',
  noop = false,
  logAppId = false,
  ...options
} = {}) => {
  const log = createLogger({
    name,
    stream: noop ? blackhole() : undefined,
    serializers: {err: stdSerializers.err},
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
