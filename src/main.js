import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'


// main.js
import GlobalMixins from '@/utils/GlobalMixins.vue'
import AppConstants from '@/utils/AppConstants'


Vue.config.productionTip = false

Vue.mixin(GlobalMixins)
Vue.prototype.$const = AppConstants

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
