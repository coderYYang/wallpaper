/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-09 18:11:47
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-24 12:55:27
 * @FilePath: /wallpaper/src/renderer/src/plugins/asiox.ts
 * @Description: 封装axios
 */
import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

let loadingService

const request = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000' : 'http://81.68.193.193:3000',
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://47.98.112.36:7000',
  timeout: 10000
})

// 请求拦截
request.interceptors.request.use(
  (config) => {
    loadingService = ElLoading.service({ fullscreen: true })
    return config
  },
  (error) => {
    console.log(1)
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    ElMessage({
      message: error.response?.data.message,
      type: 'error',
      duration: 3000,
      center: false,
      grouping: true
    })
    setTimeout(() => loadingService.close(), 1000)
    return Promise.reject(error)
  }
)

export default request
