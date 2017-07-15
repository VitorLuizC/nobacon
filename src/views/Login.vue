<template>
  <view-container hide-header>
    <form-login />
  </view-container>
</template>

<script>
  import FormLogin from '@components/FormLogin'
  import ViewContainer from '@components/ViewContainer'

  export default {
    components: {
      FormLogin,
      ViewContainer
    }
  }
</script>
