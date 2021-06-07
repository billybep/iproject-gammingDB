import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: _ => import('../views/Wishlist.vue'),
    beforeEnter: (_1, _2, next) => {
      if (!localStorage.access_token) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: _ => import('../views/SignUp.vue'),
    beforeEnter: (_1, _2, next) => {
      if (localStorage.access_token) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/detail/:id',
    name: 'DetailGame',
    component: _ => import('../views/DetailGame.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: _ => import('../views/Profile.vue')
  },
  {
    path: '/category/:categoryId',
    name: 'Playstation',
    component: _ => import('../views/FilterByPlaystation.vue')
  },
  {
    path: '/category/:categoryId',
    name: 'Xbox',
    component: _ => import('../views/FilterByXbox.vue')
  },
  {
    path: '/category/:categoryId',
    name: 'PC',
    component: _ => import('../views/FilterByPC.vue')
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: _ => import('../views/NotFoundPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
