import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:30001',
  timeout: 30 * 1000
})
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    // const config = response.config
    const res = response.data
    if (res.code == 0) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.msg)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
