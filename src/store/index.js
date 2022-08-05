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
  }
})

export default store;