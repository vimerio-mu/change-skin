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
import moduleEditgrid from './modules/editgrid'
import moduleInput from './modules/input'
import moduleInputNumber from './modules/inputnumber'
import moduleMsgbox from './modules/msgbox'
import moduleNotice from './modules/notice'
import modulePage from './modules/page'
import modulePoptip from './modules/poptip'
import moduleRadio from './modules/radio'
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
    editgrid: moduleEditgrid,
    input: moduleInput,
    inputnumber: moduleInputNumber,
    msgbox: moduleMsgbox,
    notice: moduleNotice,
    page: modulePage,
    poptip: modulePoptip,
    radio: moduleRadio,
  }
})

export default store;