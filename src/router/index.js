import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)
export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      component: r => require.ensure([], () => r(require('@/pages/login/index')), 'login')
  }, {
      path: '/register',
      component: r => require.ensure([], () => r(require('@/pages/register/register')), 'register')
  }]
}]
