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
import moduleIconHover from './modules/iconHover'
import moduleSwitchDescribe from './modules/switchDescribe'
import moduleCompareIcon from './modules/compareIcon'
import moduleUSimpledict from './modules/USimpledict'
import moduleUCommunicationNumber from './modules/uCommunicationNumber'
import moduleHTreeExt from './modules/hTreeExt'
import moduleWaves from './modules/waves'
import moduleWaterMark from './modules/waterMark'
import moduleTypeField from './modules/typeField'
import moduleTree from './modules/tree'
import moduleTransferTable from './modules/transferTable'
import moduleTransfer from './modules/transfer'
import moduleTopbar from './modules/topbar'
import moduleTag from './modules/tag'
import moduleTabs from './modules/tabs'
import moduleTable from './modules/table'
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
    iconHover:moduleIconHover,
    switchDescribe:moduleSwitchDescribe,
    compareIcon:moduleCompareIcon,
    uSimpledict:moduleUSimpledict,
    uCommunicationNumber:moduleUCommunicationNumber,
    hTreeExt:moduleHTreeExt,
    waves:moduleWaves,
    waterMark:moduleWaterMark,
    typeField:moduleTypeField,
    tree:moduleTree,
    transferTable:moduleTransferTable,
    transfer:moduleTransfer,
    topbar:moduleTopbar,
    tag:moduleTag,
    tabs:moduleTabs,
    table:moduleTable,
  }
})

export default store;