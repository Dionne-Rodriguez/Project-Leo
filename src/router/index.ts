import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home',
    children: [
      {
        path: 'home1',
        component: () => import('@/views/GettingStarted.vue')
      },
      {
        path: 'home2',
        component: () => import('@/views/Tab2Page.vue')
      },
    ]
  },
  {
    path: '/GettingStarted/',
    component: TabsPage,
    children: [
  
      {
        path: 'OnboardingOne',
        component: () => import('@/views/GettingStarted.vue')
      },
      {
        path: 'OnboardingTwo',
        component: () => import('@/views/ConnectYourHumanaAccts.vue')
      },
      {
        path: 'OnboardingThree',
        component: () => import('@/views/ConnectYourDevice.vue')
      },
      {
        path: 'OnboardingFour',
        component: () => import('@/views/SelectYourProviders.vue')
      },
      {
        path: 'OnboardingFive',
        component: () => import('@/views/SelectAllYourProviders.vue')
      }
    ]
  },
  {
    path: '/Goals/',
    component: TabsPage,
    children:[
      {
        path: 'goal1',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'goal2',
        component: () => import('@/views/GettingStarted.vue')
      },
      {
        path: 'goal3',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'goal4',
        component: () => import('@/views/Tab3Page.vue')
      },
    ]
  },
  {
    path: '/Rewards/',
    component: TabsPage,
    children:[
      {
        path: 'rewards1',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'rewards2',
        component: () => import('@/views/GettingStarted.vue')
      },
      {
        path: 'rewards3',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'rewards4',
        component: () => import('@/views/Tab3Page.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
