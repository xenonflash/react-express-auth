import axios from 'axios'
import ws from './_websocket.js'
/**
 *
 * @param {*} url
 * @param {*} options
 */
export function makePost(url, options) {
  return function(data) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        method: 'post',
        data,
        ...options
      }).then(res => {
        if (res.status === 200 && res.data.code === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
/**
 *
 * @param {*} url
 * @param {*} options
 */
export function makeGet(url, options) {
  return function(params) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        params,
        ...options
      }).then(res => {
        if (res.status === 200 && res.data.code === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}

/**
 * 使用websocket 发送信息, 并返回Promise
 * @param {String} event
 * @param {Any} payload
 * @param {Number}
 */
export function sendWs(msg, timeout = 10000) {
  //为每个信息生成唯一id, 回调中通过id 匹配 resolve Promise
  const id = +(Date.now()) + JSON.stringify(msg)
  const type = 'chat'
  const payload = {...msg, id, type}
  return new Promise((resolve, reject) => {
    const handler = function(res) {
      if (res.id === id) {
        const idx = ws.onMsgQueue.findIndex(h => h.id === id)
        ws.onMsgQueue.splice(idx, 1);
        resolve({...msg, status: 1})
      }
    }
    handler.id = id
    ws.onMsgQueue.push(handler)
    ws.ws.emit('msg', payload)
    setTimeout(() => {
      reject({...msg, status: 0})
    }, timeout);
  })
}