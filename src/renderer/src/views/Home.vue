<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:16:18
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-04 20:48:58
 * @FilePath: /wallpaper/src/renderer/src/views/Home.vue
 * @Description:
-->
<template>
  <main>
    <img src="2.jpeg" alt="" class="aspect-video nodrag" draggable="false" @click="handleClick" />
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
function handleClick(): void {
  // alert(1)
}

/**
 * @description: 下载壁纸
 * @return {*}
 */
const handleDownload = (): void => {
  window.api.setWallpaper('2.jpeg')
}
</script>
<style scoped></style>
