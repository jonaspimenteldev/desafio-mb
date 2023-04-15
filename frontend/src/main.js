import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from '../src/http/axios'

import mascaraDiretiva from './utils/diretiva'

import './assets/scss/base.scss'

const pinia = createPinia()

const app = createApp(App)

mascaraDiretiva(app)

app.config.globalProperties.$axios = axios

app.use(pinia)
app.use(router)

app.mount('#app')
