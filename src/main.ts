import { createApp } from 'vue'
import { createGtm } from 'vue-gtm'
import App from './App.vue'
import router from '@/router'
import { key, store } from '@/store'
import '@/assets/css/style.scss'

const app = createApp(App)

app.use(
  createGtm({
    id: 'GTM-W2D3MXC',
  }),
)

// @ts-ignore
createApp(App).use(router).use(store, key).mount('#app')
