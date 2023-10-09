import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import FormsView from '../views/FormsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
  path: '/forms',
  name: 'forms',
  component: FormsView,
  },
    
  
  //add Kristia's path
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
