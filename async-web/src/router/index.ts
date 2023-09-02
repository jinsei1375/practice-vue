import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import AppTopVue from '@/views/CityList.vue';

const routerSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'CityList',
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
    path: "/weatherInfo/:id",
    name: "WeatherInfo",
    component: () => {
      return import("@/views/WeatherInfo.vue");
    },
    props: true
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerSettings
})

export default router
