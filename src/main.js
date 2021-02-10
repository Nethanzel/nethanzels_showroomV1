import Vue from 'vue'
import App from './App.vue'
import router from './router'

import titleMix from "./mixins/titleMix"


Vue.mixin(titleMix)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
