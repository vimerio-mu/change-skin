const moduleTransfer = {
    state: {
        transferHeaderBg: '#f2f2f2',
        transferListContentItemHoverColor: '#E5F2FD',
        transferOperationBtnColor: '#037df3',
        transferOperationBtnBgcolor: '#fff',
        transferOperationBtnBorderColor: '#d9d9d9',
        transferOperationBtnBorderHoverColor: '#037df3',
    },
    mutations: {
        changeTransferHeaderBg(state,newColor){
            state.transferHeaderBg = newColor
        },
        changeTransferListContentItemHoverColor(state,newColor){
            state.transferListContentItemHoverColor = newColor
        },
        changeTransferOperationBtnColor(state,newColor){
            state.transferOperationBtnColor = newColor
        },
        changeTransferOperationBtnBgcolor(state,newColor){
            state.transferOperationBtnBgcolor = newColor
        },
        changeTransferOperationBtnBorderColor(state,newColor){
            state.transferOperationBtnBorderColor = newColor
        },
        changeTransferOperationBtnBorderHoverColor(state,newColor){
            state.transferOperationBtnBorderHoverColor = newColor
        },
    }
}
export default moduleTransfer