import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    { 
      mode:'history',
      path: '/',
      name: 'login',
      component: resolve => require(['@/pages/login/'], resolve)//懒加载
      // children:[
      //   { 
      //      path: '/register',
      //      name: 'register',
      //      component: resolve => require(['@/pages/register/'], resolve),//懒加载
       
      //   }
      // ]
     }
    // { 
    //   mode: 'history',
    //   path: '/register',
    //   name: 'register',
    //   component: resolve => require(['@/pages/login/'], resolve)//懒加载
    // }
  ]
})
