import Vue from "vue";
import Router from "vue-router";
//import { component } from "vue/types/umd";



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("./pages/Landing.vue")
    },
    {
      path: "/home",
      name: "/home",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/register",
      name: "registerUser",
      component: () => import("./pages/routes/Register.vue")
    },
    {
      path: "/info",
      name: "indepth",
      component: () => import("./pages/routes/Indepth.vue")
    },
    {
      path: "/routes",
      name: "/routes",
      component: () => import("./pages/routes/Routes.vue")
    },
    {
      path: "/addRoute/",
      name: "addRoute",
      component: () => import("./pages/routes/addRoutes.vue")
    }
    
  ]
});
