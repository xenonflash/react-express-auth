import authApi from '../api/auth.api.js'
import { getUserInfo } from '../actions/user.action'

export function login(formValues) {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST})
    authApi.login(formValues).then(res => {
      dispatch({type: LOGIN_SUCCESS})
      dispatch(getUserInfo())
      window.localStorage.setItem('tk', res)
    }).catch(err => {
      dispatch({type: LOGIN_FAIL})
    })
  }
}
export function register(formValues) {
  return dispatch => {
    dispatch({type: REGISTER_REQUEST})
    authApi.register(formValues).then(res => {
      dispatch({type: REGISTER_SUCCESS})
    }).catch(err => {
      dispatch({type: REGISTER_FAIL})
    })
  }
}


export function logout() {
  window.localStorage.removeItem('tk')
  window.location.replace('/')
  return {
    type: LOGOUT
  }
}

export const LOGIN_REQUEST = Symbol('login request')
export const LOGIN_SUCCESS = Symbol('login success')
export const LOGIN_FAIL = Symbol('login fail')
export const REGISTER_REQUEST = Symbol('register request')
export const REGISTER_SUCCESS = Symbol('register success')
export const REGISTER_FAIL = Symbol('register fail')
export const LOGOUT = Symbol('logout')