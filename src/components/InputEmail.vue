<template>
  <div class="input-email">
    <input
      ref="input"
      class="input"
      type="email"
      placeholder="Digite seu email"
      :value="value"
      @keyup="event => pressed(event)" />

    <!--
    <label v-if="label" class="label">{{ label }}</label>
    -->

    <span
      v-if="sugestion"
      ref="sugestion"
      class="sugestion">{{ sugestion }}</span>
  </div>
</template>

<script>
  export default {
    props: ['value', 'label'],
    data () {
      return {
        sugestion: null
      }
    },
    methods: {
      sugest (text) {
        const typingDomain = /([^@]+@)([^$]+)/.exec(text)

        if (typingDomain) {
          const email = typingDomain[1]
          const domain = typingDomain[2]
          const domains = [
            'gmail.com',
            'hotmail.com',
            'qq.com',
            'live.com',
            'outlook.com'
          ]

          const isEmailDomain = new RegExp(`^${domain}`)

          this.sugestion = domains.reduce((sugestion, domain) => {
            if (isEmailDomain.test(domain)) {
              return email + domain
            }
            return sugestion
          }, null)
        } else {
          this.sugestion = null
        }
      },
      pressed (event) {
        const { target, key } = event
        this.sugest(target.value)
        if ((key === 'Tab' || key === 'ArrowRight') && this.sugestion) {
          this.$emit('input', this.sugestion)
        } else {
          this.$emit('input', target.value)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .input-email
    position: relative
    background-color: #fff
    z-index: 0

    & > .input
    & > .sugestion
      display: block
      width: 100%
      height: @width

    & > .input
      padding: 0
      border: none
      background-color: transparent

    & > .sugestion
      position: absolute
      top: 0
      left: 0
      opacity: .75
      z-index: -1
</style>
