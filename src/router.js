import Vue from "vue";
import Router from "vue-router";
import Home from "./views/indexhome";
import header1 from "./components/yhgl-znx-nine";
import header2 from "./components/yhgl-znx-eight";
import eight1 from "./components/eight-child-1";
import eight2 from "./components/zt-con-bottom";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [{
        path: "/yhgl-znx-nine",
        name: "header1",
        component: header1,
        
      },
      {
        path: 'yhgl-znx-eight',
        name: 'header2',
        component: header2,
        children: [
          {
          path: "eight-child-1",
          name: "eight1",
          component: eight1
        },
        {
          path: "zt-con-bott",
          name: "eight2",
          component: eight2
        },
        {
          path: "/yhgl-znx-eight",
          redirect: "zt-con-bott"
        },
      ]

      },




      ]
    },

    // {
    //   path:"./",
    //   name:"",
    //   component:


    // },




  ]
});
