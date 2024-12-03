import { createWebHistory, createRouter } from "vue-router"
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes
})

export default router