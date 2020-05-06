import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import app from '@/store/modules/app'
import images from '@/store/modules/images'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    app,
    images
  },
  strict: debug
})
