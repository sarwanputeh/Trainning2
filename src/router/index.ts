import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import D_layout from '@/layouts/D_layout.vue'
import DindexVIew from '@/views/Dashbord/DindexVIew.vue'
import categoryRoutes from './category'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: D_layout,
      children:[
        {path:"",
         name:"DindexVIew",
        component: DindexVIew},
        ...categoryRoutes,
      ]
    },
    //Import หรือเรียกใช้ Route
  
  ]
})

export default router
