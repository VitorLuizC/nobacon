<template>
  <view-container>
    <h1>Id {{ id }}</h1>
  </view-container>
</template>

<script>
  import ViewContainer from '@components/ViewContainer'

  export default {
    components: {
      ViewContainer
    },
    computed: {
      id() {
        return this.$route.id
      }
    }
  }
</script>
