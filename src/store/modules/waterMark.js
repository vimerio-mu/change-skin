const moduleWaterMark = {
    state: {
        waterMarkTextColor: 'rgba(0,0,0,0.1)',
    },
    mutations: {
        changeWaterMarkTextColor(state,newColor){
            state.waterMarkTextColor = newColor
        }
    }
}
export default moduleWaterMark