import * as types from '@store/types'
import firebase from 'firebase'
import { auth } from '@app'

export const state = {
  auth: null
}

export const getters = {
  [types.AUTH](state) {
    return state.auth
  }
}

export const mutations = {
  [types.AUTH](state, payload) {
    state.auth = payload
  }
}

export const actions = {
  [types.AUTH_SIGNIN]({ commit, getters }, paylad) {
    const authenticated = !!getters[types.AUTH]

    if (authenticated)
      throw new Error(`Already authenticated!`)

    let provider = null

    switch (payload.method) {
      case 'facebook':
        provider = firebase.auth.FacebookAuthProvider()
        break
      case 'google':
        provider = firebase.auth.GoogleAuthProvider()
        break
    }
  }
}
