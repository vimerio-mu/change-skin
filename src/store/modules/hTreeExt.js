const moduleHTreeExt = {
    state: {
        hTreeExtColor: '#333',
        hTreeExtBackgroundColor: '#fff',
        hTreeExtBoxBackgroundColor: '#fff',
        hTreeExtNodeTextColor: '#3597f5',
        hTreeExtCheckboxBackgroundColor: '#037df3',
        hTreeExtPopBackgroundColor: '#fff',
        hSelectExtTagBackgroundColor: '#f2f2f2',
        hSelectExtTagTextColor: '#000',
        hSelectExtBorderColorBase: '#999',
        hSelectExtBorderColorHover: '#037df3',
        hSelectExtBoxShadowColorHover: 'rgba(3,125,243, 0.2)',
    },
    mutations: {
        changeHTreeExtColor(state,newColor){
            state.hTreeExtColor = newColor
        },
        changeHTreeExtBackgroundColor(state,newColor){
            state.hTreeExtBackgroundColor = newColor
        },
        changeHTreeExtBoxBackgroundColor(state,newColor){
            state.hTreeExtBoxBackgroundColor = newColor
        },
        changeHTreeExtNodeTextColor(state,newColor){
            state.hTreeExtNodeTextColor = newColor
        },
        changeHTreeExtCheckboxBackgroundColor(state,newColor){
            state.hTreeExtCheckboxBackgroundColor = newColor
        },
        changeHTreeExtPopBackgroundColor(state,newColor){
            state.hTreeExtPopBackgroundColor = newColor
        },
        changeHSelectExtTagBackgroundColor(state,newColor){
            state.hSelectExtTagBackgroundColor = newColor
        },
        changeHSelectExtTagTextColor(state,newColor){
            state.hSelectExtTagTextColor = newColor
        },
        changeHSelectExtBorderColorBase(state,newColor){
            state.hSelectExtBorderColorBase = newColor
        },
        changeHSelectExtBorderColorHover(state,newColor){
            state.hSelectExtBorderColorHover = newColor
        },
        changeHSelectExtBoxShadowColorHover(state,newColor){
            state.hSelectExtBoxShadowColorHover = newColor
        },
    }
}

export default moduleHTreeExt