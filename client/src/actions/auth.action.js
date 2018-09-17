import authApi from '../api/auth.api.js'


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
      dispatch({type: SET_USER, user: res})
    }).catch(err => {
      dispatch({type: REGISTER_FAIL})
    })
  }
}
export function getUserInfo() {
  return dispatch => {
    authApi.getUserInfo().then(res => {
      dispatch({type: SET_USER, user: res})
    }).catch(err => {
    })
  }
}

export function logout() {
  window.localStorage.removeItem('tk')
  return {
    type: LOGOUT
  }
}

export const LOGIN_REQUEST = Symbol()
export const LOGIN_SUCCESS = Symbol()
export const LOGIN_FAIL = Symbol()
export const REGISTER_REQUEST = Symbol()
export const REGISTER_SUCCESS = Symbol()
export const REGISTER_FAIL = Symbol()
export const SET_USER = Symbol()
export const LOGOUT = Symbol()