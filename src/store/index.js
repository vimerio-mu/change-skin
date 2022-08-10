import Vuex from 'vuex'
import Vue from 'vue'
import moduleBase from './modules/A/base'
import moduleCommon from './modules/A/common'
import moduleBorder from './modules/A/border'
import moduleBackground from './modules/A/background'
import moduleShadow from './modules/A/shadow'
import moduleAlert from './modules/alert'
import moduleBadge from './modules/badge'
import moduleBacktop from './modules/backtop'
import moduleCalendar from './modules/calendar'
import moduledatePicker from './modules/datepicker'
import moduleButton from './modules/Button/button'
import moduleDangerButton from './modules/Button/dangerButton'
import moduleDefaultButton from './modules/Button/defaultButton'
import moduleErrorButton from './modules/Button/errorButton'
import moduleGhostButton from './modules/Button/ghostButton'
import moduleInfoButton from './modules/Button/infoButton'
import modulePrimaryButton from './modules/Button/primaryButton'
import moduleSmallButton from './modules/Button/smallButton'
import moduleSuccessButton from './modules/Button/successButton'
import moduleWarningButton from './modules/Button/warningbutton'
import moduleUInfoPanel from './modules/uInfoPanel'
import moduleUCharts from './modules/uCharts'
import moduleSwitch from './modules/switch'
import moduleIconRank from './modules/iconRank'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentSkin: ""
  },
  mutations: {
    changeCurrentSkin(state, skinName) {
      state.currentSkin = skinName
    } 
  },
  modules: {
    Base: moduleBase,
    Common: moduleCommon,
    Border: moduleBorder,
    Background: moduleBackground,
    Shadow: moduleShadow,
    alert: moduleAlert,
    badge: moduleBadge,
    backtop: moduleBacktop,
    calendar: moduleCalendar,
    datepicker: moduledatePicker,
    button:moduleButton,
    dangerButton:moduleDangerButton,
    defaultButton:moduleDefaultButton,
    errorButton:moduleErrorButton,
    ghostButton:moduleGhostButton,
    infoButton:moduleInfoButton,
    primaryButton:modulePrimaryButton,
    smallButton:moduleSmallButton,
    successButton:moduleSuccessButton,
    warningButton:moduleWarningButton,
    uInfoPanel:moduleUInfoPanel,
    uCharts:moduleUCharts,
    switch:moduleSwitch,
    iconRank:moduleIconRank,

  }
})

export default store;