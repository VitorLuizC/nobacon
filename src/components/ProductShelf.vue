<template>
  <div class="product-shelf">
    <div class="product-shelf-filters">
      <div class="product-shelf-filter">
        <span class="label">Ordenar por:</span>
        <ui-select class="input" v-model="ordenation" :options="ordenations" />
      </div>
    </div>
    <hr class="separator" />
    <transition-group class="product-shelf-products" name="shelf-products" tag="div">
      <product-card v-for="product in filtredProducts" :key="product.id" :product="product" />
    </transition-group>
  </div>
</template>

<script>
  import ProductCard from './ProductCard'
  import UiSelect from './UiSelect'

  export default {
    components: {
      ProductCard,
      UiSelect
    },
    data () {
      return {
        ordenation: null,
        ordenations: [
          {
            label: 'Mais vendidos',
            value: (a, b) => {
              return (a.sellings < b.sellings) ? 1 : (a.sellings === b.sellings) ? 0 : -1
            }
          },
          {
            label: 'Menor preço',
            value: (a, b) => {
              return (a.price > b.price) ? 1 : (a.price === b.price) ? 0 : -1
            }
          },
          {
            label: 'Maior preço',
            value: (a, b) => {
              return (a.price < b.price) ? 1 : (a.price === b.price) ? 0 : -1
            }
          }
        ]
      }
    },
    computed: {
      filtredProducts () {
        if (this.ordenation) {
          return this.products.sort(this.ordenation.value)
        }
        return this.products
      }
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
  .shelf-products-move
    transition: transform 1s ease

  .product-shelf
    width: 100%
    margin-top: 25px

    & > .separator
      height: 1px
      background-color: #999 + 75%
      margin-bottom: 20px

    @media screen and (min-width: 1280px)
      width: 1280px

  .product-shelf-filters
    display: flex
    flex-direction: row

    & > .product-shelf-filter
      margin-right: 20px
      margin-left: auto

  .product-shelf-filter
    display: flex
    align-items: center

    & > .label
      margin-right: 10px
    
    & > .input
      font-weight: 400

  .product-shelf-products
    display: flex
    flex-direction: row
    justify-content: space-around
</style>
