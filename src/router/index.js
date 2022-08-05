import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DownloadPage from '../views/DownloadPage.vue'
import InfoPage from '../views/InfoPage.vue'
import AlertPage from '../views/components/AlertPage.vue'
import BadgePage from '../views/components/BadgePage.vue'
import BacktopPage from '../views/components/BacktopPage.vue'
import CalendarPage from '../views/components/CalendarPage.vue'
import DatePickerPage from '../views/components/DatePickerPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skins/:name',
    name: 'skins',
    component: () => import(/* webpackChunkName: "about" */ '../views/skinSettings.vue'),
    children: [
      {
        path: 'alert',
        component: AlertPage,
      },
      {
        path: 'badge',
        component: BadgePage,
      },
      {
        path: 'backtop',
        component: BacktopPage,
      },
      {
        path: 'calendar',
        component: CalendarPage,
      },
      {
        path: 'datepicker',
        component: DatePickerPage,
      },
    ],
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadPage
  },
  {
    path: '/info',
    name: 'info',
    component: InfoPage
  },
]

const router = new VueRouter({
  routes
})

export default router
