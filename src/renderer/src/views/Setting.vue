<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-16 14:12:37
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 14:29:36
 * @FilePath: /wallpaper/src/renderer/src/views/Setting.vue
 * @Description: 设置界面
-->
<template>
  <main class="p-3 bg-[#34495e] text-white flex flex-col justify-between">
    <section class="mt-6">
      <h2 class="flex justify-center py-5 opacity-70 text-sm">设置参数</h2>
      <div class="flex gap-1 items-center">
        <el-input v-model="config.saveDirectory" placeholder="请选择壁纸保存目录" disabled />
        <el-button type="primary" @click="setImageSaveDirectory">选择壁纸保存目录</el-button>
      </div>
    </section>
    <div class="text-xs opacity-30 font-mono font-light flex flex-col items-center mb-5">
      <span class="text-orange-100">杨杨作品</span>
      <div>杨杨与Bug</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useConfig } from '@renderer/store/useConfig'
import useWallpaper from '@renderer/hooks/useWallpaper'
const { config } = useConfig()
const { setImageSaveDirectory } = useWallpaper()
</script>

<style scoped></style>
