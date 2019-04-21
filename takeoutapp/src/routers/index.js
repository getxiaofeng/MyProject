/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../pages/User/User.vue'
import Shop from '../pages/Shop/Shop.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'

//   声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //  所有路由
  routes: [
    {
      path: '/user',
      component: User
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: './shop'
    }
  ]
})
