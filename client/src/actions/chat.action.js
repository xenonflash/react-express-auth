import chatApi from '../api/chat.api'

/**
 *
 * @param {*} dist 对方ID
 * @param {*} msg 信息内容
 */
export function sendMsg(msg) {
  return dispatch => {
    dispatch({type: SENDING_MSG, msg})
    chatApi.sendMsg(msg).then(res => {
      dispatch({type: SEND_MSG_SUCCESS, msg})
    }).catch(err => {
      dispatch({type: SEND_MSG_FAIL, msg})
    })
  }
}
export function msgReceived(msg) {
  return {type: RECEIVE_MSG, msg}
}

export function setWsStatus(statusCode) {
  const type = [WS_CONNECT_SUCCESS, WS_CONNECT_FAIL, WS_DISCONNECTED][statusCode]
  return { type }
}

export const SENDING_MSG = Symbol('send msg ing')
export const SEND_MSG_SUCCESS = Symbol('send msg success')
export const SEND_MSG_FAIL = Symbol('send msg fail')
export const RECEIVE_MSG = Symbol('receive a message')

export const WS_CONNECT_SUCCESS = Symbol('websocket connect success')
export const WS_CONNECT_FAIL = Symbol('websocket connect fail')
export const WS_DISCONNECTED = Symbol('websocket disconnected')