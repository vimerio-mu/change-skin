const moduleTabs = {
    state: {
        tabsNavTabColor: '#333333',
        tabsTabHoverColor: '#029AFD',
        tabsTabActiveColor: '#037df3',
        tabsTabNavRightActiveColor: '#fff',
        tabsTabNavRightActiveBgcolor: '#E5F2FD',
        tabsBarActiveBackground: '#fff',
        tabsBarActiveBorderColor: '#d9d9d9',
        tabsBarActiveColor: '#037df3',
        tabsTabInkBarBg: '#037df3',
        tabsBarBorderBottom: '1px solid #D9D9D9',
    },
    mutations: {
        changeTabsNavTabColor(state,newColor){
            state.tabsNavTabColor = newColor
        },
        changeTabsTabHoverColor(state,newColor){
            state.tabsTabHoverColor = newColor
        },
        changeTabsTabActiveColor(state,newColor){
            state.tabsTabActiveColor = newColor
        },
        changeTabsTabNavRightActiveColor(state,newColor){
            state.tabsTabNavRightActiveColor = newColor
        },
        changeTabsTabNavRightActiveBgcolor(state,newColor){
            state.tabsTabNavRightActiveBgcolor = newColor
        },
        changeTabsBarActiveBackground(state,newColor){
            state.tabsBarActiveBackground = newColor
        },
        changeTabsBarActiveBorderColor(state,newColor){
            state.tabsBarActiveBorderColor = newColor
        },
        changeTabsBarActiveColor(state,newColor){
            state.tabsBarActiveColor = newColor
        },
        changeTabsTabInkBarBg(state,newColor){
            state.tabsTabInkBarBg = newColor
        },
        changeTabsBarBorderBottom(state,newColor){
            // state.tabsBarBorderBottom = newColor
        },
    }
}
export default moduleTabs