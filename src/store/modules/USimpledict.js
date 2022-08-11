const moduleUSimpledict = {
    state: {
        uMoredatapanelBackground: '#f5f5f5',
        uMoredatapanelColor: '#000',
        uMoredatapaneldetailBackground: 'white',
        uMoredatapaneldetailitemBackground: '#f5f5f5',
        uMoredatapaneldetailitemColor: '#000',
        uMoredatapaneldetailitemBorder: 'none',
    },
    mutations: {
        changeUMoredatapanelBackground(state,newColor){
            state.uMoredatapanelBackground = newColor
        },
        changeUMoredatapanelColor(state,newColor){
            state.uMoredatapanelColor = newColor
        },
        changeUMoredatapaneldetailBackground(state,newColor){
            state.uMoredatapaneldetailBackground = newColor
        },
        changeUMoredatapaneldetailitemBackground(state,newColor){
            state.uMoredatapaneldetailitemBackground = newColor
        },
        changeUMoredatapaneldetailitemColor(state,newColor){
            state.uMoredatapaneldetailitemColor = newColor
        },
        changeUMoredatapaneldetailitemBorder(state,newColor){
            // state.uMoredatapaneldetailitemBorder = newColor
        }
    }
}

export default moduleUSimpledict