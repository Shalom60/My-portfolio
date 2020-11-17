import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/about.vue";
import Contact from "../components/contact.vue";
import Works from "../components/works.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
   
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/works",
    component: Works,
  },
  {
    path: "/about",
    component: About,
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
