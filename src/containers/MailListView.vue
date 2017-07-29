<template>
  <section class="mail-list-section">
    <form class="mail-list-form" @submit.prevent="() => undefined">
      <h1></h1>
      <input-email class="input" v-model="email" label="E-Mail" />
      <button class="button" type="button" @click="send()">Enviar</button>
    </form>
    <transition name="pop">
      <p
        v-if="message"
        v-html="message"
        :class="['mail-list-pop', isError ? '-error' : '']" />
    </transition>
  </section>
</template>

<script>
  import * as types from '@store/types'
  import InputEmail from '@components/InputEmail'

  export default {
    components: { InputEmail },
    data () {
      return {
        email: '',
        message: null,
        isError: false
      }
    },
    methods: {
      async send () {
        try {
          await this.$store.dispatch(types.EMAIL_SEND, this.email)
          this.message = `
            Tudo certo! Em breve te enviaremos notícias sobre a loja.
            <br />
            Até logo!
          `
        } catch (error) {
          console.log(error)
          this.isError = true
          this.message = `
            Que embaraçoso, parece que ocorreu um erro...
            <br />
            Tentaremos resolver o mais rápido possível.
          `
        }
      }
    },
    watch: {
      message (value) {
        if (!value) {
          return
        }
        setTimeout(() => {
          this.isError = false
          this.message = null
        }, 2000)
      }
    }
  }
</script>

<style lang="stylus">
  border-color = #000

  .mail-list-section
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    height: 100%

    &::before
      position: absolute
      top: 0
      left: @top
      display: block
      width: 100%
      height: @width
      background-image: url('~@images/logo.png')
      background-position: center
      content: ''

  .mail-list-form
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    & > .button
      border: 3px solid border-color
      background-image: none
      background-color: transparent


    & > .input
      margin-right: 10px
      border: none
      border-bottom: 3px solid border-color

  .mail-list-pop
    position: absolute
    bottom: 10px
    left: 50%
    transform: translateX(-50%)
    font-size: 20px
    font-weight: 500 

  /**
   * Pop
   */
</style>
