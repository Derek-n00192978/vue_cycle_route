import Vue from "vue";
import Router from "vue-router";

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
      name: "home",
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
      ///:id added by Mohammed 02/03/2022 to get the route id when selecting a route
      path: "/routes/:id",
      name: "/routes",
      component: () => import("./pages/routes/Routes.vue")
    },
    {
      path: "/addRoute",
      name: "addRouteForm",
      component: () => import("./pages/routes/addRoutes.vue")
    },
    {
      path: "/route/bike/:type",
      name: "bike",
      component: () => import("./pages/routes/Bike.vue")
    }
    
  ]
});
