const moduleBackground = {
  state: () => ({
    backgroundColorBase: '#fff',
    backgroundColorNormal: '#f2f2f2',
    backgroundColorSupport: '#f7f7f7',
    backgroundColorSelectHover: '#e6f2fd',
    backgroundColorWorkaround: '#DDE8F5',
    selectedBg: '#cde5fd',
    selectedLightBg: '#F3F9FF',
    bannerLightBg: '#F6FAFF',
    panelBg: '#fff',
    backgroundTagBg: '#fff',
    tableTheadBg: '#f2f2f2',
    tableTbodyBg: '#fff',
    tableTdStripeBg: '#f7f7f7',
    tableTdHoverBg: '#e5f2fd',
    tableTdHighlightBg: '#cde5fd',
    tableTdSelectedBg: '#cde5fd',
    tableTdGroupLineBg: '#f7f7f7',
    backgroundColorIcon: '#E0EFFD',
    backgroundColorMainIndexForm: '#fff',
    backgroundColorBannerBg: '#fff',
    backgroundColorBannerHoverBg: '#4BA0F3',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeBackgroundColorBase(state, newColor) {
      state.backgroundColorBase = newColor
    },
    changeBackgroundColorNormal(state, newColor) {
      state.backgroundColorNormal = newColor
    },
    changeBackgroundColorSupport(state, newColor) {
      state.backgroundColorSupport = newColor
    },
    changeBackgroundColorSelectHover(state, newColor) {
      state.backgroundColorSelectHover = newColor
    },
    changeBackgroundColorWorkaround(state, newColor) {
      state.backgroundColorWorkaround = newColor
    },
    changeSelectedBg(state, newColor) {
      state.selectedBg = newColor
    },
    changeSelectedLightBg(state, newColor) {
      state.selectedLightBg = newColor
    },
    changeBannerLightBg(state, newColor) {
      state.bannerLightBg = newColor
    },
    changePanelBg(state, newColor) {
      state.panelBg = newColor
    },
    changeBackgroundTagBg(state, newColor) {
      state.backgroundTagBg = newColor
    },
    changeTableTheadBg(state, newColor) {
      state.tableTheadBg = newColor
    },
    changeTableTbodyBg(state, newColor) {
      state.tableTbodyBg = newColor
    },
    changeTableTdStripeBg(state, newColor) {
      state.tableTdStripeBg = newColor
    },
    changeTableTdHoverBg(state, newColor) {
      state.tableTdHoverBg = newColor
    },
    changeTableTdHighlightBg(state, newColor) {
      state.tableTdHighlightBg = newColor
    },
    changeTableTdSelectedBg(state, newColor) {
      state.tableTdSelectedBg = newColor
    },
    changeTableTdGroupLineBg(state, newColor) {
      state.tableTdGroupLineBg = newColor
    },
    changeBackgroundColorIcon(state, newColor) {
      state.backgroundColorIcon = newColor
    },
    changeBackgroundColorMainIndexForm(state, newColor) {
      state.backgroundColorMainIndexForm = newColor
    },
    changeBackgroundColorBannerBg(state, newColor) {
      state.backgroundColorBannerBg = newColor
    },
    changeBackgroundColorBannerHoverBg(state, newColor) {
      state.backgroundColorBannerHoverBg = newColor
    },
  }
}
export default moduleBackground;