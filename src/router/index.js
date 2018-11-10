import Vue from 'vue'
import Router from 'vue-router'
//const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')//定义路由路径,目的为了webpack打包的时候按需打包，
//语法require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')
const register = r => require.ensure([], () => r(require('../pages/register/register')), 'register')
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        //登录页面
        {
            path: '/login',
            component: login
        },
        //注册页面
        {
            path: '/register',
            component: register
        }
       ]
    }
  ]
})
