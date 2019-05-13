import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import index from "./views/index.vue";
import IndexAnyCli from "./components/IndexAnyCli.vue";
import IndexAnyZd from "./components/IndexZd.vue";
import gztcentercom from "./components/gzt-center-com.vue";
import yhglznxnine from "./components/yhgl-znx-nine.vue";

// zhq组件
import userVip from './components/jeecms-userVip.vue'
import useradd from './components/jeecms-useradd.vue'
import userRole from './components/jeecms-userRole.vue'
import userAccount from './components/jeecms-userAccount.vue'
import userAlladm from './components/jeecms-userAlladm.vue'



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
        path:'userVip',
        name:'userVip',
        component:userVip
      },
      {
        path:'userRole',
        name:'userRole',
        component:userRole
      },
      {
        path:'userAccount',
        name:'userAccount',
        component:userAccount
      },
      {
        path:'userAlladm',
        name:'userAlladm',
        component:userAlladm
      },
      {
        path:'useradd',
        name:'useradd',
        component:useradd,
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
  ]
});
