const moduleSwitchDescribe = {
    state: {
        uSwitchDescribeBackground: 'white',
        uSwitchDescribeColor: '#000',
    },
    mutations: {
        changeUSwitchDescribeBackground(state,newColor){
            state.uSwitchDescribeBackground = newColor
        },
        changeUSwitchDescribeColor(state,newColor){
            state.uSwitchDescribeColor = newColor
        },
    }
}

export default moduleSwitchDescribe;