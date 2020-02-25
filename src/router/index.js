import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../views/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/user/users.vue'
import Rights from '../components/rights/rights.vue'
import Roles from '../components/rights/roles.vue'
import Cart from '../components/goods/cart.vue'
import Params from '../components/goods/params.vue'
import List from '../components/goods/list.vue'
import Add from '../components/goods/add.vue'
import Order from '../components/order/order.vue'
import Report from '../components/report/report.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cart },
      { path: '/params', component: Params },
      { path: '/goods', component: List },
      { path: '/goods/add', component: Add },
      { path: '/order', component: Order },
      { path: '/report', component: Report }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
