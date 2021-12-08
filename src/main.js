import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.css'
import '@/assets/styles/reset.css'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/font.css'
import Foot from '@/components/Foot.vue'
import cookie from '@/utils/cookie.js'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/assets/pictures/loading.gif')
})

Vue.prototype.cookie = cookie;

Vue.component("Foot", Foot);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')