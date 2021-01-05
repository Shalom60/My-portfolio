import Vue from "vue";
import VueRouter from "vue-router";
import About from "../components/about.vue";
import Works from "../components/works.vue";
import start from '../views/start.vue';
import d_m from '../views/d_m.vue';
import sdg from '../views/sdg.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/"
  },
  {
    path: "/start",
    name: 'start',
    component: start
  },
  {
    path: "/d_m",
    name: 'd_m',
    component: d_m
  },
  {
    path: "/sdg",
    name: 'sdg',
    component: sdg
  },
  {
    path: "/works",
    component: Works
  },
  {
    path: "/about",
    component: About
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
