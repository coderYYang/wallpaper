<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 15:46:42
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 14:20:02
 * @FilePath: /wallpaper/src/renderer/src/App.vue
 * @Description: app.vue
-->
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen">
      <Navbar />
      <router-view #default="{ Component }">
        <Component :is="Component" class="flex-1" />
      </router-view>
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
