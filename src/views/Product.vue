<template>
  <view-container>
    <div class="product-details">
      <carousel class="product-details-images">
        <slide
          class="product-details-image"
          v-for="image in product.images"
          :key="image">
          <img
            class="image"
            :src="image"
            :alt="product.name"
            :title="product.name" />
        </slide>
      </carousel>
      <article class="product-details-info">
        <h1 class="name">{{ product.name }}</h1>
        <div class="description" v-html="product.description" />
        <strong class="price">{{ product.price | $ }}</strong>
        <ui-button>Comprar</ui-button>
      </article>
    </div>
  </view-container>
</template>

<script>
  import * as types from '@store/types'
  import { Slide, Carousel } from 'vue-carousel'
  import ViewContainer from '@components/ViewContainer'

  export default {
    components: {
      Carousel,
      Slide,
      ViewContainer
    },
    computed: {
      product () {
        return this.$store.getters[types.PRODUCT]
      },
      id () {
        return this.$route.params.id
      }
    },
    async created () {
      try {
        this.$store.dispatch(types.PRODUCT_FETCH, this.id)
      } catch (error) {
        this.error = error
      }
    }
  }
</script>

<style lang="stylus">
  .product-details
    display: flex
    justify-content: center
    width: 100%

  .product-details-images
    width: 640px

  .product-details-image
    width: 640px

    & > .image
      width: 640px
      display: block

  .product-details-info
    display: flex
    justify-content: center
    width: calc(100% - 640px)
</style>

