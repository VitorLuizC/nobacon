<template>
  <section class="auth-container">
    <tabs>
      <tab name="Entrar">
        <form class="login-container" @submit.prevent="signIn({ email, password })">
          <input v-model="email" type="email">
          <input v-model="password" type="password">
          <button type="submit">Entrar</button>
          <hr />
          <button @click="signIn({ method: 'facebook' })" type="button">Entrar com o Facebook</button>
          <button @click="signIn({ method: 'google' })" type="button">Entrar com o Google</button>
        </form>
      </tab>

      <tab name="Cadastrar">
        Fazer formulário de cadastro com etapas, sendo a primeira o provedor de identidade e a segunda as informações do cliente.
      </tab>
    </tabs>
  </section>
    
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '@store/types'
  import { Tabs, Tab } from 'vue-tabs-component'

  export default {
    components: { Tab, Tabs },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: mapActions({ signIn: types.AUTH_SIGNIN })
  }
</script>

<style lang="stylus">
  .login-container
    position: absolute
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)
</style>
