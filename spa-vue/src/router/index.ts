import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTopVue from '@/views/AppTop.vue';

const routerSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTopVue
  },
  {
    path: "/member/memberList",
    name: "MemberList",
    component: () => {
      return import("@/views/member/MemberList.vue");
    }
  },
  {
    path: "/member/detail/:id",
    name: "MemberDetail",
    component: () => {
      return import("@/views/member/MemberDetail.vue");
    },
    props: (routes) => {
      const idNum = Number(routes.params.id);
      return {
        id: idNum
      };
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerSettings
})

export default router
