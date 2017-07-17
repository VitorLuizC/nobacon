<template>
  <view-container hide-header>
    <ui-card title="Cadastro" class="-center">
      <form @submit.prevent="signOn({ name, email, password })" id="form-signon">
        <ui-input v-model="name" type="text" label="Nome Completo" />
        <ui-input v-model="email" type="email" label="E-Mail" />
        <ui-input v-model="password" type="password" label="Senha" />
      </form>
      <ui-button form="form-signon">Cadastrar</ui-button>
    </ui-card>
  </view-container>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '@store/types'
  import UiButton from '@components/UiButton'
  import UiCard from '@components/UiCard'
  import UiInput from '@components/UiInput'
  import ViewContainer from '@components/ViewContainer'
  
  export default {
    components: {
      UiButton,
      UiCard,
      UiInput,
      ViewContainer
    },
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: mapActions({ signOn: types.USER_SIGNON })
  }
</script>
