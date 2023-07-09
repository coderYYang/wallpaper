import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router'
import ElementPlus from 'element-plus'
import '@renderer/assets/css/global.scss'
import '@renderer/assets/css/tailwind.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
