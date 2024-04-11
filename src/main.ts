import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createVuetify } from 'vuetify'
import router from './router'
 
const vuetify = createVuetify()
const app = createApp(App)

// Use plugins
app.use(router)
app.use(vuetify)
app.mount('#app')