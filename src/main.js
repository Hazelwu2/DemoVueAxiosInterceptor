// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import及使用
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
// 載入相關css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css';
import BlockUI from 'vue-blockui';

Vue.use(BlockUI);
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
