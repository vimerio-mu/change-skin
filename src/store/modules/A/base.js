const moduleBase = {
  state: () => ({
    // 使用小驼峰，单引号
    bodyBackground: '#fff',
    titleColor: '#333',
    textColor: '#333',
    descColor: '#666',
    textColorSupport: '#999',
    titleBgcolor: '#fff',
    contentBgcolor: '#fff',
    disabledColor: '#B3B3B3',
    disabledBgcolor: '#EDEDED',
    themeBaseColor: '#037df3',
    themeBaseHoverColor: '#E5F2FD',
    themeBaseActiveColor: '#037df3',
    primaryColor: '#037df3',
    primaryHoverColor: '#3597f5',
    primaryActiveColor: '#0270da',
    primaryBgcolor: '#E5F2FD',
    primaryActiveBgcolor: '#CDE5FD',
    primary2Color: '#037df3',
    primary2HoverColor: '#3597f5',
    primary2ActiveColor: '#0270da',
    infoColor: '#029afd',
    infoHoverColor: '#34aefd',
    infoActiveColor: '#018ae3',
    infoBgcolor: '#E5F4FE',
    successColor: '#1cb77b',
    successHoverColor: '#20ccba',
    successActiveColor: '#19a36e',
    successBgcolor: '#e8f7f1',
    warningColor: '#f2b044',
    warningHoverColor: '#ffba48',
    warningActiveColor: '#d99e3d',
    warningBgcolor: '#fDf7ec',
    errorColor: '#f14c5d',
    errorHoverColor: '#f36f7d',
    errorActiveColor: '#d84453',
    errorBgcolor: '#FDEDEE',
    errorBgcolor2: '#FEF6F7',
    errorActiveBgcolor: '#FCDBDF',
    changedColor: '#d9534f',
    linkColor: '#037df3',
    textLinkColor: '#029afd',
    linkHoverColor: '#3597f5',
    linkActiveColor: '#0270da',
    textLinkHoverColor: '#34aefd',
    textLinkActiveColor: '#018ae3',
    selectedColor: '#3597f5',
    whiteFontColor: '#fff',
    noSelectColor: '#e5ebf1',
    menuHoverBgColor: '#e5f2fd',
    iconColor: '#666',
    iconColorSupport: '#999',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeBodyBackground(state, newColor) {
      state.bodyBackground = newColor
    },
    changeTitleColor(state, newColor) {
      state.titleColor = newColor
    },
    changeTextColor(state, newColor) {
      state.textColor = newColor
    },
    changeTextColorSupport(state, newColor) {
      state.textColorSupport = newColor
    },
    changeTitleBgcolor(state, newColor) {
      state.titleBgcolor = newColor
    },
    changeContentBgcolor(state, newColor) {
      state.contentBgcolor = newColor
    },
    changeDisabledColor(state, newColor) {
      state.disabledColor = newColor
    },
    changeDisabledBgcolor(state, newColor) {
      state.disabledBgcolor = newColor
    },
    changeThemeBaseColor(state, newColor) {
      state.themeBaseColor = newColor
    },
    changeThemeBaseHoverColor(state, newColor) {
      state.themeBaseHoverColor = newColor
    },
    changeThemeBaseActiveColor(state, newColor) {
      state.themeBaseActiveColor = newColor
    },
    changePrimaryColor(state, newColor) {
      state.primaryColor = newColor
    },
    changePrimaryHoverColor(state, newColor) {
      state.primaryHoverColor = newColor
    },
    changePrimaryActiveColor(state, newColor) {
      state.primaryActiveColor = newColor
    },
    changePrimary2Color(state, newColor) {
      state.primaryColor = newColor
    },
    changePrimary2HoverColor(state, newColor) {
      state.primaryHoverColor = newColor
    },
    changePrimary2ActiveColor(state, newColor) {
      state.primaryActiveColor = newColor
    },
    changeInfoColor(state, newColor) {
      state.infoColor = newColor
    },
    changeInfoHoverColor(state, newColor) {
      state.infoHoverColor = newColor
    },
    changeInfoActiveColor(state, newColor) {
      state.infoActiveColor = newColor
    },
    changeInfoBgColor(state, newColor) {
      state.infoBgColor = newColor
    },
    changeSuccessColor(state, newColor) {
      state.successColor = newColor
    },
    changeSuccessHoverColor(state, newColor) {
      state.successHoverColor = newColor
    },
    changeSuccessActiveColor(state, newColor) {
      state.successActiveColor = newColor
    },
    changeSuccessBgColor(state, newColor) {
      state.successBgColor = newColor
    },
    changeWarningColor(state, newColor) {
      state.warningColor = newColor
    },
    changeWarningHoverColor(state, newColor) {
      state.warningHoverColor = newColor
    },
    changeWarningActiveColor(state, newColor) {
      state.warningActiveColor = newColor
    },
    changeWarningBgColor(state, newColor) {
      state.warningBgColor = newColor
    },
    changeErrorColor(state, newColor) {
      state.errorColor = newColor
    },
    changeErrorHoverColor(state, newColor) {
      state.errorHoverColor = newColor
    },
    changeErrorActiveColor(state, newColor) {
      state.errorActiveColor = newColor
    },
    changeErrorBgColor(state, newColor) {
      state.errorBgColor = newColor
    },
    changeErrorBgColor2(state, newColor) {
      state.errorBgColor2 = newColor
    },
    changeErrorActiveBgColor(state, newColor) {
      state.errorActiveBgColor = newColor
    },
    changeChangedColor(state, newColor) {
      state.changedColor = newColor
    },
    changeLinkColor(state, newColor) {
      state.linkColor = newColor
    },
    changeTextLinkColor(state, newColor) {
      state.textLinkColor = newColor
    },
    changeLinkHoverColor(state, newColor) {
      state.linkHoverColor = newColor
    },
    changeLinkActiveColor(state, newColor) {
      state.linkActiveColor = newColor
    },
    changeTextLinkHoverColor(state, newColor) {
      state.textLinkHoverColor = newColor
    },
    changeTextLinkActiveColor(state, newColor) {
      state.textLinkActiveColor = newColor
    },
    changeSelectedColor(state, newColor) {
      state.selectedColor = newColor
    },
    changWhiteFontColor(state, newColor) {
      state.whiteFontColor = newColor
    },
    changeNoSelectColor(state, newColor) {
      state.noSelectColor = newColor
    },
    changeMenuHoverBgColor(state, newColor) {
      state.menuHoverBgColor = newColor
    },
    // changeTooltipColor(state, newColor) {
    //   state.tooltipColor = newColor
    // },
    // changeSubsidiaryColor(state, newColor) {
    //   state.subsidiaryColor = newColor
    // },
    // changeArrowColor(state, newColor) {
    //   state.arrowColor = newColor
    // },
    // changeRateStarColor(state, newColor) {
    //   state.rateStarColor = newColor
    // },
    changeIconColor(state, newColor) {
      state.iconColor = newColor
    },
    changeIconColorSupport(state, newColor) {
      state.iconColorSupport = newColor
    },
  }
}
export default moduleBase;