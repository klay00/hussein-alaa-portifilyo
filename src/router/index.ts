import HomePage from '@/pages/HomePage.vue'
import Projects from '@/pages/Projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', component: HomePage },
  { path: '/projects/:id', component: Projects },
  ]
})

export default router
