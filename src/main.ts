import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Opret Vuetify-instanst
const vuetify = createVuetify({
  components,
  directives,
})

// Opret Vue-applikationen
const app = createApp(App)

// Brug router og Vuetify i applikationen
app.use(router).use(vuetify).mount('#app')
