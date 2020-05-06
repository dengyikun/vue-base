import Vue from 'vue'
import _ from 'lodash'
import moment from 'moment'
import '@/components'
import router from '@/router'
import store from '@/store'
import App from '@/App'

Vue.config.productionTip = false

Vue.prototype.$_ = _
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
