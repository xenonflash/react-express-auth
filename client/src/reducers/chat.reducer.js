import {
  SENDING_MSG,
  SEND_MSG_SUCCESS,
  SEND_MSG_FAIL,
  RECEIVE_MSG,
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
    const ch1 = _cloneDeep(state.chatHistory)
    const msg1 = action.msg
    if(ch1[msg1.to]){
      ch1[msg1.to].push(msg1)
    } else {
      ch1[msg1.to] = [msg1]
    }
    return {
      ...state,
      chatHistory: ch1
    }
    case RECEIVE_MSG:
      const ch2 = _cloneDeep(state.chatHistory)
      const msg2 = action.msg
      if(ch2[msg2.from]){
        ch2[msg2.from].push(msg2)
      } else {
        ch2[msg2.from] = [msg2]
      }
      return {
        ...state,
        chatHistory: ch2
      }

    default:
      return state
  }
}