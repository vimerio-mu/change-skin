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
import EditgridPage from '../views/components/EditgridPage.vue'
import InputPage from '../views/components/InputPage.vue'
import InputNumberPage from '../views/components/InputNumberPage.vue'
import MsgboxPage from '../views/components/MsgboxPage.vue'
import NoticePage from '../views/components/NoticePage.vue'
import PagePage from '../views/components/PagePage.vue'
import PoptipPage from '../views/components/PoptipPage.vue'
import RadioPage from '../views/components/RadioPage.vue'
import SelectPage from '../views/components/SelectPage.vue'
import SelectTablePage from '../views/components/SelectTablePage.vue'
import StepsPage from '../views/components/StepsPage.vue'
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
      {
        path: 'editgrid',
        component: EditgridPage,
      },
      {
        path: 'input',
        component: InputPage,
      },
      {
        path: 'inputnumber',
        component: InputNumberPage,
      },
      {
        path: 'msgbox',
        component: MsgboxPage,
      },
      {
        path: 'notice',
        component: NoticePage,
      },
      {
        path: 'page',
        component: PagePage,
      },
      {
        path: 'poptip',
        component: PoptipPage,
      },
      {
        path: 'radio',
        component: RadioPage,
      },
      {
        path: 'select',
        component: SelectPage,
      },
      {
        path: 'selecttable',
        component: SelectTablePage,
      },
      {
        path: 'steps',
        component: StepsPage,
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
