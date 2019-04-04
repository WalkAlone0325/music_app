import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Home from './views/Home.vue';
import Artists from './views/Artists.vue';
import Listcate from './views/Listcate.vue';
import Mine from './views/Mine.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'artists',
          component: Artists
        },
        {
          path: 'listcate',
          component: Listcate
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          path: 'search',
          component: Search
        }
      ]
    }
  ],
});
