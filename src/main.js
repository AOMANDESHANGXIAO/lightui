// import './assets/main.css'
import './assets/fonts/iconfont.css'
// import './assets/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import lfUI from '@/dist/vite-lib.es.js'
import '@/dist/style.css'

const app = createApp(App)

app.use(createPinia()).use(lfUI)

app.mount('#app')
