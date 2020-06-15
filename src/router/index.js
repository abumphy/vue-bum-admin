import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from '@/layout'

import Login from "../views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  // {
  //   path: "/home",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/bum-table",
    name: "BumTable",
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/bum-table")
  },
];

const router = new VueRouter({
  routes
});

export default router;
