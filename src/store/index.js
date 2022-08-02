import Vuex from 'vuex'
import Vue from 'vue'
import moduleColor from './modules/color'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentSkin: ""
  },
  mutations: {
    changeCurrentSkin(state, skinName) {
      state.currentSkin = skinName
    } 
  },
  modules: {
    color: moduleColor,
  }
})

export default store;