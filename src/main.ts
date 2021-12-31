import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/style.scss'
import 'swiper/css'

declare global {
    interface Window {
        mobiscroll: any
    }
}

window.mobiscroll = mobiscroll
window.mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light',
  lang: 'ko',
}

const app = createApp(App)

app.use(
  createGtm({
    id: 'GTM-NQG64TP',
  }),
)

// @ts-ignore
createApp(App).use(router).use(store).mount('#app')
