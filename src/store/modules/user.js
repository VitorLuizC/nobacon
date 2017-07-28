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
  [types.USER_SIGNIN]: async ({ commit }, payload) => {
    const response = await auth.signInWithEmailAndPassword(
      payload.email,
      payload.password
    )
    commit(types.USER, response.user)
  },
  [types.USER_SIGNON]: async ({ commit }, payload) => {
    const response = await auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    )
    commit(types.USER, response.user)
  },
  [types.USER_SIGNOUT]: async ({ commit }) => {
    await auth.signOut()
    commit(types.USER, null)
  },
  [types.USER_SIGNOFF]: async ({ commit, getters }) => {
    const user = getters[types.USER]
    await user.delete()
    commit(types.USER, null)
  }
}
