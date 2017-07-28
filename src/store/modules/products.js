import * as types from '@store/types'
import database from '@lib/database'

const state = {
  products: [],
  product: {
    id: '',
    name: '',
    description: '',
    category: '',
    price: 0
  }
}

const getters = {
  [types.PRODUCT]: state => {
    return state.product
  },
  [types.PRODUCTS]: state => {
    return Object.values(state.products) || []
  }
}

const mutations = {
  [types.PRODUCT]: (state, payload) => {
    state.product = payload
  },
  [types.PRODUCTS]: (state, payload) => {
    state.products = payload
  }
}

const actions = {
  [types.PRODUCT_FETCH]: async ({ commit }, payload) => {
    const reference = database.ref('products/').child(payload)
    const product = await reference.once('value')
    commit(types.PRODUCT, product.val())
  },
  [types.PRODUCTS_FETCH]: async ({ commit }, payload) => {
    const reference = database.ref('products/')
    const products = await reference.once('value')
    commit(types.PRODUCTS, products.val())
  }
}

export default { state, getters, mutations, actions }
