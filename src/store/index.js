//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const button = {
	namespaced:true,//开启命名空间
	state:{
		btnGroupBorder: '#298DFF',
		btnBaseColor: '#fff',
		btnDisableColor: '#b3b3b3',
		btnDisableBg: '#ededed',
		btnDisableBorder: '#d9d9d9',
		btnGhostColor: '#333',
		btnGhostBg: '#fff',
		btnGhostBorder: '#d9d9d9',
		btnBeforeBackground: '#fff',
		btnCommonBgcolor: '#f2f2f2',
		btnDefaultColor: '#333',
		btnDefaultBg: '#037df3',
		btnDefaultBorder: '#037df3',
		btnDefaultHoverColor: '#fff',
		btnDefaultHoverBgcolor: '#3597f5',
		btnDefaultHoverBorderColor: '#3597f5',
		btnDefaultPressColor: '#FFF',
		btnDefaultPressBgcolor: '#0270da',
		btnDefaultPressBorderColor: '#0270da',
		btnSmallDefaultColor: '#333',
		btnSmallDefaultBg: '#037df3',
		btnSmallDefaultBorder: '#037df3',
		btnSmallDefaultHoverColor: '#fff',
		btnSmallDefaultHoverBgcolor: '#3597f5',
		btnSmallDefaultHoverBorderColor: '#3597f5',
		btnSmallDefaultPressColor: '#FFF',
		btnSmallDefaultPressBgcolor: '#0270da',
		btnSmallDefaultPressBorderColor: '#0270da',
		btnGhostHoverColor: '#3597f5',
		btnGhostHoverBgcolor: '#fff',
		btnGhostHoverBorderColor: '#3597f5',
		btnGhostPressColor: '#0270da',
		btnGhostPressBgcolor: '#fff',
		btnGhostPressBorderColor: '#0270da',
		btnPrimaryColor: '#fff',
		btnPrimaryBg: '#037df3',
		btnPrimaryBorder: '#037df3',
		btnPrimaryHoverColor: '#fff',
		btnPrimaryHoverBgcolor: '#3597f5',
		btnPrimaryHoverBorderColor: '#3597f5',
		btnPrimaryPressColor: '#fff',
		btnPrimaryPressBgcolor: '#0270da',
		btnPrimaryPressBorderColor: '#0270da',
		btnInfoColor: '#fff',
		btnInfoBg: '#029afd',
		btnInfoBorder: '#029afd',
		btnInfoHoverColor: '#fff',
		btnInfoHoverBgcolor: '#34aefd',
		btnInfoHoverBorderColor: '#34aefd',
		btnInfoPressColor: '#fff',
		btnInfoPressBgcolor: '#018ae3',
		btnInfoPressBorderColor: '#018ae3',
		btnDangerColor: '#fff',
		btnDangerBg: '#f14c5d',
		btnDangerBorder: '#f14c5d',
		btnDangerHoverColor: '#fff',
		btnDangerHoverBgcolor: '#f36f7d',
		btnDangerHoverBorderColor: '#f36f7d',
		btnDangerPressColor: '#fff',
		btnDangerPressBgcolor: '#d84453',
		btnDangerPressBorderColor: '#d84453',
		btnSuccessColor: '#fff',
		btnSuccessBg: '#1cb77b',
		btnSuccessBorder: '#1cb77b',
		btnSuccessHoverColor: '#fff',
		btnSuccessHoverBgcolor: '#20ccba',
		btnSuccessHoverBorderColor: '#20ccba',
		btnSuccessPressColor: '#fff',
		btnSuccessPressBgcolor: '#19a36e',
		btnSuccessPressBorderColor: '#19a36e',
		btnWarningColor: '#fff',
		btnWarningBg: '#f2b044',
		btnWarningBorder: '#f2b044',
		btnWarningHoverColor: '#fff',
		btnWarningHoverBgcolor: '#ffba48',
		btnWarningHoverBorderColor: '#ffba48',
		btnWarningPressColor: '#fff',
		btnWarningPressBgcolor: '#d99e3d',
		btnWarningPressBorderColor: '#d99e3d',
		btnErrorColor: '#fff',
		btnErrorBg: '#f14c5d',
		btnErrorBorder: '#f14c5d',
		btnErrorHoverColor: '#fff',
		btnErrorHoverBgcolor: '#f36f7d',
		btnErrorHoverBorderColor: '#f36f7d',
		btnErrorPressColor: '#fff',
		btnErrorPressBgcolor: '#d84453',
		btnErrorPressBorderColor: '#d84453',
	},
	mutations: {
		CHANGE_DEFAULT_COLOR(state,color){
			state.btnDefaultBg = color;
		},
		CHANGE_DEFAULT_HOVER_COLOR(state,color){
			state.btnDefaultHoverBgcolor = color;
		},
		CHANGE_DEFAULT_PRESSED_COLOR(state,color){
			state.btnDefaultPressBgcolor = color;
		},
		CHANGE_INFO_COLOR(state,color){
			state.btnInfoBg = color;
		},
		CHANGE_INFO_HOVER_COLOR(state,color){
			state.btnInfoHoverBgcolor = color;
		},
		CHANGE_INFO_PRESSED_COLOR(state,color){
			state.btnInfoPressBgcolor = color;
		},
		CHANGE_SUCCESS_COLOR(state,color){
			state.btnSuccessBg = color;
		},
		CHANGE_SUCCESS_HOVER_COLOR(state,color){
			state.btnSuccessHoverBgcolor = color;
		},
		CHANGE_SUCCESS_PRESSED_COLOR(state,color){
			state.btnSuccessPressBgcolor = color;
		},
		CHANGE_WARNING_COLOR(state,color){
			state.btnWarningBg = color;
		},
		CHANGE_WARNING_HOVER_COLOR(state,color){
			state.btnWarningHoverBgcolor = color;
		},
		CHANGE_WARNING_PRESSED_COLOR(state,color){
			state.btnWarningPressBgcolor = color;
		},
		CHANGE_ERROR_COLOR(state,color){
			state.btnErrorBg = color;
		},
		CHANGE_ERROR_HOVER_COLOR(state,color){
			state.btnErrorHoverBgcolor = color;
		},
		CHANGE_ERROR_PRESSED_COLOR(state,color){
			state.btnErrorPressBgcolor = color;
		},
	},
	actions: {
		changeColor(context,value){
			switch (value.btnState) {
				case '默认':
					context.commit(`CHANGE_${value.title.toUpperCase()}_COLOR`,value.color)
					break;
				case '滑过':
					context.commit(`CHANGE_${value.title.toUpperCase()}_HOVER_COLOR`,value.color)
					break;
				case '按下':
					context.commit(`CHANGE_${value.title.toUpperCase()}_PRESSED_COLOR`,value.color)
					break;
			}
		},

	},
	getters: {

	}
}

//创建并暴露store
export default new Vuex.Store({
	modules: {
		button
	}
})