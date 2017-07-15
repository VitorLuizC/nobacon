<template>
  <form>
    <ui-input v-model="name" type="text" label="Nome Completo" />
    <ui-input v-model="email" type="email" label="E-Mail" />
    <ui-input v-model="password" type="password" label="Senha" />
    <ui-button>Cadastrar</ui-button>
  </form>
</template>

<script>
  import UiInput from './UiInput'
  import UiButton from './UiButton'

  export default {
    components: { UiInput, UiButton },
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    }
  }
</script> 
