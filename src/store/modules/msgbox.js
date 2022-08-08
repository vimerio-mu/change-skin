const moduleMsgbox = {
  state: () => ({
    // 使用小驼峰，单引号
    msgboxHeaderBg: 'transparent',
    msgboxBodyColor: '#333',
    msgboxTitleColor: '#333',
    msgboxContentBackgroundColor: '#fff',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeMsgboxHeaderBg(state, newColor) {
      state.msgboxHeaderBg = newColor
    },
    changeMsgboxBodyColor(state, newColor) {
      state.msgboxBodyColor = newColor
    },
    changeMsgboxTitleColor(state, newColor) {
      state.msgboxTitleColor = newColor
    },
    changeMsgboxContentBackgroundColor(state, newColor) {
      state.msgboxContentBackgroundColor = newColor
    },
  }
}
export default moduleMsgbox;