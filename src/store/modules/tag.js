const moduleTag = {
    state: {
        selectTagBackground: '#f1f1f1',
        tagBackground: '#F7F7F7',
        tagColor: '#333',
        tagDotBackground: '#fff',
        tagBorderBackground: '#fff',
    },
    mutations: {
        changeSelectTagBackground(state,newColor){
            state.selectTagBackground = newColor
        },
        changeTagBackground(state,newColor){
            state.tagBackground = newColor
        },
        changeTagColor(state,newColor){
            state.tagColor = newColor
        },
        changeTagDotBackground(state,newColor){
            state.tagDotBackground = newColor
        },
        changeTagBorderBackground(state,newColor){
            state.tagBorderBackground = newColor
        },
    }
}
export default moduleTag