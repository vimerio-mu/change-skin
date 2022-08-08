const modulePage = {
  state: () => ({
    // 使用小驼峰，单引号
    pageJumpNextColor: '#DCE1E7',
    pageNextAColor: '#ccc',
    pageDisabledColor: '#B3B3B3',
    pageDisabledBgcolor: '#EDEDED',
    pageDisabledBorderColor: '#d9d9d9',
    pageDisabledHoverBorderColor: '#d9d9d9',
    pageItemBackgroundColor: '#fff',
    pageItemActiveHoverAColor: '#fff',
    pageJumpNextAfterColor: '#ccc',
    pageOptionsReloadAColor: '#495060',
    pageOptionsReloadABorder: '1px solid #D7DDE4',
    pageMiniBackgroundColor: '#fff',
    pageMiniItemActiveBorder: 'none',
    pageItemActiveBg: '#037df3',
    pageSimpleDisabledBackground: '#EDEDED',
  }),
  mutations: {
    // 统一命名为changeXXX
    changePageJumpNextColor(state, newColor) {
      state.pageJumpNextColor = newColor
    },
    changePageNextAColor(state, newColor) {
      state.pageNextAColor = newColor
    },
    changePageDisabledColor(state, newColor) {
      state.pageDisabledColor = newColor
    },
    changePageDisabledBgcolor(state, newColor) {
      state.pageDisabledBgcolor = newColor
    },
    changePageDisabledBorderColor(state, newColor) {
      state.pageDisabledBorderColor = newColor
    },
    changePageDisabledHoverBorderColor(state, newColor) {
      state.pageDisabledHoverBorderColor = newColor
    },
    changePageItemBackgroundColor(state, newColor) {
      state.pageItemBackgroundColor = newColor
    },
    changePageItemActiveHoverAColor(state, newColor) {
      state.pageItemActiveHoverAColor = newColor
    },
    changePageJumpNextAfterColor(state, newColor) {
      state.pageJumpNextAfterColor = newColor
    },
    changePageOptionsReloadAColor(state, newColor) {
      state.pageOptionsReloadAColor = newColor
    },
    changePageOptionsReloadABorder(state, newColor) {
      state.pageOptionsReloadABorder = newColor
    },
    changePageMiniBackgroundColor(state, newColor) {
      state.pageMiniBackgroundColor = newColor
    },
    changePageMiniItemActiveBorder(state, newColor) {
      state.pageMiniItemActiveBorder = newColor
    },
    changePageItemActiveBg(state, newColor) {
      state.pageItemActiveBg = newColor
    },
    changePageSimpleDisabledBackground(state, newColor) {
      state.pageSimpleDisabledBackground = newColor
    },
  }
}
export default modulePage;