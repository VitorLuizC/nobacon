<template>
  <section class="auth-container">
    <tabs>
      <tab name="Entrar">
        <form-login class="-login" />
      </tab>

      <tab name="Cadastrar">
        Fazer formulário de cadastro com etapas, sendo a primeira o provedor de identidade e a segunda as informações do cliente.
      </tab>
    </tabs>
  </section>
    
</template>

<script>
  import FormLogin from './FormLogin'
  import { Tabs, Tab } from 'vue-tabs-component'

  export default {
    components: { FormLogin, Tab, Tabs }
  }
</script>

<style lang="stylus">
  centralize(type = absolute, axis = both)
    if (type == absolute || type == fixed)
      position: type

      if (axis == both)
        top: 50%
        left: 50%
        transform: translateY(-50%) translateX(-50%)

  .auth-container
    centralize()
    width: 500px
    box-shadow: 4px 20px 50px -5px rgba(#000, .25)

    > .tabs-component
      > .tabs-component-tabs
        display: flex
        list-style: none

        > .tabs-component-tab
          box-sizing: border-box
          padding: 10px

          &.is-active
            background-color: #607D8B

        > .tabs-component-tab + .tabs-component-tab
          border-left: 1px solid rgba(#000, .25)

      > .tabs-component-panels
        border-top: 1px solid rgba(#000, .25)
        padding: 10px

  .form-group
    display: flex
    flex-direction: column

    > .label
      text-align: left

    > .input
      width: 350px

  .auth-form
    display: flex
    flex-direction: column
    justify-content: space-around

    > .separator
      width: 100%
      height: 1px
      border: 0
      background-color: rgba(#000, .25)

    > .button
      align-self: center
</style>
