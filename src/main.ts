import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import mobiscroll from '@mobiscroll/javascript'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/style.scss'
import '@mobiscroll/javascript/dist/css/mobiscroll.min.css'

mobiscroll.settings = {
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
