const moduleIconRank = {
    state: {
        iconRankBgOne: '#037DF3',
        iconRankBgTwo: '#2D95F8',
        iconRankBgThree: '#63B0FA',
        iconRankBgNumber: '#EDF4FE',
    },
    mutations: {
        changeIconRankBgOne(state,newColor){
            state.iconRankBgOne = newColor
        },
        changeIconRankBgTwo(state,newColor){
            state.iconRankBgTwo = newColor
        },
        changeIconRankBgThree(state,newColor){
            state.iconRankBgThree = newColor
        },
        changeIconRankBgNumber(state,newColor){
            state.iconRankBgNumber = newColor
        },
    }
}

export default moduleIconRank;