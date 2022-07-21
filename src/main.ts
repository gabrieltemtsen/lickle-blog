import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/style.css'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/fontawesome/css/all.min.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
