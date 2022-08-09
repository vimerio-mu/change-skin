const moduleIconHover = {
    state: {
        iconHoverZyboxColor: 'black',
        iconHoverZyboxBackground: 'white',
    },
    mutations: {
        changeIconHoverZyboxColor(state,newColor){
            state.iconHoverZyboxColor = newColor
        },
        changeIconHoverZyboxBackground(state,newColor){
            state.iconHoverZyboxBackground = newColor
        },
    }
}

export default moduleIconHover;