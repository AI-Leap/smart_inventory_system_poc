import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AIAssited from '../views/AIAssisted.vue';
import Orders from '../views/Orders.vue';
import Inventories from '../views/Inventories.vue';
import Delivery from '../views/Delivery.vue';
import OrderDetail from '../views/OrderDetail.vue';

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
    path: '/ai',
    name: 'AI',
    component: AIAssited,
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
  },
  {
    path: '/inventories',
    name: 'inventories',
    component: Inventories,
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery,
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    component: OrderDetail,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
