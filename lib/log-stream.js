import { Writable } from 'stream'

import bunyanFormatter from 'bunyan-formatter'

export class LogStream extends Writable {
  constructor (log) {
    super()
    this.log = log
  }

  _write (chunk, encoding, callback) {
    this.log(chunk.toString())
    setImmediate(callback)
  }
}

export default (log, options = {}) => {
  const out = new LogStream(log)
  return bunyanFormatter(options, out)
}
