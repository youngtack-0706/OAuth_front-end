import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },

  {
    path: '/login',
    name: '/login',
    component: () => import('pages/login/NaverLogin.vue')
  },
  {
    path: '/callback',
    name: '/callback',
    component: () => import('pages/login/NaverCallback.vue')
  },
];

export default routes;
