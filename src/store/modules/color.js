const moduleColor = {
  state: () => ({
    // 使用小驼峰，单引号
    primaryColor: '#298DFF',
    infoColor: '#298DFF',
    successColor: '#1ABE6B',
    warningColor: '#FF9901' ,
    errorColor: '#F5222D',
    changedColor: '#d9534f',
    linkColor: '#298DFF',
    linkHoverColor: '#298DFF',
    linkActiveColor: '#298DFF',
    selectedColor: '#298DFF',
    noSelectColor:'#e5ebf1',
    tooltipColor: '#fff',
    subsidiaryColor: '#c3cbd6',
    arrowColor: '#9EA7B4',
    rateStarColor: '#f5a623',
    iconColor:'#9EA7B4',
  }),
  mutations: {
    // 统一命名为changeXXX
    changePrimaryColor(state, newColor) {
      state.primaryColor = newColor
    },
    changeInfoColor(state, newColor) {
      state.infoColor = newColor
    },
    changeSuccessColor(state, newColor) {
      state.successColor = newColor
    },
    changeWarningColor(state, newColor) {
      state.warningColor = newColor
    },
    changeErrorColor(state, newColor) {
      state.errorColor = newColor
    },
    changeChangedColor(state, newColor) {
      state.changedColor = newColor
    },
    changeLinkColor(state, newColor) {
      state.linkColor = newColor
    },
    changeLinkHoverColor(state, newColor) {
      state.linkHoverColor = newColor
    },
    changeLinkActiveColor(state, newColor) {
      state.linkActiveColor = newColor
    },
    changeSelectedColor(state, newColor) {
      state.selectedColor = newColor
    },
    changeNoSelectColor(state, newColor) {
      state.noSelectColor = newColor
    },
    changeTooltipColor(state, newColor) {
      state.tooltipColor = newColor
    },
    changeSubsidiaryColor(state, newColor) {
      state.subsidiaryColor = newColor
    },
    changeArrowColor(state, newColor) {
      state.arrowColor = newColor
    },
    changeRateStarColor(state, newColor) {
      state.rateStarColor = newColor
    },
    changeIconColor(state, newColor) {
      state.iconColor = newColor
    },
  }
}
export default moduleColor;