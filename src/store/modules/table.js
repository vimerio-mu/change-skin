const moduleTable = {
    state: {
        tableRowDragoverTdColor: '#fff',
        tableSummationBorder: '1px solid #dce1e7',
    },
    mutations: {
        changeTableRowDragoverTdColor(state,newColor){
            state.tableRowDragoverTdColor = newColor
        },
        changeTableSummationBorder(state,newColor){
            // state.tableSummationBorder = newColor
        },
    }
}
export default moduleTable