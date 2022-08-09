const moduleSteps = {
  state: () => ({
    // 使用小驼峰，单引号
    stepsDefaultColor: '#037df3',
    stepContentColor: '#7E828A',
    stepActiveColor: '#8ECCFF',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeStepsDefaultColor(state, newColor) {
      state.stepsDefaultColor = newColor
    },
    changeStepContentColor(state, newColor) {
      state.stepContentColor = newColor
    },
    changeStepActiveColor(state, newColor) {
      state.stepActiveColor = newColor
    },
  }
}
export default moduleSteps;