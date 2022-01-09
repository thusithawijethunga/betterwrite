import { createApp } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createPluginCore } from 'better-write-plugin-core'
import { MotionPlugin as motion } from '@vueuse/motion'
import tooltip from 'v-tooltip'
import toast, { POSITION } from 'vue-toastification'
import mitt from 'mitt'
import { VueEmitter } from 'better-write-types'

import router from './router'
import i18n from './lang'

import App from './App.vue'

import './css/preset.css'
import './css/tailwind.css'
import 'better-write-plugin-theme/css/inject.css'
import 'v-tooltip/dist/v-tooltip.css'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const head = createHead()
const store = createPinia()
const core = createPluginCore()
const emitter = mitt()

app.config.globalProperties.emitter = emitter as VueEmitter

app.use(router)
app.use(store)
app.use(i18n)
app.use(motion)
app.use(head)
app.use(core)
app.use(tooltip, {
  themes: {
    'better-write': {
      $extend: 'tooltip',
      $resetCss: true,
    },
  },
})
app.use(toast, {
  position: POSITION.TOP_CENTER,
  timeout: 4000,
  maxToasts: 3,
})

useRegisterSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update()
      }, 60 * 30 * 1000)
  },
})

router.isReady().then(() => app.mount('#app'))
