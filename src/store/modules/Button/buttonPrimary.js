const moduleButtonPrimary = {
    state: {
        btnPrimaryColor: '#fff',
        btnPrimaryBg: '#037df3',
        btnPrimaryBorder: '#037df3',
        btnPrimaryHoverColor: '#fff',
        btnPrimaryHoverBgcolor: '#3597f5',
        btnPrimaryHoverBorderColor: '#3597f5',
        btnPrimaryPressColor: '#fff',
        btnPrimaryPressBgcolor: '#0270da',
        btnPrimaryPressBorderColor: '#0270da',
    },
    mutations: {
        changeBtnPrimaryColor(state, newColor){
            state.btnPrimaryColor = newColor
        },
        changeBtnPrimaryBg(state, newColor){
            state.btnPrimaryBg = newColor
        },
        changeBtnPrimaryBorder(state, newColor){
            state.btnPrimaryBorder = newColor
        },
        changeBtnPrimaryHoverColor(state, newColor){
            state.btnPrimaryHoverColor = newColor
        },
        changeBtnPrimaryHoverBgcolor(state, newColor){
            state.btnPrimaryHoverBgcolor = newColor
        },
        changeBtnPrimaryHoverBorderColor(state, newColor){
            state.btnPrimaryHoverBorderColor = newColor
        },
        changeBtnPrimaryPressColor(state, newColor){
            state.btnPrimaryPressColor = newColor
        },
        changeBtnPrimaryPressBgcolor(state, newColor){
            state.btnPrimaryPressBgcolor = newColor
        },
        changeBtnPrimaryPressBorderColor(state, newColor){
            state.btnPrimaryPressBorderColor = newColor
        },
    }
}
export default moduleButtonPrimary;