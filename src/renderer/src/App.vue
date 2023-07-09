<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 15:46:42
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-09 18:26:32
 * @FilePath: /wallpaper/src/renderer/src/App.vue
 * @Description: app.vue
-->
<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main>
      <Navbar />
      <router-view />
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
