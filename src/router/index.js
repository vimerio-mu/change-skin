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
import ButtonPage from '../views/components/ButtonPage.vue'
import UInfoPanelPage from '../views/components/UInfoPanelPage'
import SwitchPage from '../views/components/SwitchPage'
import UChartsPage from '../views/components/UChartsPage'
import IconRankPage from '../views/components/IconRankPage'
import IconHoverPage from '../views/components/IconHoverPage'
import SwitchDescribePage from '../views/components/SwitchDescribePage'
import CompareIconPage from '../views/components/CompareIconPage'
import USimpledictPage from '../views/components/USimpledictPage'
import UCommunicationNumberPage from '../views/components/UCommunicationNumberPage'
import HTreeExtPage from '../views/components/HTreeExtPage'
import WavesPage from '../views/components/WavesPage'
import WaterMarkPage from '../views/components/WaterMarkPage'
import TypeFieldPage from '../views/components/TypeFieldPage'
import TreePage from '../views/components/TreePage'
import TransferTablePage from '../views/components/TransferTablePage'
import TransferPage from '../views/components/TransferPage'
import TopbarPage from '../views/components/TopbarPage'
import SkinColorPage from '../views/SkinColorPage.vue'
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
      {path:'/',component: SkinColorPage},
      {path:'button',component: ButtonPage},
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
      { path:'switch',component: SwitchPage,},
      { path:'uInfoPanel',component: UInfoPanelPage,},
      { path:'uCharts',component: UChartsPage},
      { path:'iconRank',component:IconRankPage},
      { path:'iconHover',component:IconHoverPage},
      { path:'switchDescribe',component:SwitchDescribePage},
      { path:'compareIcon',component:CompareIconPage},
      { path:'simpledict',component:USimpledictPage},
      { path:'communicationNumber',component:UCommunicationNumberPage},
      { path:'hTreeExt',component:HTreeExtPage},
      { path:'waves',component:WavesPage},
      { path:'waterMark',component:WaterMarkPage},
      { path:'typeField',component:TypeFieldPage},
      { path:'tree',component:TreePage},
      { path:'transferTable',component:TransferTablePage},
      { path:'transfer',component:TransferPage},
      { path:'topbar',component:TopbarPage},
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
