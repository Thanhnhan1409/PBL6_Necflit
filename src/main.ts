import { createApp } from 'vue'

import Root from './Root.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import './assets/index.css'

const app = createApp(Root)
app.use(router)
app.use(ElementPlus)

router.isReady().then(() => {
  app.mount('#root')
})
