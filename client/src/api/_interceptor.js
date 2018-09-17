import axios from 'axios'

axios.interceptors.request = function(config){
  if (!config.headers['tk']) {
    const tk = localStorage.getItem('tk')
    tk && (config.headers['tk'] = tk)
  }
  return config
}

axios.interceptors.response = function(res) {
  if (res.data.code === 401) {
    localStorage.removeItem('tk')
    location.href = "/"
  }
  return res
}