<template>
  <header class="view-header">
    <ui-button class="button" to="/login">Entrar</ui-button>
  </header>
</template>

<script>
  import UiButton from './UiButton'
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '@store/types'

  export default {
    components: { UiButton },
    computed: mapGetters({
      auth: types.USER
    }),
    methods: mapActions({
      signIn: types.USER_SIGNIN,
      signOut: types.USER_SIGNOUT
    })
  }
</script>

<style lang="stylus">
  .view-header
    position: absolute
    top: 0
    left: 0
    right: @left
    display: flex
    align-items: center
    box-shadow: 0 0 10px rgba(#000, .25)

    > .button
      margin-left: auto
      margin-right: 18px

  //   > .logo
  //     height: 100%

  //   > .menu
  //     height: 100%
  //     margin-left: auto

  // .menu-list
  //   display: flex
  //   height: 100%
  //   list-style: none
  //   align-items: center

  //   > .menu-item + .menu-item
  //     margin-left: 25px
</style>
