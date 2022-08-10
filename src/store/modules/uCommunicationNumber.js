const moduleUCommunicationNumber = {
    state: {
        uCommunicationNumberAreaselectboxBackgroundColor: 'white',
        uCommunicationNumberAreaselectboxColor: '#333',
        uCommunicationNumberAreacodedetailBackgroundColor: 'white',
        uCommunicationNumberAreacodedetailColor: '#333',
        uCommunicationNumberAreaCodeFocusBorderColor: '#5dacf7',
        uCommunicationNumberAreaCodeHoverBorderColor: '#5dacf7',
        uCommunicationNumberAreacodeerrorBorderColor: '#d9d9d9',
        uCommunicationNumberAreacodeiconColor: '#999',
        uCommunicationNumberHinputiconColor: '#999',
        uCommunicationNumberHinputreadonlyBackground: 'white',
        uCommunicationNumberHinputdisabledBackground: '#ededed',
    },
    mutations: {
        changeUCommunicationNumberAreacodedetailBackgroundColor(state,newColor){
            state.uCommunicationNumberAreacodedetailBackgroundColor = newColor
        },
        changeUCommunicationNumberAreacodedetailColor(state,newColor){
            state.uCommunicationNumberAreacodedetailColor = newColor
        },
        changeUCommunicationNumberAreaselectboxBackgroundColor(state,newColor){
            state.uCommunicationNumberAreaselectboxBackgroundColor = newColor
        },
        changeUCommunicationNumberAreaselectboxColor(state,newColor){
            state.uCommunicationNumberAreaselectboxColor = newColor
        },
        changeUCommunicationNumberAreaCodeFocusBorderColor(state,newColor){
            state.uCommunicationNumberAreaCodeFocusBorderColor = newColor
        },
        changeUCommunicationNumberAreaCodeHoverBorderColor(state,newColor){
            state.uCommunicationNumberAreaCodeHoverBorderColor = newColor
        },
        changeUCommunicationNumberAreacodeiconColor(state,newColor){
            state.uCommunicationNumberAreacodeiconColor = newColor
        },
        changeUCommunicationNumberHinputiconColor(state,newColor){
            state.uCommunicationNumberHinputiconColor = newColor
        },
        changeUCommunicationNumberAreacodeerrorBorderColor(state,newColor){
            state.uCommunicationNumberAreacodeerrorBorderColor = newColor
        },
        changeUCommunicationNumberHinputreadonlyBackground(state,newColor){
            state.uCommunicationNumberHinputreadonlyBackground = newColor
        },
        changeUCommunicationNumberHinputdisabledBackground(state,newColor){
            state.uCommunicationNumberHinputdisabledBackground = newColor
        },
    }
}

export default moduleUCommunicationNumber;