import axios from 'axios'

const api = {}
api.login = param => axios({
  method: 'post',
  url: '/login',
  data: param,
})
api.getUserInfo = () => axios({
  method: 'post',
  url: '/getUserInfo'
})
api.register = param => axios({
  method: 'post',
  url: '/register',
  data: param,
})
export default api