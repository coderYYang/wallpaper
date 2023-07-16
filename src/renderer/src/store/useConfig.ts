/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-09 18:34:03
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 14:25:18
 * @FilePath: /wallpaper/src/renderer/src/store/useConfig.ts
 * @Description: 配置仓库
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfig = defineStore(
  'config',
  () => {
    const config = ref({
      url: '',
      saveDirectory: 'abc'
    })

    return { config }
  },
  { persist: true }
)
