import axios from 'axios'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (!config.headers['tk']) {
    const tk = localStorage.getItem('tk')
    tk && (config.headers['tk'] = tk)
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axios.interceptors.response.use(function(res) {
  if (res.data && res.data.code === 4004) {
    localStorage.removeItem('tk')
    window.location.href = "/"
  }
  return res
})