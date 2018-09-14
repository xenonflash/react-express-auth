import axios from 'axios'

const api = {}
api.login = param => axios({
  method: 'post',
  url: '/login',
  data: param,
})
export default api