import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/css/style.scss'
// eslint-disable-next-line import/order
import mobiscroll from '@mobiscroll/javascript'
import '@mobiscroll/javascript/dist/css/mobiscroll.min.css'

// @ts-ignore
// eslint-disable-next-line no-undef
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
