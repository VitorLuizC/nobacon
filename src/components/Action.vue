<template>
  <component
    class="action-container -link"
    :is="isLink ? 'router-link' : 'button'"
    :to="to"
    :class="{ '-link': isLink  }">
    <span class="text">
      <slot />
    </span>
  </component>
</template>

<script>
  export default {
    props: {
      to: String
    },
    computed: {
      isLink () {
        return !!this.to
      }
    }
  }
</script>

<style lang="stylus">
  .action-container
    display: inline-block
    box-sizing: border-box
    width: 120px
    height: 44px
    padding: 0
    border: 0
    border-radius: (@height / 8)
    line-height: @height
    text-align: center
    background-color: #960074
    background-image: linear-gradient(180deg, @background-color, rgba(#fff, .25))
    cursor: pointer
    outline: none
    transition: transform .6s ease

    > .text
      line-height: 1
      text-transform: uppercase
      font-weight: 700
      color: #fff
      transition: color .6s ease

    &.-link > .text
      text-decoration: none

    &:hover
    &:active
      tranform: scale(1.1)

      > .text
        color: #fff

    &.-block
      width: 100%
</style>
