const moduleCompareIcon = {
    state: {
        uCompareiconmodalBackground: 'white',
        uCompareiconmodalTitleColor: '#A1A1A1',
        uCompareiconmodalAddColor: '#333',
        uCompareiconmodalDelColor: '#333',
    },
    mutations: {
        changeUCompareiconmodalBackground(state,newColor){
            state.uCompareiconmodalBackground = newColor
        },
        changeUCompareiconmodalTitleColor(state,newColor){
            state.uCompareiconmodalTitleColor = newColor
        },
        changeUCompareiconmodalAddColor(state,newColor){
            state.uCompareiconmodalAddColor = newColor
        },
        changeUCompareiconmodalDelColor(state,newColor){
            state.uCompareiconmodalDelColor = newColor
        },
    }
}

export default moduleCompareIcon