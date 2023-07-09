/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:12:22
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-02 16:22:43
 * @FilePath: /wallpaper/src/renderer/src/router/index.ts
 * @Description: 路由
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('@renderer/views/Home.vue') },
  { path: '/setting', name: 'Setting', component: () => import('@renderer/views/Setting.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
