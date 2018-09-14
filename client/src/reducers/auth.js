import { combineReducers } from 'redux'

function register(state = {}, action = {}) {
  switch(action.type) {
    case 'REGISTER_REQUEST':
      return {
        registering: true,
      }
    case 'REGISTER_SUCCESS':
      return {
        registering: false,
        registerd: true,
      }
    case 'REGISTER_FAIL':
      return {
        registering: false,
        registerFail: true
      }
    default:
      return state
  }
}
function login(state = {}, action = {}) {
  switch(action.type){
    case 'LOGIN_REQUEST':
      return {
        logging: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        logging: false,
        logined: true,
      }
    case 'LOGIN_FAIL':
      return {
        logining: false,
        loginFail: true
      }
    default:
      return state
  }
}

export default combineReducers({
  register,
  login
})