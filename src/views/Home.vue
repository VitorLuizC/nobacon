<template>
  <view-container>
    <product-shelf :products="products" />
  </view-container>
</template>

<script>
  import * as types from '@store/types'
  import ViewContainer from '@components/ViewContainer'
  import ProductShelf from '@components/ProductShelf'

  export default {
    components: {
      ProductShelf,
      ViewContainer
    },
    computed: {
      products () {
        return this.$store.getters[types.PRODUCTS]
      }
    },
    created () {
      this.$store.dispatch(types.PRODUCTS_FETCH)
    }
  }
</script>
