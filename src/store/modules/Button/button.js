const moduleButton = {
    state:{
		btnGroupBorder: '#298DFF',
		btnBaseColor: '#fff',
		btnDisableColor: '#b3b3b3',
		btnDisableBg: '#ededed',
		btnDisableBorder: '#d9d9d9',
		btnBeforeBackground: '#fff',
		btnCommonBgcolor: '#f2f2f2',
    },
    mutations: {
        changeBtnGroupBorder(state,newColor){
            state.btnGroupBorder = newColor
        },
        changeBtnBaseColor(state,newColor){
            state.btnBaseColor = newColor
        },
        changeBtnDisableColor(state,newColor){
            state.btnDisableColor = newColor
        },
        changeBtnDisableBg(state,newColor){
            state.btnDisableBg = newColor
        },
        changeBtnDisableBorder(state,newColor){
            state.btnDisableBorder = newColor
        },
        changeBtnBeforeBackground(state,newColor){
            state.btnBeforeBackground = newColor
        },
        changeBtnCommonBgcolor(state,newColor){
            state.btnCommonBgcolor = newColor
        },
    }
}

export default moduleButton;