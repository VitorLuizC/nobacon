<template>
  <view-container>
    <product-shelf :products="[product]" />
  </view-container>
</template>

<script>
  import ViewContainer from '@components/ViewContainer'
  import ProductShelf from '@components/ProductShelf'

  import image from '@images/camiseta.jpeg'

  export default {
    data () {
      return {
        product: {
          id: '01',
          name: 'Camiseta No Bacon',
          images: [image, image],
          price: 39.90
        }
      }
    },
    components: {
      ProductShelf,
      ViewContainer
    }
  }
</script>
