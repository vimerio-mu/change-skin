
const moduleInputNumber = {
  state: () => ({
    // 使用小驼峰，单引号
    inputnumberInputColor: '#333',
    inputnumberMixinDisabledColor: '#666',
    inputnumberHandlerWrapBackground: '#fff',
    inputnumberAppendBackground: '#eee',
    inputnumberHandlerColor: '#999',
    inputnumberHandlerDownInnerColor: '#999',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeInputnumberInputColor(state, newColor) {
      state.inputnumberInputColor = newColor
    },
    changeInputnumberMixinDisabledColor(state, newColor) {
      state.inputnumberMixinDisabledColor = newColor
    },
    changeInputnumberHandlerWrapBackground(state, newColor) {
      state.inputnumberHandlerWrapBackground = newColor
    },
    changeInputnumberAppendBackground(state, newColor) {
      state.inputnumberAppendBackground = newColor
    },
    changeInputnumberHandlerColor(state, newColor) {
      state.inputnumberHandlerColor = newColor
    },
    changeInputnumberHandlerDownInnerColor(state, newColor) {
      state.inputnumberHandlerDownInnerColor = newColor
    },
  }
}
export default moduleInputNumber;