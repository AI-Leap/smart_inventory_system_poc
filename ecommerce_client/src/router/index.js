import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Order from '../views/Order.vue';
import Checkout from '../views/Checkout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
