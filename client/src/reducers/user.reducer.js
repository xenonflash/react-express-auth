import { SET_USER } from '../actions/auth.action'

export default function(state = {}, action = {}) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}