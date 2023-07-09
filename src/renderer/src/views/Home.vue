<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:16:18
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-09 18:27:40
 * @FilePath: /wallpaper/src/renderer/src/views/Home.vue
 * @Description: 壁纸首页
-->
<template>
  <main>
    <img
      ref="img"
      src="http://localhost:3000/wallpaper/2.jpeg"
      alt=""
      class="aspect-video cursor-pointer nodrag"
      draggable="false"
      @click="getRandomImage"
    />
    <div
      class="cursor-pointer bg-gray-200 text-center py-3 m-3 rounded-lg hover:bg-gray-300 duration-500 opacity-80 shadow-sm nodrag"
      @click="handleDownload"
    >
      设为壁纸
    </div>
    <div class="mx-3 text-xs text-gray-700 flex justify-between items-center">
      <div>杨杨与Bug</div>
      <div class="hover:font-bold cursor-pointer text-sm nodrag">下载壁纸</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { onMounted, ref } from 'vue'
import request from '@renderer/plugins/asiox'

const img = ref<HTMLImageElement>()

/**
 * @description: 点击获取图片
 * @return {*}
 */
const getRandomImage = async (): Promise<void> => {
  const res = await request.get('/')
  const loading = ElLoading.service({ background: 'rgba(255, 255, 255, 0.2)' })
  img.value!.src = res.data
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}

/**
 * @description: 下载壁纸
 * @return {*}
 */
const handleDownload = (): void => {
  window.api.setWallpaper('2.jpeg')
}

onMounted(() => {
  getRandomImage()
})
</script>
<style scoped></style>
