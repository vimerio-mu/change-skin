const moduleWaves = {
    state: {
        wavesContainerColor: '#fff',
        wavesAnimationBackground: 'currentColor',
        wavesWrapLightColor: 'rgba(255, 255, 255, 0.45)',
    },
    mutations: {
        changeWavesContainerColor(state, newColor){
            state.wavesContainerColor = newColor
        },
        changeWavesAnimationBackground(state, newColor){
            state.wavesAnimationBackground = newColor
        },
        changeWavesWrapLightColor(state, newColor){
            state.wavesWrapLightColor = newColor
        },
    }
}
export default moduleWaves