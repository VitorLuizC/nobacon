<template>
  <header class="view-header">
    <img class="logo" src="~@images/logo.png" alt="No Bacon" title="No Bacon" />

    <nav class="menu">
      <ul class="menu-list">
        <router-link to="/about" class="menu-item" tag="li" active-class="-current">
          <a class="link">Sobre</a>
        </router-link>
        <router-link to="/contact" class="menu-item" tag="li" active-class="-current">
          <a class="link">Contato</a>
        </router-link>
      </ul>
    </nav>

    <button v-if="!!auth" @click="signOut">Sair</button>
    <button v-else>
      <router-link to="/auth">
        Entrar / Cadastrar
      </router-link>
    </button>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '@store/types'

  export default {
    computed: mapGetters({
      auth: types.AUTH
    }),
    methods: mapActions({
      signIn: types.AUTH_SIGNIN,
      signOut: types.AUTH_SIGNOUT
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

    > .logo
      height: 100%

    > .menu
      height: 100%
      margin-left: auto

  .menu-list
    display: flex
    height: 100%
    list-style: none
    align-items: center

    > .menu-item + .menu-item
      margin-left: 25px
</style>
