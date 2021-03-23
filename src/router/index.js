import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/means',
    name: 'Means',
    component: () => import('../views/Means.vue')
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import('../views/Achievements.vue')
  },
  {
    path: '/create-task',
    name: 'CreateTask',
    component: () => import('../views/CreateTask.vue')
  },
  {
    path: '/create-user',
    name: 'FormCreateUser',
    component: () => import('../views/FormCreateUser.vue')
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
