const modulePoptip = {
  state: () => ({
    // 使用小驼峰，单引号
    poptipArrowColor: '#dddddd',
    poptipInnerBackgroundColor: '#fff',
    poptipPopperAfterBorderTopColor: '#fff',
    poptipPopperAfterBorderRightColor: '#fff',
    poptipPopperAfterBorderBottomColor: '#fff',
    poptipPopperAfterBorderLeftColor: '#fff',
  }),
  mutations: {
    // 统一命名为changeXXX
    changePoptipArrowColor(state, newColor) {
      state.poptipArrowColor = newColor
    },
    changePoptipInnerBackgroundColor(state, newColor) {
      state.poptipInnerBackgroundColor = newColor
    },
    changePoptipPopperAfterBorderTopColor(state, newColor) {
      state.poptipPopperAfterBorderTopColor = newColor
    },
    changePoptipPopperAfterBorderRightColor(state, newColor) {
      state.poptipPopperAfterBorderRightColor = newColor
    },
    changePoptipPopperAfterBorderBottomColor(state, newColor) {
      state.poptipPopperAfterBorderBottomColor = newColor
    },
    changePoptipPopperAfterBorderLeftColor(state, newColor) {
      state.poptipPopperAfterBorderLeftColor = newColor
    },
  }
}
export default modulePoptip;