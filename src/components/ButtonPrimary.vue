<template>
  <button class="button-primary">
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style lang="stylus">
  primary-color = #607D8B

  .button-primary
    display: inline-block
    box-sizing: border-box
    width: 280px
    height: 44px
    border: 2px solid primary-color
    background-color: transparent
    cursor: pointer
    outline: none
    transition: background-color .6s ease

    > .text
      text-transform: uppercase
      color: primary-color
      transition: color .6s ease

    &:hover
    &:active
      background-color: primary-color

      > .text
        color: #fff

    &.-block
      width: 100%
</style>
