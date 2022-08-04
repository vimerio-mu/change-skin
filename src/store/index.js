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
		btnGhostColor: '#333',
		btnGhostBg: '#fff',
		btnGhostBorder: '#d9d9d9',
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
		// 公司主题色设置（primary、info、success、warning、error）
		CHANGE_PRIMARY_BG_COLOR(state,color){state.btnPrimaryBg = color;},
		CHANGE_PRIMARY_HOVER_BG_COLOR(state,color){state.btnPrimaryHoverBgcolor = color;},
		CHANGE_PRIMARY_PRESSED_BG_COLOR(state,color){state.btnPrimaryPressBgcolor = color;},
		CHANGE_INFO_BG_COLOR(state,color){state.btnInfoBg = color;},
		CHANGE_INFO_HOVER_BG_COLOR(state,color){state.btnInfoHoverBgcolor = color;},
		CHANGE_INFO_PRESSED_BG_COLOR(state,color){state.btnInfoPressBgcolor = color;},
		CHANGE_SUCCESS_BG_COLOR(state,color){state.btnSuccessBg = color;},
		CHANGE_SUCCESS_HOVER_BG_COLOR(state,color){state.btnSuccessHoverBgcolor = color;},
		CHANGE_SUCCESS_PRESSED_BG_COLOR(state,color){state.btnSuccessPressBgcolor = color;},
		CHANGE_WARNING_BG_COLOR(state,color){state.btnWarningBg = color;},
		CHANGE_WARNING_HOVER_BG_COLOR(state,color){state.btnWarningHoverBgcolor = color;},
		CHANGE_WARNING_PRESSED_BG_COLOR(state,color){state.btnWarningPressBgcolor = color;},
		CHANGE_ERROR_BG_COLOR(state,color){state.btnErrorBg = color;},
		CHANGE_ERROR_HOVER_BG_COLOR(state,color){state.btnErrorHoverBgcolor = color;},
		CHANGE_ERROR_PRESSED_BG_COLOR(state,color){state.btnErrorPressBgcolor = color;},
		// 按钮组件颜色设置
		// 小按钮
		CHANGE_SMALL_BG_COLOR(state,color){state.btnSmallDefaultBg=color},	// 默认背景
		CHANGE_SMALL_HOVER_BG_COLOR(state,color){state.btnSmallDefaultHoverBgcolor=color},//滑过背景
		CHANGE_SMALL_PRESS_BG_COLOR(state,color){state.btnSmallDefaultPressBgcolor=color},	// 按下背景
		CHANGE_SMALL_COLOR(state,color){state.btnSmallDefaultColor=color},	// 默认文字
		CHANGE_SMALL_HOVER_COLOR(state,color){state.btnSmallDefaultHoverColor=color},//滑过文字
		CHANGE_SMALL_PRESSED_COLOR(state,color){state.btnSmallDefaultPressColor=color},//按下文字
		CHANGE_SMALL_BORDER_COLOR(state,color){state.btnSmallDefaultBorder=color},	// 默认边框
		CHANGE_SMALL_HOVER_BORDER_COLOR(state,color){state.btnSmallDefaultHoverBorderColor=color},//滑过边框
		CHANGE_SMALL_PRESSED_BORDER_COLOR(state,color){state.btnSmallDefaultPressBorderColor=color},//按下边框
		// 中按钮
		CHANGE_DEFAULT_BG_COLOR(state,color){state.btnDefaultBg=color},	// 默认背景
		CHANGE_DEFAULT_HOVER_BG_COLOR(state,color){state.btnDefaultHoverBgcolor=color},//滑过背景
		CHANGE_DEFAULT_PRESS_BG_COLOR(state,color){state.btnDefaultPressBgcolor=color},	// 按下背景
		CHANGE_DEFAULT_COLOR(state,color){state.btnDefaultColor=color},	// 默认文字
		CHANGE_DEFAULT_HOVER_COLOR(state,color){state.btnDefaultHoverColor=color},//滑过文字
		CHANGE_DEFAULT_PRESSED_COLOR(state,color){state.btnDefaultPressColor=color},//按下文字
		CHANGE_DEFAULT_BORDER_COLOR(state,color){state.btnDefaultBorder=color},	// 默认边框
		CHANGE_DEFAULT_HOVER_BORDER_COLOR(state,color){state.btnDefaultHoverBorderColor=color},//滑过边框
		CHANGE_DEFAULT_PRESSED_BORDER_COLOR(state,color){state.btnDefaultPressBorderColor=color},//按下边框
		// 大按钮
		CHANGE_LARGE_BG_COLOR(state,color){state.btnDefaultBg=color},	// 默认背景
		CHANGE_LARGE_HOVER_BG_COLOR(state,color){state.btnDefaultHoverBgcolor=color},//滑过背景
		CHANGE_LARGE_PRESS_BG_COLOR(state,color){state.btnDefaultPressBgcolor=color},	// 按下背景
		CHANGE_LARGE_COLOR(state,color){state.btnDefaultColor=color},	// 默认文字
		CHANGE_LARGE_HOVER_COLOR(state,color){state.btnDefaultHoverColor=color},//滑过文字
		CHANGE_LARGE_PRESSED_COLOR(state,color){state.btnDefaultPressColor=color},//按下文字
		CHANGE_DEFAULT_BORDER_COLOR(state,color){state.btnDefaultBorder=color},	// 默认边框
		CHANGE_DEFAULT_HOVER_BORDER_COLOR(state,color){state.btnDefaultHoverBorderColor=color},//滑过边框
		CHANGE_DEFAULT_PRESSED_BORDER_COLOR(state,color){state.btnDefaultPressBorderColor=color},//按下边框
		// 禁用按钮
		CHANGE_DISABLE_BG_COLOR(state,color){state.btnDisableBg=color},// 禁用背景
		CHANGE_DISABLE_COLOR(state,color){state.btnDisableColor=color},// 禁用文字
		CHANGE_DISABLE_BORDER_COLOR(state,color){state.btnDisableBorder=color},	//禁用边框
	},
	actions: {
		changeColor(context,value){
			let title = '';
			switch (value.btnTitle) {
				case '品牌色': title = 'PRIMARY'; break;
				case '信息色': title = 'INFO'; break;
				case '成功色': title = 'SUCCESS'; break;
				case '警告色': title = 'WARNING'; break;
				case '错误色': title = 'ERROR'; break;
				case '小按钮': title = 'SMALL'; break;
				case '中按钮': title = 'DEFAULT'; break;
				case '大按钮': title = 'LARGE'; break;
				default:
					break;
			}		
			switch (value.btnState) {
				// 公司品牌主题色设置
				case '默认':
				case '默认背景':
					context.commit(`CHANGE_${title}_BG_COLOR`,value.color)
					break;
				case '滑过':
				case '滑过背景':
					context.commit(`CHANGE_${title}_HOVER_BG_COLOR`,value.color)
					break;
				case '按下':
				case '按下背景':
					context.commit(`CHANGE_${title}_PRESSED_BG_COLOR`,value.color)
					break;
				// 按钮组件颜色设置
				case '默认文字':
					context.commit(`CHANGE_${title}_COLOR`,value.color)
					break;
				case '默认边框':
					context.commit(`CHANGE_${title}_BORDER_COLOR`,value.color)
					break;
				case '滑过文字':
					context.commit(`CHANGE_${title}_HOVER_COLOR`,value.color)
					break;
				case '滑过边框':
					context.commit(`CHANGE_${title}_HOVER_BORDER_COLOR`,value.color)
					break;
				case '按下文字':
					context.commit(`CHANGE_${title}_PRESSED_COLOR`,value.color)
					break;
				case '按下边框':
					context.commit(`CHANGE_${title}_PRESSED_BORDER_COLOR`,value.color)
					break;
				case '禁用背景':
					context.commit(`CHANGE_DISABLE_BG_COLOR`,value.color)
					break;
				case '禁用边框':
					context.commit(`CHANGE_DISABLE_BORDER_COLOR`,value.color)
					break;
				case '禁用文字':
					context.commit(`CHANGE_DISABLE_COLOR`,value.color)
					break;
				default:
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