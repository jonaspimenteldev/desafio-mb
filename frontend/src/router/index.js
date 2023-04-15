import { createRouter, createWebHistory } from 'vue-router'
import Registration from '@/pages/registration/Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: Registration
    }
  ]
})

export default router
