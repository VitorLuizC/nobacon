<template>
  <div class="view-container">
    <view-header v-if="!hideHeader" />
    <main class="view-content">
      <slot />
    </main>
  </div>
</template> 

<script>
  import ViewHeader from './ViewHeader'

  export default {
    components: { ViewHeader },
    props: {
      hideHeader: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '~@styles/helpers'

  view-header = {
    height: 80px
  }

  .view-container
    clearfix()
    height: 100%

    > .view-header
      height: view-header.height

    > .view-content
      height: 100%

    > .view-header ~ .view-content
      height: 'calc(100% - %s)' % view-header.height
      margin-top: view-header.height
</style>
