const moduleDefaultButton = {
    state: {
        btnDefaultColor: '#333',
        btnDefaultBg: '#037df3',
        btnDefaultBorder: '#037df3',
        btnDefaultHoverColor: '#fff',
        btnDefaultHoverBgcolor: '#3597f5',
        btnDefaultHoverBorderColor: '#3597f5',
        btnDefaultPressColor: '#FFF',
        btnDefaultPressBgcolor: '#0270da',
        btnDefaultPressBorderColor: '#0270da',
    },
    mutations: {
        changeBtnDefaultColor(state, newColor){
            state.btnDefaultColor = newColor
        },
        changeBtnDefaultBg(state, newColor){
            state.btnDefaultBg = newColor
        },
        changeBtnDefaultBorder(state, newColor){
            state.btnDefaultBorder = newColor
        },
        changeBtnDefaultHoverColor(state, newColor){
            state.btnDefaultHoverColor = newColor
        },
        changeBtnDefaultHoverBgcolor(state, newColor){
            state.btnDefaultHoverBgcolor = newColor
        },
        changeBtnDefaultHoverBorderColor(state, newColor){
            state.btnDefaultHoverBorderColor = newColor
        },
        changeBtnDefaultPressColor(state, newColor){
            state.btnDefaultPressColor = newColor
        },
        changeBtnDefaultPressBgcolor(state, newColor){
            state.btnDefaultPressBgcolor = newColor
        },
        changeBtnDefaultPressBorderColor(state, newColor){
            state.btnDefaultPressBorderColor = newColor
        },
    }
}
export default moduleDefaultButton;