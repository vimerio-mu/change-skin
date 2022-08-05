const moduleAlert = {
  state: () => ({
    // 使用小驼峰，单引号
    alertDescColor: '#333',
    alertMessageColor: '#333',
    alertSuccessBorderColor: '#B7EB8F',
    alertSuccessBgcolor: '#e8f7f1',
    alertSuccessIconColor: '#1cb77b',
    alertInfoBorderColor: '#91CBFF',
    alertInfoBgcolor: '#E5F4FE',
    alertInfoIconColor: '#029afd',
    alertWarningBorderColor: '#FDD496',
    alertWarningBgcolor: '#fDf7ec',
    alertWarningIconColor: '#f2b044',
    alertErrorBorderColor: '#FFA39E',
    alertErrorBgcolor: '#FDEDEE',
    alertErrorIconColor: '#f14c5d',
    alertCloseIconfontColor: '#979797',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeAlertDescColor(state, newColor) {
      state.alertDescColor = newColor
    },
    changeAlertMessageColor(state, newColor) {
      state.alertMessageColor = newColor
    },
    changeAlertSuccessBorderColor(state, newColor) {
      state.alertSuccessBorderColor = newColor
    },
    changeAlertSuccessBgcolor(state, newColor) {
      state.alertSuccessBgcolor = newColor
    },
    changeAlertSuccessIconColor(state, newColor) {
      state.alertSuccessIconColor = newColor
    },
    changeAlertInfoBorderColor(state, newColor) {
      state.alertInfoBorderColor = newColor
    },
    changeAlertInfoBgcolor(state, newColor) {
      state.alertInfoBgcolor = newColor
    },
    changeAlertInfoIconColor(state, newColor) {
      state.alertInfoIconColor = newColor
    },
    changeAlertWarningBorderColor(state, newColor) {
      state.alertWarningBorderColor = newColor
    },
    changeAlertWarningBgcolor(state, newColor) {
      state.alertWarningBgcolor = newColor
    },
    changeAlertWarningIconColor(state, newColor) {
      state.alertWarningIconColor = newColor
    },
    changeAlertErrorBorderColor(state, newColor) {
      state.alertErrorBorderColor = newColor
    },
    changeAlertErrorBgcolor(state, newColor) {
      state.alertErrorBgcolor = newColor
    },
    changeAlertErrorIconColor(state, newColor) {
      state.alertErrorIconColor = newColor
    },
    changeAlertCloseIconfontColor(state, newColor) {
      state.alertCloseIconfontColor = newColor
    },
  }
}
export default moduleAlert;