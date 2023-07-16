<!--
 * @Author: yy 691335336@qq.com
 * @Date: 2023-07-02 16:25:01
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-07-16 16:02:48
 * @FilePath: /wallpaper/src/renderer/src/components/Navbar.vue
 * @Description: 导航栏
-->
<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section class="text-xs opacity-80">杨杨桌面壁纸</section>
    <section class="flex justify-center items-center gap-2">
      <pic
        theme="outline"
        size="20"
        class="cursor-pointer nodrag text-gray-500"
        :class="{ 'icon-color': $route.name == 'Home' }"
        @click="$router.push('/')"
      />
      <setting-one
        theme="outline"
        size="20"
        class="cursor-pointer nodrag text-gray-500"
        :class="{ 'icon-color': $route.name == 'Setting' }"
        @click="$router.push('setting')"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
</script>

<style scoped>
.icon-color {
  @apply text-orange-600;
}
</style>
