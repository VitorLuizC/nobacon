<template>
  <header class="view-header">
    <img class="logo" src="~@images/logo.png" alt="No Bacon" title="No Bacon" />

    <nav class="menu">
      <ul class="menu-list">
        <li class="menu-item">Sobre</li>
        <li class="menu-item">Contato</li>
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
  .menu-container
    display: flex

  .menu-list
    display: flex
    list-style: none

  .view-header
    height: 80px
    display: flex

    > .logo
      height: 100%

    > .menu
      @extends .menu-container
</style>
