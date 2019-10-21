import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bottom from './components/bottom'
import About from './components/About'
import new1 from './components/new1'
import login from './components/login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import homeView from './components/homeView'
//导入组件,为定义路由做准备
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
//定义路由,参数暂定为路由路径和组件名称
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  { path: '/homeView', component: homeView },
  { path: '/bottom', component: bottom },
  { path: '/About', component: About },
  { path: '/new1', component: new1 },
  { path: '/login', component: login },

]
//对路由实例化
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

