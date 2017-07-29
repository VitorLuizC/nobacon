import Vue from 'vue'
import Vuex from 'vuex'
import email from '@store/modules/email'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    email
  }
})
