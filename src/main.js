import Vue from "vue";
import Vuex from 'vuex'

import App from "./App.vue";
import router from "./router";

import store from "./store/index";

import './plugins/iview.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


import axios from 'axios'

Vue.prototype.$axios = axios


Vue.use(iView);
// Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");