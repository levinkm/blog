import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.config.globalProperties.$axios = axios

// Create a custom Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
})

app.config.globalProperties.$axios = axiosInstance

app.use(createPinia())
app.use(router)

app.mount('#app')
