const moduleSelectTable = {
  state: () => ({
    // 使用小驼峰，单引号
    selectTableSelectionBackgroundColor: '#fff',
    selectTableMultipleHTagBackground: '#f5f5f5',
    selectTableMultipleHTagBorder: '#f7f7f7',
    selectTreeSelectionBackgroundColor: '#fff',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeSelectTableSelectionBackgroundColor(state, newColor) {
      state.selectTableSelectionBackgroundColor = newColor
    },
    changeSelectTableMultipleHTagBackground(state, newColor) {
      state.selectTableMultipleHTagBackground = newColor
    },
    changeSelectTableMultipleHTagBorder(state, newColor) {
      state.selectTableMultipleHTagBorder = newColor
    },
    changeSelectTreeSelectionBackgroundColor(state, newColor) {
      state.selectTreeSelectionBackgroundColor = newColor
    },
  }
}
export default moduleSelectTable;