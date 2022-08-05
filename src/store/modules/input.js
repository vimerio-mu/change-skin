
const moduleAlert = {
  state: () => ({
    // 使用小驼峰，单引号
    inputColor: '#333',
    inputBg: '#fff',
    inputPlaceholderColor: '#999',
    inputReadonlyColor: '#333',
    inputBorderColor: '#d9d9d9',
    inputHoverBorderColor: '#3597f5',
    inputFocusBorderColor: '#0270da',
    inputDisabledBg: '#EDEDED',
    inputReadonlyBg: '#EDEDED',
    inputHint: '#909399',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeInputColor(state, newColor) {
      state.inputColor = newColor
    },
    changeInputBg(state, newColor) {
      state.inputBg = newColor
    },
    changeInputPlaceholderColor(state, newColor) {
      state.inputPlaceholderColor = newColor
    },
    changeInputReadonlyColor(state, newColor) {
      state.inputReadonlyColor = newColor
    },
    changeInputBorderColor(state, newColor) {
      state.inputBorderColor = newColor
    },
    changeInputHoverBorderColor(state, newColor) {
      state.inputHoverBorderColor = newColor
    },
    changeInputFocusBorderColor(state, newColor) {
      state.inputFocusBorderColor = newColor
    },
    changeInputDisabledBg(state, newColor) {
      state.inputDisabledBg = newColor
    },
    changeInputReadonlyBg(state, newColor) {
      state.inputReadonlyBg = newColor
    },
    changeInputHint(state, newColor) {
      state.inputHint = newColor
    },
  }
}
export default moduleAlert;