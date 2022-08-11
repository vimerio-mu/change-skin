const moduleIconHover = {
    state: {
        iconHoverZyboxColor: 'black',
        iconHoverZyboxBackground: 'white',
        iconHoverZyboxBorder: '1px solid #d9d9d9',
        iconHoverZyboxBoxShadow: '0 2px 8px 0 rgba(0,0,0,0.30)',
    },
    mutations: {
        changeIconHoverZyboxColor(state,newColor){
            state.iconHoverZyboxColor = newColor
        },
        changeIconHoverZyboxBackground(state,newColor){
            state.iconHoverZyboxBackground = newColor
        },
        changeIconHoverZyboxBorder(state,newColor){
            // state.iconHoverZyboxBorder = newColor;
        },
        changeIconHoverZyboxBoxShadow(state,newColor){
            // state.iconHoverZyboxBoxShadow = newColor
        }
    }
}

export default moduleIconHover;