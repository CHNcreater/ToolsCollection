import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/LoginView.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      children: [
        {
          path: 'generate-guid',
          name: 'generate-guid',
          component: () => import('../views/tools/GenerateGuidView.vue')    
        },
        {
          path: 'calculate-date',
          name: 'calculate-date',
          component: () => import('../views/tools/CalculateDateView.vue')
        }
      ]
    }
  ]
})

export default router
