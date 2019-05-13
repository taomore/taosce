import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import './plugins/iview.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
