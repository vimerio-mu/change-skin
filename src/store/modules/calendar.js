const moduleCalendar = {
  state: () => ({
    // 使用小驼峰，单引号
    calendarMonthContentColor: '#999999',
    calendarMonthContentBorderColor: 'transform',
    calendarMonthContentItemColor: '#333333',
    calendarMonthContentBackground: '#F0F3F8',
    calendarMonthContentItemBoder: '#dddddd',
    calendarMonthRestDayColor: '#bbbbbb',
    calendarMonthDayActiveColor: '#fff',
    calendarMonthDaySelectedBackground: '#037df3',
    calendarMonthDayBorder: '#e9eaec',
    calendarMonthDivBoxShadow: '#d3ddeb',
    calendarHandleItemHoverBackground: '#111',
    calendarHandleItemHoverColor: '#fff',
    calendarMonthContentItemBg: 'none',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeCalendarMonthContentColor(state, newColor) {
      state.calendarMonthContentColor = newColor
    },
    changeCalendarMonthContentBorderColor(state, newColor) {
      state.calendarMonthContentBorderColor = newColor
    },
    changeCalendarMonthContentItemColor(state, newColor) {
      state.calendarMonthContentItemColor = newColor
    },
    changeCalendarMonthContentBackground(state, newColor) {
      state.calendarMonthContentBackground = newColor
    },
    changeCalendarMonthContentItemBoder(state, newColor) {
      state.calendarMonthContentItemBoder = newColor
    },
    changeCalendarMonthRestDayColor(state, newColor) {
      state.calendarMonthRestDayColor = newColor
    },
    changeCalendarMonthDaySelectedBackground(state, newColor) {
      state.calendarMonthDaySelectedBackground = newColor
    },
    changeCalendarMonthDayBorder(state, newColor) {
      state.calendarMonthDayBorder = newColor
    },
    changeCalendarMonthDivBoxShadow(state, newColor) {
      state.calendarMonthDivBoxShadow = newColor
    },
    changeCalendarHandleItemHoverBackground(state, newColor) {
      state.calendarHandleItemHoverBackground = newColor
    },
    changeCalendarHandleItemHoverColor(state, newColor) {
      state.calendarHandleItemHoverColor = newColor
    },
    changeCalendarMonthContentItemBg(state, newColor) {
      state.calendarMonthContentItemBg = newColor
    },
  }
}
export default moduleCalendar;