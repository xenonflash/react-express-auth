import { SET_USER, SET_CONTACTS } from '../actions/user.action'

export default function(state = {}, action = {}) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts
      }
    default:
      return state
  }
}