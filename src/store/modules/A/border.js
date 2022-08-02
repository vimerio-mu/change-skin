const moduleBorder = {
  state: () => ({
    borderColorBase: '#d9d9d9',
    borderColorDisabled: '#d9d9d9',
    borderColorSplit: '#dddddd',
    borderColorBottom: '#ececec',
    borderColorBottom2: '#D7DDE4',
    borderColorDivide: '#D9D9D9',
    borderColorTable: '#e6e6e6',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeBorderColorBase(state, newColor) {
      state.borderColorBase = newColor
    },
    changeBorderColorDisabled(state, newColor) {
      state.borderColorDisabled = newColor
    },
    changeBorderColorSplit(state, newColor) {
      state.borderColorSplit = newColor
    },
    changeBorderColorBottom(state, newColor) {
      state.borderColorBottom = newColor
    },
    changeBorderColorBottom2(state, newColor) {
      state.borderColorBottom2 = newColor
    },
    changeBorderColorDivide(state, newColor) {
      state.borderColorDivide = newColor
    },
    changeBorderColorTable(state, newColor) {
      state.borderColorTable = newColor
    },
  }
}
export default moduleBorder