// import moduleBorder from './A/border'

const moduleEditgrid = {
  state: () => ({
    // 使用小驼峰，单引号
    editgridTitleExpandColor: '#495060',
    editgridBackgroundColor: '#fff',
    // editgridBorderRight: moduleBorder.state.borderColorBase,
    // editgridThTdBorderBottom: moduleBorder.state.borderColorBase,
  }),
  mutations: {
    // 统一命名为changeXXX
    changEditgridTitleExpandColor(state, newColor) {
      state.editgridTitleExpandColor = newColor
    },
    changeEditgridBackgroundColor(state, newColor) {
      state.editgridBackgroundColor = newColor
    },
    // changeEditgridBorderRight(state, newColor) {
    //   state.editgridBorderRight = newColor
    // },
    // changeEditgridThTdBorderBottom(state, newColor) {
    //   state.editgridThTdBorderBottom = newColor
    // },
  }
}
export default moduleEditgrid;