import { createApp } from 'vue'

import Root from './Root.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './assets/index.css'
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(Root)
app.use(router)
app.use(ElementPlus)
app.use(VuePlyr, {
  plyr: {}
})

router.isReady().then(() => {
  app.mount('#root')
})
