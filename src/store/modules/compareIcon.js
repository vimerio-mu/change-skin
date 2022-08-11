const moduleCompareIcon = {
    state: {
        uCompareiconmodalBackground: 'white',
        uCompareiconmodalTitleColor: '#A1A1A1',
        uCompareiconmodalAddColor: '#333',
        uCompareiconmodalDelColor: '#333',
        uCompareiconmodalBorder: '1px solid #f5f5f5',
        uCompareiconmodalBoxShadow: '0 2px 8px 0 rgba(0,0,0,0.20)',
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
        changeUCompareiconmodalBorder(state,newColor){
            // state.uCompareiconmodalBorder = newColor
        },
        changeUCompareiconmodalBoxShadow(state,newColor){
            // state.uCompareiconmodalBoxShadow = newColor
        },
    }
}

export default moduleCompareIcon