
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import favorite from './pages/favorite.vue'
import home from './pages/home.vue'

const app = createApp(App)
const routes = [
    {path:'/favorite', name: 'favorite', component: favorite},
    {path:'/', name: 'home', component: home},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
