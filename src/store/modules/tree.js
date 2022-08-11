const moduleTree = {
    state: {
        treeTitleFocusColor: '#333',
        treeTitleFocusBgcolor: '#D9EBFD',
        treeSelectedColor: '#037df3',
        treeSelectedBgcolor: '#F5F5F5',
        treeTitleHoverBgcolor: '#E5F2FD',
        treeTitleHoverColor: '#333',
        treeItemIconFabumianBg: '#1cb77b',
    },
    mutations: {
        changeTreeTitleFocusColor(state,newColor){
            state.treeTitleFocusColor = newColor
        },
        changeTreeTitleFocusBgcolor(state,newColor){
            state.treeTitleFocusBgcolor = newColor
        },
        changeTreeSelectedColor(state,newColor){
            state.treeSelectedColor = newColor
        },
        changeTreeSelectedBgcolor(state,newColor){
            state.treeSelectedBgcolor = newColor
        },
        changeTreeTitleHoverBgcolor(state,newColor){
            state.treeTitleHoverBgcolor = newColor
        },
        changeTreeTitleHoverColor(state,newColor){
            state.treeTitleHoverColor = newColor
        },
        changeTreeItemIconFabumianBg(state,newColor){
            state.treeItemIconFabumianBg = newColor
        },
    }
}
export default moduleTree