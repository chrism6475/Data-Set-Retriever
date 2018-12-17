import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {path: '/', component: 'Home'},
  {path: '/about', component: 'About'},
  {path: '*', component: 'NotFound'}
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`),
    image: require('../assets/images/world-bank.jpg')
  }
})
Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
