const moduleAlert = {
  state: () => ({
    // 使用小驼峰，单引号
    badgeCountBackground: '#f14c5d',
    badgeCountBoxShadow: '#fff',
  }),
  mutations: {
    // 统一命名为changeXXX
    changeBadgeCountBackground(state, newColor) {
      state.badgeCountBackground = newColor
    },
    changeBadgeCountBoxShadow(state, newColor) {
      state.badgeCountBoxShadow = newColor
    },
  }
}
export default moduleAlert;