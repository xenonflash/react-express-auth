import userApi from '../api/_user.api'
import { LOGIN_SUCCESS } from '../actions/auth.action'

export function getUserInfo() {
  return dispatch => {
    userApi.getUserInfo().then(res => {
      dispatch({type: SET_USER, user: res})
      dispatch({type: LOGIN_SUCCESS})
    }).catch(err => {
      console.log(err)
    })
  }
}

export function getContacts() {
  return dispatch => {
    userApi.getContacts().then(res => {
      dispatch({type: SET_CONTACTS, contacts: res})
    }).catch(err => {
      console.log(err)
    })
  }
}

export const SET_USER = Symbol('set user')
export const SET_CONTACTS = Symbol('set contacts')