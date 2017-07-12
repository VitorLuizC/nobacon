<template>
  <form class="auth-form" @submit.prevent="signIn({ email, password })">
    <div class="form-group">
      <input v-model="email" class="input" type="email">
      <label class="label">E-Mail</label>
    </div>
    <div class="form-group">
      <input v-model="password" class="input" type="password">
      <label class="label">Senha</label>
    </div>
    <button-primary
      class="button"
      type="submit">Entrar</button-primary>
    <router-link to="/recover">Esqueceu sua senha?</router-link>
    <hr class="separator" />
    <button-primary
      @click.native="signIn({ method: 'facebook' })"
      class="button -block"
      type="button"
      >Entrar com o Facebook</button-primary>
    <button-primary
      @click.native="signIn({ method: 'google' })"
      class="button -block"
      type="button"
      >Entrar com o Google</button-primary>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '@store/types'
  import ButtonPrimary from './ButtonPrimary'

  export default {
    components: { ButtonPrimary },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: mapActions({ signIn: types.AUTH_SIGNIN })
  }
</script>
