<template>
  <view-container :header="false">
    <auth-form />
  </view-container>
</template>

<script>
  import ViewContainer from '@components/ViewContainer'
  import AuthForm from '@components/AuthForm'

  export default {
    components: { ViewContainer, AuthForm }
  }
</script>
