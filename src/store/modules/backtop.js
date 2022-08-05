const moduleBacktop = {
  state: () => ({
    // 使用小驼峰，单引号
    backtopInnerBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    backtopInnerBoxShadow: 'rgba(0,0,0,0.30)',
    backtopInnerColor: '#fff',
    backtopInnerHoverBackgroundColor: '#3597f5',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeBacktopInnerBackgroundColor(state, newColor) {
      state.backtopInnerBackgroundColor = newColor
    },
    changeBacktopInnerBoxShadow(state, newColor) {
      state.backtopInnerBoxShadow = newColor
    },
    changeBacktopInnerColor(state, newColor) {
      state.backtopInnerColor = newColor
    },
    changeBacktopInnerHoverBackgroundColor(state, newColor) {
      state.backtopInnerHoverBackgroundColor = newColor
    },
  }
}
export default moduleBacktop;