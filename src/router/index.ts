import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/GettingStarted/OnboardingOne',
    component: TabsPage,
    children: [  {
      path: 'homePage',
      component: () => import('@/views/Tab1Page.vue')
    },]
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
        path: 'HealthGoals',
        component: () => import('@/views/HealthGoals.vue')
      },
      {
        path: 'HowMuchDoYouWalk',
        component: () => import('@/views/HowMuchDoYouWalk.vue')
      },
      {
        path: 'WhatMotivatesYou',
        component: () => import('@/views/WhatMotivatesYou.vue')
      },
      {
        path: 'LetsStartYourHealthJourney',
        component: () => import('@/views/LetsStartYourHealthJourney.vue')
      },
      {
        path: 'ActiveGoals',
        component: () => import('@/views/ActiveGoals.vue')
      },
      
    ]
  },
  {
    path: '/Rewards/',
    component: TabsPage,
    children:[
      {
        path: 'Rewards',
        component: () => import('@/views/MyRewards.vue')
      },
      {
        path: 'Events',
        component: () => import('@/views/Events.vue')
      }
    ]
  },
  {
  path: '/Events/',
  component: TabsPage,
  children:[
    {
      path: 'Events',
      component: () => import('@/views/Events.vue')
    },
  ]
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
