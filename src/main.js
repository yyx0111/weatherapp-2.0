import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup } from 'vant'
import 'vant/lib/index.css';
import vuetify from './plugins/vuetify'
import { Search } from 'vant';
import { NavBar } from 'vant';
Vue.config.productionTip = false
Vue.use(Popup).use(Search).use(NavBar);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
