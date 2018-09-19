import {
  WS_CONNECT_SUCCESS,
  WS_DISCONNECTED
} from '../actions/chat.action'

export default function(state = {}, action = {}) {
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
    default:
      return state
  }
}