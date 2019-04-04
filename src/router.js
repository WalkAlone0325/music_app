import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Home from './views/Home.vue';
import Artists from './views/Artists.vue';
import Listcate from './views/Listcate.vue';
import Mine from './views/Mine.vue';
import Search from './views/Search.vue';
import HotList from './views/musiclist/list/HotList.vue';
import KingLIst from './views/musiclist/list/KingLIst.vue';
import NewsList from './views/musiclist/list/NewsList.vue';
import MoreList from './views/MoreList.vue';
import MusicPlay from './views/MusicPlay.vue';
import ArtistsDetails from './views/artistsDetails/ArtistsDetails.vue';
import LicateDetails from './views/licateDetails/LicateDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'MusicPlay',
      component: MusicPlay
    },
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home,
          redirect: '/home/hot',
          children: [
            {
              path: 'hot',
              component: HotList
            },
            {
              path: 'king',
              component: KingLIst
            },
            {
              path: 'news',
              component: NewsList
            },
          ]
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
        },
        {
          path: 'more',
          name: 'MoreList',
          component: MoreList
        },
        {
          path: 'artistsdetails',
          name: 'ArtistsDetails',
          component: ArtistsDetails
        },
        {
          path:"licatedetails",
          name:"LicateDetails",
          component:LicateDetails
        }
      ]
    }
  ],
});
