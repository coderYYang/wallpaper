<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:16:18
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 15:21:20
 * @FilePath: /wallpaper/src/renderer/src/views/Home.vue
 * @Description: 壁纸首页
-->
<template>
  <main>
    <img
      ref="img"
      :src="config.url"
      class="aspect-video cursor-pointer nodrag"
      draggable="false"
      @click="getRandomImage"
    />
    <div
      class="cursor-pointer bg-white text-center py-3 m-3 rounded-lg hover:shadow-sm hover:bg-gray-300 duration-500 opacity-80 nodrag"
      @click="setWallpaper"
    >
      设为壁纸
    </div>
    <div class="mx-3 text-xs text-gray-700 flex justify-between items-center">
      <div>杨杨与Bug</div>
      <div class="hover:font-bold cursor-pointer text-sm nodrag" @click="downloadImage">
        下载壁纸
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { onMounted, ref } from 'vue'
import request from '@renderer/plugins/asiox'
import useWallpaper from '@renderer/hooks/useWallpaper'
import { useConfig } from '@renderer/store/useConfig'

const { config } = useConfig()
const { setWallpaper, downloadImage } = useWallpaper()

const img = ref<HTMLImageElement>()

/**
 * @description: 点击获取图片
 * @return {*}
 */
const getRandomImage = async (): Promise<void> => {
  const res = await request.get('/')
  const loading = ElLoading.service({ background: 'rgba(255, 255, 255, 0.2)' })
  config.url = res.data
  img.value!.src = config.url
  img.value!.addEventListener('load', () => loading.close())
}

onMounted(() => {
  if (!config.url) getRandomImage()
})
</script>
<style scoped></style>
