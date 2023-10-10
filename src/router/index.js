import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import ManageView from '../views/ManageView.vue'
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
    
  
  {
    path: '/manage',
    name: 'manage',
    component: ManageView,
    },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
