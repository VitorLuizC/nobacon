<template>
  <section class="mail-list-section">
    <h1 class="title">NOBACON STORE</h1>
    <p class="text">
      Queremos você perto de nós quando tudo começar!
      Deixe seu e-mail aqui e acompanhe as incríveis novidades da NOBACON STORE.
    </p>
    <form class="mail-list-form" @submit.prevent="() => undefined">
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
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
        if (!isValidEmail) {
          this.isError = true
          this.message = `
            Parece que há um problema com o email que você digitou...
          `
          return
        }

        try {
          await this.$store.dispatch(types.EMAIL_SEND, this.email)
          this.message = `
            Tudo certo! Em breve te enviaremos notícias sobre a loja.
            <br />
            Até logo!
          `
        } catch (error) {
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
        }, 12000)
      }
    }
  }
</script>

<style lang="stylus">
  border-color = #000

  .mail-list-section
    position: relative
    box-sizing: border-box
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
    padding: 0 25px
    z-index: 0

    & > .title
    & > .text
      text-align: center

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
      z-index: -1

  .mail-list-form
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center

    & > .button
      border: 3px solid border-color
      font-weight: 500
      background-image: linear-gradient(135deg, transparent 0, transparent 98%, border-color 99%, border-color 100%)
      background-color: transparent
      box-shadow: 4px 4px 15px rgba(#000, .25)
      transition: background-color .8s ease,
                  color .8s ease,
                  box-shadow .05s ease

    & > .button:hover
    & > .button:focus
      background-color: border-color
      color: #fff

    & > .button:active
      box-shadow: 0 0 0 rgba(#000, .25)

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

  .pop-enter-active
  .pop-leave-active
    transition: transform .8s ease,
                opacity .8s ease

  .pop-enter
  .pop-leave-to
    transform: translateX(-50%) scale(0) !important
    opacity: 0
</style>
