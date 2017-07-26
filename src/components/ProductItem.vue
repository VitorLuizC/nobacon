<template>
  <router-link class="product-item" :to="detail">
    <ui-card class="product-item-card -filled">
      <figure class="product-item-image">
        <img class="image" :src="product.images[0]" />
        <figcaption class="product-item-details">
          <h5 class="name">{{ product.name }}</h5>
        </figcaption>
      </figure>
      <strong slot="footer" class="product-item-price">{{ product.price | $ }}</strong>
    </ui-card>
  </router-link>
</template>

<script>
  import UiCard from './UiCard'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide,
      UiCard
    },
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      detail () {
        return `/product/${this.product.id}`
      }
    }
  }
</script>

<style lang="stylus">
  .product-item-card
    width: 300px
    overflow: hidden

    & > .footer
      padding: 10px
      font-size: 28px
      color: #000

  .product-item-image
    position: relative
    display: block
    width: 300px
    height: @width

    & > .image
      overflow: hidden
      width: 100%
      height: 300px
      border-radius: 25px 25px 0 0
      backface-visibility: hidden
      transform: translateX(0)

  .product-item-details
    position: absolute
    bottom: 0
    width: 100%
    background-image: linear-gradient(to bottom, transparent, rgba(#000, .75))

    & > .name
      margin: 0
      padding: 10px
      font-size: 20px
      font-weight: 400
      color: #fff
      text-align: center
</style>
