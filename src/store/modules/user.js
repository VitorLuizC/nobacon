import * as types from '@store/types'
import { auth } from '@app'

export const state = {
  user: null
}

export const getters = {
  [types.USER]: state => {
    return state.user
  }
}

export const mutations = {
  [types.USER]: (state, payload) => {
    state.user = payload
  }
}

export const actions = {
  [types.USER_SIGNIN]: async (context, payload) => {
    const { commit } = context

    try {
      const response = await auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )
      commit(types.USER, response.user)
    } catch (error) {
      console.error(error)
    }
  },
  [types.USER_SIGNON]: async ({ commit }, payload) => {
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
  [types.USER_SIGNOUT]: async ({ commit }) => {
    try {
      await auth.signOut()
      commit(types.USER, null)
    } catch (error) {
      console.error(error)
    }
  },
  [types.USER_SIGNOFF]: async ({ commit, getters }) => {
    const user = getters[types.USER]

    try {
      await user.delete()
      commit(types.USER, null)
    } catch (error) {
      console.error(error)
    }
  }
}
