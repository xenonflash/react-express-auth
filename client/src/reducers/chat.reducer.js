import {
  SENDING_MSG,
  SEND_MSG_SUCCESS,
  SEND_MSG_FAIL,
  WS_CONNECT_SUCCESS,
  WS_DISCONNECTED
} from '../actions/chat.action'
import _cloneDeep from 'lodash/cloneDeep'

const initState = {
  chatHistory: {}
}

export default function(state = initState, action = {}) {
  switch (action.type) {
    case WS_CONNECT_SUCCESS:
      return {
        ...state,
        wsConnected: true
      }
    case WS_DISCONNECTED:
      return {
        ...state,
        wsConnected: false
      }
    case SENDING_MSG:
      const chatHistory= _cloneDeep(state.chatHistory || {})
      const msg = action.msg
      if(chatHistory[msg.to]){
        chatHistory[msg.to].push(msg)
      } else {
        chatHistory[msg.to] = [msg]
      }
      return {
        ...state,
        chatHistory
      }
    default:
      return state
  }
}