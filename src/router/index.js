import Vue from 'vue';
import Router from 'vue-router';
import linx from '@/components/linx';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'linx',
      component: linx,
    },
  ],
});
