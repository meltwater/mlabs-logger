import { Writable } from 'stream'

export class NullStream extends Writable {
  _write (chunk, encoding, callback) {
    setImmediate(callback)
  }
}

export default () => new NullStream()
