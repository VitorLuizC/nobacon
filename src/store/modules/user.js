import * as types from '@store/types'
import firebase from 'firebase'
import { auth } from '@app'

export const state = {
  user: null
}

export const getters = {
  [types.USER](state) {
    return state.user
  }
}

export const mutations = {
  [types.USER](state, payload) {
    state.user = payload
  }
}

export const actions = {
  async [types.USER_SIGNIN]({ commit, getters }, payload) {
    try {
      const response = await auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      commit(types.USER, response.user)
    } catch (error) {
      console.error(error)
    }
  },
  async [types.USER_SIGNON]({ commit }) {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      )
      commit(types.USER, response.user)
    } catch (error) {
      console.error(error)
    }
  },
  async [types.USER_SIGNOUT]({ commit }) {
    try {
      await auth.signOut()
      commit(types.USER, null)
    } catch (error) {
      console.error(error)
    }
  },
  async [types.USER_SIGNOFF]({ commit }) {
    try {
      /**
       * TODO: Fazer o descadastramento de usuários.
       * @private
       */
    } catch (error) {
      console.error(error)
    }
  }
}
