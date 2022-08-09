const moduleSelect = {
  state: () => ({
    // 使用小驼峰，单引号
    selectMultipleSelectedItemFocusBackground: '#fff',
    selectSelectionHoverColor: '#3597f5',
    selectSelectionActiveColor: '#0270da',
    selectBlockItemHeaderBackground: '#f7f7f7',
    selectBlockGroupItemColor: '#999',
    selectBlockSelectedBackground: '#fff',
    selectBlockHideMultAfterColor: '#fff',
    selectDropdownBackgroundColor: '#fff',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeSelectMultipleSelectedItemFocusBackground(state, newColor) {
      state.selectMultipleSelectedItemFocusBackground = newColor
    },
    changeSelectSelectionHoverColor(state, newColor) {
      state.selectSelectionHoverColor = newColor
    },
    changeSelectSelectionActiveColor(state, newColor) {
      state.selectSelectionActiveColor = newColor
    },
    changeSelectBlockItemHeaderBackground(state, newColor) {
      state.selectBlockItemHeaderBackground = newColor
    },
    changeSelectBlockGroupItemColor(state, newColor) {
      state.selectBlockGroupItemColor = newColor
    },
    changeSelectBlockSelectedBackground(state, newColor) {
      state.selectBlockSelectedBackground = newColor
    },
    changeSelectBlockHideMultAfterColor(state, newColor) {
      state.selectBlockHideMultAfterColor = newColor
    },
    changeSelectDropdownBackgroundColor(state, newColor) {
      state.selectDropdownBackgroundColor = newColor
    },
  }
}
export default moduleSelect;