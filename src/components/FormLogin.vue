<template>
  <ui-card title="Login" class="-center">
    <form @submit.prevent="signIn({ email, password })" id="form-login">
      <ui-input v-model="email" type="email" label="E-Mail" />
      <ui-input v-model="password" type="password" label="Senha" />
    </form>
    <ui-button slot="footer" form="form-login">Entrar</ui-button>
  </ui-card>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '@store/types'
  import UiButton from './UiButton'
  import UiCard from './UiCard'
  import UiInput from './UiInput'

  export default {
    components: {
      UiButton,
      UiCard,
      UiInput
    },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: mapActions({ signIn: types.USER_SIGNIN })
  }
</script>
