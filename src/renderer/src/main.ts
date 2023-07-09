import { createApp } from 'vue'
import App from '@renderer/App.vue'
import '@renderer/assets/css/global.scss'
import '@renderer/assets/css/tailwind.css'
import router from '@renderer/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
