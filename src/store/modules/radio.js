const moduleRadio = {
  state: () => ({
    // 使用小驼峰，单引号
    radioInnerAfterColor: '#999',
    radioInnerColor: '#F2F2F2',
    radioDisabledInnerBorderColor: '#d9d9d9',
    radioInnerBackgroundColor: '#fff',
    radioGroupButtonWrapperCheckedColor: '#fff',
    radioGroupButtonWrapperDisabledColor: '#ccc',
    radioGroupButtonWrapperDisabledHoverColor: '#ccc',
    radioGroupButtonWrapperDisabledWrapperCheckedColor: '#fff',
    radioGroupButtonWrapperDisabledWrapperCheckedBackgroundColor: '#e6e6e6',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeRadioInnerAfterColor(state, newColor) {
      state.radioInnerAfterColor = newColor
    },
    changeRadioInnerColor(state, newColor) {
      state.radioInnerColor = newColor
    },
    changeRadioDisabledInnerBorderColor(state, newColor) {
      state.radioDisabledInnerBorderColor = newColor
    },
    changeRadioInnerBackgroundColor(state, newColor) {
      state.radioInnerBackgroundColor = newColor
    },
    changeRadioGroupButtonWrapperCheckedColor(state, newColor) {
      state.radioGroupButtonWrapperCheckedColor = newColor
    },
    changeRadioGroupButtonWrapperDisabledColor(state, newColor) {
      state.radioGroupButtonWrapperDisabledColor = newColor
    },
    changeRadioGroupButtonWrapperDisabledHoverColor(state, newColor) {
      state.radioGroupButtonWrapperDisabledHoverColor = newColor
    },
    changeRadioGroupButtonWrapperDisabledWrapperCheckedColor(state, newColor) {
      state.radioGroupButtonWrapperDisabledWrapperCheckedColor = newColor
    },
    changeRadioGroupButtonWrapperDisabledWrapperCheckedBackgroundColor(state, newColor) {
      state.radioGroupButtonWrapperDisabledWrapperCheckedBackgroundColor = newColor
    },
  }
}
export default moduleRadio;