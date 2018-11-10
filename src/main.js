import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui' 
// import 'mint-ui/lib/style.css'
/*import 'assets/js/rem.js'*/
// Vue.use(MintUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
