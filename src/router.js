import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import(/* webpackChunkName: "photography" */ './views/Photography.vue'),
      meta: {
        title: 'Photography',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: {
        title: 'Contact',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `Darren Harvey ${to.meta.title ? `| ${to.meta.title} ` : ''}`;
  next();
});

export default router;
