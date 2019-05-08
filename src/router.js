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
    {
      path: '/work/:companyId?',
      name: 'work',
      component: () => import(/* webpackChunkName: "work" */ './views/Work.vue'),
      meta: {
        title: 'Work',
      },
    },
    {
      path: '/*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notFound" */ './views/Not-Found.vue'),
      meta: {
        title: 'Not Found',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `Darren Harvey ${to.meta.title ? `| ${to.meta.title} ` : ''}`;
  next();
});

export default router;
