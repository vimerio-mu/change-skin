const moduledatePicker = {
  state: () => ({
    // 使用小驼峰，单引号
    datePickerBoderColor: '#f7f7f7',
    datePickerCellHoverBg: '#f3f9ff',
    datePickerPanelShortcutHoverBg: '#F3F9FF',
    datePickerSidebarBg: '#ffffff',
    datePickerSidebarBoderColor: '#dddddd',
    datePickerConfirmBorderTop: '#dce1e7',
    datePickerConfirmTimeDisabledColor: '#037df3',
    datePickerConfirmArrowBtnColor: '#666',
    datePickerConfirmArrowBtnHoverColor: '#3597f5',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeDatePickerBoderColor(state, newColor) {
      state.datePickerBoderColor = newColor
    },
    changeDatePickerCellHoverBg(state, newColor) {
      state.DatePickerCellHoverBg = newColor
    },
    changeDatePickerPanelShortcutHoverBg(state, newColor) {
      state.datePickerPanelShortcutHoverBg = newColor
    },
    changeDatePickerSidebarBg(state, newColor) {
      state.datePickerSidebarBg = newColor
    },
    changeDatePickerSidebarBoderColor(state, newColor) {
      state.datePickerSidebarBoderColor = newColor
    },
    changeDatePickerConfirmBorderTop(state, newColor) {
      state.datePickerConfirmBorderTop = newColor
    },
    changeDatePickerConfirmTimeDisabledColor(state, newColor) {
      state.datePickerConfirmTimeDisabledColor = newColor
    },
    changeDatePickerConfirmArrowBtnColor(state, newColor) {
      state.datePickerConfirmArrowBtnColor = newColor
    },
    changeDatePickerConfirmArrowBtnHoverColor(state, newColor) {
      state.datePickerConfirmArrowBtnHoverColor = newColor
    },
  }
}
export default moduledatePicker;