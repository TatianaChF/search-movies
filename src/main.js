import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import MoviePage from './components/MoviePage.vue'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    { name: 'Home', path: '/', component: MainPage },
    { name: 'Movie', path: '/:name', component: MoviePage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
