import { Writable } from 'stream'

export default () => new Writable({
  write (chunk, encoding, callback) {
    setImmediate(callback)
  }
})
