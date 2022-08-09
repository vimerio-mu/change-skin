const moduleSwitch = {
    state: {
        switchBorderColor: '#c3cbd6',
        switchBackgroundColor: '#c3cbd6',
        switchDisabledBackgroundColor: '#d7dde4',
        switchDisabledBorderColor: '#d7dde4',
    },
    mutations: {
        changeSwitchBorderColor(state,newColor){
            state.switchBorderColor = newColor
        },
        changeSwitchBackgroundColor(state,newColor){
            state.switchBackgroundColor = newColor
        },
        changeSwitchDisabledBackgroundColor(state,newColor){
            state.switchDisabledBackgroundColor = newColor
        },
        changeSwitchDisabledBorderColor(state,newColor){
            state.switchDisabledBorderColor = newColor
        },
    }
}

export default moduleSwitch;