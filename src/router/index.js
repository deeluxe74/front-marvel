import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Home from '../views/Home.vue';
import Listing from '../views/Listing.vue';
import Favorites from '../views/Favorites.vue';
import Details from '../components/shares/Details.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/hero',
    component: Listing,
    name: 'Listing',
  },
  {
    path: '/favorites',
    component: Favorites,
    name: 'Favorites',
  },
  {
    path: '/details/:id',
    component: Details,
    name: 'Details',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
