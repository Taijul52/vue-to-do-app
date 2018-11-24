import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sports from '@/components/Sports'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
