const moduleShadow = {
  state: () => ({
    shadowBase: '0 2px 8px 0 rgba(0,0,0,0.30)',
    shadowUp: '0 -2px 0 rgba(0,0,0,0.07)',
    shadowDeep: '0 4px 12px 0 rgba(0,0,0,0.15)',
    shadowRow: '0 2px 15px 0 rgba(225,225,225,0.50)',
    shadowRightBottomFixed: '0 1px 10px 4px #c1d7ec',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeShadowBase(state, newColor) {
      state.shadowBase = newColor
    },
    changeShadowUp(state, newColor) {
      state.shadowUp = newColor
    },
    changeShadowDeep(state, newColor) {
      state.shadowDeep = newColor
    },
    changeShadowRow(state, newColor) {
      state.shadowRow = newColor
    },
    changeShadowRightBottomFixed(state, newColor) {
      state.shadowRightBottomFixed = newColor
    },
  }
}
export default moduleShadow