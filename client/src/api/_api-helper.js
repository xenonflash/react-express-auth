import axios from 'axios'

/**
 *
 * @param {*} url
 * @param {*} options
 */
export function makePost(url, options) {
  return function(data) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        method: 'post',
        data,
        ...options
      }).then(res => {
        console.log(res)
        if (res.status == 200 && res.data.code === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
/**
 *
 * @param {*} url
 * @param {*} options
 */
export function makeGet(url, options) {
  return function(params) {
    return new Promise((resolve, reject) => {
      axios({
        url,
        params,
        ...options
      }).then(res => {
        if (res.status == 200 && res.data.code === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}