<template>
  <form @submit.prevent="signIn({ email, password })">
    <input v-model="email" type="email">
    <input v-model="password" type="password">
    <button type="submit">Entrar</button>
    <hr />
    <button @click="signIn({ method: 'facebook' })" type="button">Entrar com o Facebook</button>
    <button @click="signIn({ method: 'google' })" type="button">Entrar com o Google</button>
  </form>
</template>

<script>
  import * as types from '@store/types'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn(...args) {
        console.log(args)
      }
    }
  }
</script>
