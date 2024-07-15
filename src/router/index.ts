import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '../pages/UserPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserPage
    }
  ]
})

export default router
