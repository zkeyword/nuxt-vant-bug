import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', name: 'Home', component: Home },
    ]
  })

  return router
}
