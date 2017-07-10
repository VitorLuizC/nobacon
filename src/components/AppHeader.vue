<template>
  <header>
    <h1>No Bacon</h1>
    <img src="~@images/logo.png" />

    <nav>
      <ul>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>

    <button v-if="!!auth" @click="signOut">Sair</button>
    <button v-else></button>
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
