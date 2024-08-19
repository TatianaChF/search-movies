import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'

const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    { name: 'Home', path: '/', component: MainPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).use(vuetify).mount('#app')
