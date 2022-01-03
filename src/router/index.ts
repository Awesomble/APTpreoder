import {
  createRouter, createWebHistory, Router, RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/page/Home.vue'),
  },
  {
    path: '/supportType',
    name: 'supportType',
    component: () => import('@/page/userData/SupportType.vue'),
  },
  {
    path: '/supportFamily',
    name: 'supportFamily',
    component: () => import('@/page/userData/SupportFamily.vue'),
  },
  {
    path: '/supportFamilyYMD',
    name: 'supportFamilyYMD',
    component: () => import('@/page/userData/SupportFamilyYMD.vue'),
  },
  {
    path: '/supportArea',
    name: 'supportArea',
    component: () => import('@/page/userData/SupportArea.vue'),
  },
  {
    path: '/supportAreaYMD',
    name: 'supportAreaYMD',
    component: () => import('@/page/userData/SupportAreaYMD.vue'),
  },
  {
    path: '/supportHomeLess',
    name: 'supportHomeLess',
    component: () => import('@/page/userData/SupportHomeLess.vue'),
  },
  {
    path: '/supportBank',
    name: 'supportBank',
    component: () => import('@/page/userData/SupportBank.vue'),
  },
  {
    path: '/supportIncome',
    name: 'supportIncome',
    component: () => import('@/page/userData/SupportIncome.vue'),
  },
  {
    path: '/aptList',
    name: 'aptList',
    component: () => import('@/page/AptList.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
