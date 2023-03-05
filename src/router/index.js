// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/authorization',
        name: 'authorization',
        component: () => import('@/views/Authorization.vue'),
      },
      {
        path: 'catalog',
        name: 'catalog',
        component: () => import('@/views/Catalog.vue')
      },
      {
        path: 'company/:companyId',
        name: 'company',
        component: () => import('@/views/Company.vue'),
        props: true,
      },
      {
        path: 'product/:productId',
        name: 'more-at-product',
        component: () => import('@/views/Product.vue'),
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
