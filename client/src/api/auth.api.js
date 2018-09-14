import axios from 'axios'

const api = {}
api.login = param => axios({
  method: 'post',
  url: '/api/login',
  data: param,
})
api.getUserInfo = () => axios({
  method: 'post',
  url: '/api/getUserInfo'
})
api.register = param => axios({
  method: 'post',
  url: '/api/register',
  data: param,
})
export default api