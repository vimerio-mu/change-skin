const moduleUCharts = {
    state: {
        uChartsStatusSuccess: '#4CD6A1',
        uChartsStatusError: '#F36F7D',
        uChartsStatusInfo: '#3597F5',
        uChartsStatusWarning: '#FFC76C'
    },
    mutations: {
        changeUChartsStatusSuccess(state,newColor){
            state.uChartsStatusSuccess = newColor
        },
        changeUChartsStatusError(state,newColor){
            state.uChartsStatusError = newColor
        },
        changeUChartsStatusInfo(state,newColor){
            state.uChartsStatusInfo = newColor
        },
        changeUChartsStatusWarnin(state,newColor){
            state.uChartsStatusWarning = newColor
        },
    }
}

export default moduleUCharts