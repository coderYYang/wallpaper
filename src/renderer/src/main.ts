import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import '@renderer/assets/css/global.scss'
import '@renderer/assets/css/tailwind.css'
import 'element-plus/dist/index.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
