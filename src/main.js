import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(Vuelidate);




//  Vue.prototype.$hostUrl = 'http://ht.rose2025.cn/Interface';
// Vue.prototype.$hostUrl = 'http://192.168.8.64/Interface'
 Vue.prototype.$hostUrl = 'http://123.127.162.223:9997/Interface'//域名对应外网ip
// Vue.prototype.$hostUrl = 'http://192.168.8.223:9997/Interface'//域名对应内网ip




Vue.prototype.$scrollToTop = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
