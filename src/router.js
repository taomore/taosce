import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import index from "./views/index.vue";
import IndexAnyCli from "./components/IndexAnyCli.vue";
import IndexAnyZd from "./components/IndexZd.vue";
import gztcentercom from "./components/gzt-center-com.vue";
import yhglznxnine from "./components/yhgl-znx-nine.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/index",
      name: "index",
      component: index,

      children: [{
        path: "IndexAnyCli",
        name: "IndexAnyCli",
        component: IndexAnyCli,
      },
      {
        path:"/index",
        redirect:"gztcentercom"
      },
      {
        path: "IndexAnyZd",
        name: "IndexAnyZd",
        component: IndexAnyZd,
      },
      {
        path: "gztcentercom",
        name: "gztcentercom",
        component: gztcentercom,
      },
      {
        path: "yhglznxnine",
        name: "yhglznxnine",
        component: yhglznxnine,
      }
    ]
    }
    ,

  ]
});
