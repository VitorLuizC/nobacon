<template>
  <view-container :header="false">
    <login />
  </view-container>
</template>

<script>
  import ViewContainer from '@components/ViewContainer'
  import Login from '@components/Login'

  export default {
    components: { ViewContainer, Login }
  }
</script>
