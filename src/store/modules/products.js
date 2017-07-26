import * as types from '@store/types'
import database from '@lib/database'

const state = {
  products: []
}

const getters = {
  [types.PRODUCTS]: state => {
    return Object.values(state.products) || []
  }
}

const mutations = {
  [types.PRODUCTS]: (state, payload) => {
    state.products = payload
  }
}

const actions = {
  [types.PRODUCTS_FETCH]: async ({ commit }, payload) => {
    const reference = database.ref('products/')
    const products = await reference.once('value')
    commit(types.PRODUCTS, products.val())
  }
}

export default { state, getters, mutations, actions }
