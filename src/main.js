import './public-path';
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import { Popup } from 'vant'
import 'vant/lib/index.css';
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { Search } from 'vant';
import { NavBar } from 'vant';
import router from "./router";


Vue.use(Popup).use(Search).use(NavBar);

Vue.config.productionTip = false;

// let router = null;
let instance = null;
function render(props = {}) {
  const { container, name} = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vue-2' : '/',
  //   mode: 'history',
  //   routes,
  // });
  instance = new Vue({
    router,
    vuetify,
    store,
    Popup,
    Search,
    NavBar,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}
