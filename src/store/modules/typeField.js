const moduleTypeField = {
    state: {
        typefieldTipBackground: '#fff',
        typefieldTipColor: '#0270da',
        typefieldInputBackgroundColor: '#fff',
        typefieldInputFocusBorderColor: '#0270da',
    },
    mutations: {
        changeTypefieldTipBackground(state,newColor){
            state.typefieldTipBackground = newColor
        },
        changeTypefieldTipColor(state,newColor){
            state.typefieldTipColor = newColor
        },
        changeTypefieldInputBackgroundColor(state,newColor){
            state.typefieldInputBackgroundColor = newColor
        },
        changeTypefieldInputFocusBorderColor(state,newColor){
            state.typefieldInputFocusBorderColor = newColor
        },
    }
}
export default moduleTypeField