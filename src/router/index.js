import { createRouter, createWebHistory } from 'vue-router'
import catalogView from "@/views/CatalogView";
import cartView from "@/views/CartView";
import settingsView from "@/views/SettingsView";

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: catalogView
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView
  },
  {
    path: '/settings',
    name: 'settings',
    component: settingsView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
