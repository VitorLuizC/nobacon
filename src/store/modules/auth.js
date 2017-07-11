import * as types from '@store/types'
import firebase from 'firebase'
import { auth } from '../../app'

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
  async [types.AUTH_SIGNIN]({ commit, getters }, payload) {
    const authenticated = !!getters[types.AUTH]

    if (authenticated)
      throw new Error(`Already authenticated!`)

    let provider = null

    switch (payload.method) {
      case 'facebook':
        provider = new firebase.auth.FacebookAuthProvider()
        break
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider()
        break
    }

    let user = null

    if (provider) {
      const result = await auth.signInWithPopup(provider)
      user = result.user
      /**
       * TODO: Adicionar validação de novo cliente e caso positivo direcionar o
       * usuário para o cadastro com os dados já preenchidos.
       * @private
       */
    } else {
      user = await auth.signInWithEmailAndPassword(payload.email, payload.password)
    }

    if (user === null)
      return
    commit(types.AUTH, user)
  },
  async [types.AUTH_SIGNOUT]({ commit }) {
    const notAuthenticated = getters[types.AUTH] === null

    if (notAuthenticated)
      return

    await auth.signOut()
    commit(types.AUTH, null)
  }
}
