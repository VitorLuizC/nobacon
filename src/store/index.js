import Vue from 'vue'
import Vuex from 'vuex'
import email from '@store/modules/email'
import products from '@store/modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    email,
    products
  }
})
