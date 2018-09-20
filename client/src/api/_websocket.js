import io from 'socket.io-client'
import _isEmpty from 'lodash/isEmpty'
window.__io = io
const ws = {
  ws: null,
  onMsgQueue: [],
  init(options) {
    if (_isEmpty(options) && !this.ws) {
      return console.log('please init ws')
    }
    const { url = '', connect, disconnect, error, serverPush } = options
    if (this.ws) return this.ws
    this.ws = io(url)
    this.onMsgQueue = []
    this.ws.on('connect', function() {
      connect && connect()
    })
    this.ws.on('error', function() {
      error && error()
    })
    this.ws.on('disconnect', function() {
      disconnect && disconnect()
    })
    this.ws.on('msg', e => {
      this.onMsgQueue.forEach(callback => {
        callback(e)
      })
    })
    this.ws.on('server-push', e => {
      serverPush && serverPush(e)
    })
    window.__ws = this.ws
  }
}

export default ws