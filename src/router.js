import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import index from "./views/index.vue";
import IndexAnyCli from "./components/IndexAnyCli.vue";
import IndexAnyZd from "./components/IndexZd.vue";
import gztcentercom from "./components/gzt-center-com.vue";
import yhglznxnine from "./components/yhgl-znx-nine.vue";
import datas from "./component/jiachang/datas.vue";
import admin from "./admin";




Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // admin,
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/index",
      name: "index",
      component: index,

      children: [
        {
          path: 'operation',
          component: () => import('@/components/operation'),
          children: [
            {
              path: "jecms1",
              component: () => import('@/components/operation/jecms1')
            },
            {
              path: "jecms2",
              component: () => import('@/components/operation/jecms2')
            },
            {
              path: "",
              redirect: "jecms1"
            }
          ]
        }

        , {
          path: "IndexAnyCli",
          name: "IndexAnyCli",
          component: IndexAnyCli,
        },
        {
          path: "",
          redirect: "gztcentercom"
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
        },
        {
          path: "datas",
          name: "datas",
          component: datas,
        }
      ]
    }
    ,

  ]
});
