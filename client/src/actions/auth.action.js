import authApi from '../api/auth.api.js'

export function login(formValues) {
  return dispatch => {
    dispatch({type: 'LOGIN_REQUEST'})
    authApi.login(formValues).then(res => {
      dispatch({type: 'LOGIN_SUCCESS', user: res})
    }).catch(err => {
      dispatch({type: 'LOGIN_FAIL', user: null})
    })
  }
}
export function register(formValues) {
  return dispatch => {
    dispatch({type: 'REGISTER_REQUEST'})
    authApi.register(formValues).then(res => {
      dispatch({type: 'REGISTER_SUCCESS', user: res})
    }).catch(err => {
      dispatch({type: 'REGISTER_FAIL', user: null})
    })
  }
}