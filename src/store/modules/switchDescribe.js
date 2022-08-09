const moduleSwitchDescribe = {
    state: {
        uSwitchDescribeBackground: 'white',
        uSwitchDescribeColor: '#000',
    },
    mutations: {
        uSwitchDescribeBackground(state,newColor){
            state.uSwitchDescribeBackground = newColor
        },
        uSwitchDescribeColor(state,newColor){
            state.uSwitchDescribeColor = newColor
        },
    }
}

export default moduleSwitchDescribe;