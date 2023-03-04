import axios from 'axios'
import store from '@/store'
import {$showLoading, $hiddenLoading} from '@/hooks/Loading'
import {showTips} from '@/hooks/showTips'

// create an axios instance
const service = axios.create({
  baseURL: '.', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log(config)
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    // config.headers['']
    config.params = {
      ...config.params
    }
    if (config.showLoading) {
      store.commit('app/PLUS_LOADING_NUMBER')
      if (!store.state.app.showLoading) {
        store.commit("app/SET_LOADING_STATE", true)
        $showLoading()
      }
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const { data, code, msg, config } = response.data
    if (config.showLoading) {
      store.dispatch('app/setLoading')
      //setTimeout 开启一个宏任务，待await里的微任务执行完后再执行
      setTimeout(() => {
        if (!store.state.app.showLoading) {
          $hiddenLoading()
        }
      })
    }

    // console.log(res)
    // if the custom code is not 20000, it is judged as an error.
    if (code === 200) {
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return data

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

      // return Promise.reject(new Error(res.message || 'Error'))
    } else {
      showTips({ type: 'warning', message: msg })
      return Promise.reject(new Error(msg || 'Error'))
    }
  },
  error => {
    if (store.state.app.showLoading) {
      store.dispatch('app/setLoading')
      setTimeout(() => {
        if (!store.state.app.showLoading) {
          $hiddenLoading()
        }
      })
    }
    let msg = error.message
    if (error.response.status === 403) {
      msg = '没有权限访问'
    }

    showTips({ type: 'warning', message: msg })
    return Promise.reject(error)
  }
)

export default service


