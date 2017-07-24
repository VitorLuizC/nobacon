<template>
  <view-container>
    <product-shelf :products="products" />
  </view-container>
</template>

<script>
  import ViewContainer from '@components/ViewContainer'
  import ProductShelf from '@components/ProductShelf'

  import image from '@images/camiseta.jpeg'

  export default {
    data () {
      return {
        products: [
          {
            id: '01',
            name: 'Camiseta No Bacon',
            image: image,
            sellings: 12,
            price: 39.90
          },
          {
            id: '02',
            name: 'Camiseta No Bacon 2',
            sellings: 3,
            image: image,
            price: 59.90
          },
          {
            id: '03',
            name: 'Camiseta No Bacon 3',
            sellings: 1,
            image: image,
            price: 59.90
          },
          {
            id: '04',
            name: 'Camiseta No Bacon 4',
            sellings: 10,
            image: image,
            price: 34.90
          }
        ]
      }
    },
    components: {
      ProductShelf,
      ViewContainer
    }
  }
</script>
