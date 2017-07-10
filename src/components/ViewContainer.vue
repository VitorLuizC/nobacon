<template>
  <div class="view-container">
    <view-header v-if="header" />
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
      header: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="stylus">
  .view-container
    height: 100%
</style>
