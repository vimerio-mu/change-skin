import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hui from "h_ui";
import "h_ui/dist/h_ui.min.css";

Vue.config.productionTip = false
Vue.use(hui);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
