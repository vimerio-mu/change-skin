const moduleNotice = {
  state: () => ({
    // 使用小驼峰，单引号
    noticeNoticeBackground: '#fff',
    noticeDescColor: '#666',
    noticeNoticeCloseColor: '#666',
    noticeWithNormalColor: 'transparent',
    noticeWithInfoColor: 'transparent',
    noticeWithSuccessColor: 'transparent',
    noticeWithWarningColor: 'transparent',
    noticeWithErrorColor: 'transparent',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeNoticeNoticeBackground(state, newColor) {
      state.noticeNoticeBackground = newColor
    },
    changeNoticeDescColor(state, newColor) {
      state.noticeDescColor = newColor
    },
    changeNoticeNoticeCloseColor(state, newColor) {
      state.noticeNoticeCloseColor = newColor
    },
    changeNoticeWithNormalColor(state, newColor) {
      state.noticeWithNormalColor = newColor
    },
    changeNoticeWithInfoColor(state, newColor) {
      state.noticeWithInfoColor = newColor
    },
    changeNoticeWithSuccessColor(state, newColor) {
      state.noticeWithSuccessColor = newColor
    },
    changeNoticeWithWarningColor(state, newColor) {
      state.noticeWithWarningColor = newColor
    },
    changeNoticeWithErrorColor(state, newColor) {
      state.noticeWithErrorColor = newColor
    },
  }
}
export default moduleNotice;