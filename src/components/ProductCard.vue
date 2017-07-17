<template>
  <ui-card class="product-card -filled">
    <figure class="product-card-images">
      <carousel class="carousel"
        :per-page="1"
        scroll-per-page
        autoplay
        :autoplay-timeout="1000"
        pagination-enabled
        pagination-active-color="#960074"
        pagination-color="#FFFFFF"
        :pagination-size="10"
        :pagination-padding="7.5">
        <slide v-for="(image, index) in product.images" :key="index">
          <img :src="image" />
        </slide>
      </carousel>
      <figcaption class="detail">
        <h5 class="name">{{ product.name }}</h5>
      </figcaption>
    </figure>
    <strong class="price" slot="footer">{{ product.price | $ }}</strong>
  </ui-card>
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
    }
  }
</script>

<style lang="stylus">
  .product-card
    width: 300px

    & > .footer
      padding: 10px

    & > .footer > .price
      font-size: 28px

  .product-card-images
  .product-card-footer
    width: 300px

  .product-card-images
    position: relative

    & > .carousel
      overflow: hidden
      width: 100%
      height: 300px
      border-radius: 25px 25px 0 0
      backface-visibility: hidden
      transform: translateX(0)
    
    & > .detail
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

    img
      display: block
      width: 300px
      height: @width

  .VueCarousel-pagination
    position: absolute
    bottom: 35px

    .VueCarousel-dot-inner
      box-shadow: 0 0 10px currentColor
</style>
