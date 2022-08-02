//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const button = {
	namespaced:true,//开启命名空间
	state:{
		btnDefaultBg:'#037df3',
		btnDefaultHoverBgcolor: '#3597f5',
		btnDefaultPressBgcolor: '#0270da',
	},
	mutations: {
		CHANGE_COLOR(state,color){
			state.btnDefaultBg = color;
		}
	},
	actions: {
		changeColor(context,color){
			context.commit('CHANGE_COLOR',color);
		}
	},
	getters: {}
}

//创建并暴露store
export default new Vuex.Store({
	modules: {
		button
	}
})