<template>
  <ul v-if="prices.length > 0">
    <li v-for="price in prices" :key="price.code">
      {{ price }}
    </li>
  </ul>
  <form v-else class="freight-form" @submit.prevent="calc()">
    <entry v-model="code" type="text" :error="error" />
    <action type="submit">Calcular o Frete</action>
  </form>
</template>

<script>
  import { VueMaskDirective as mask } from 'v-mask'
  import Entry from '@components/Entry'
  import Action from '@components/Action'
  import axios from 'axios'

  export default {
    components: {
      Action,
      Entry
    },
    data () {
      return {
        prices: [],
        code: '',
        error: ''
      }
    },
    directives: { mask },
    methods: {
      async calc () {
        const url = 'https://us-central1-nobacon-227bb.cloudfunctions.net/freight'
        try {
          const { data: prices } = await axios.post(url, {
            code: this.code
          })

          this.prices = prices
        } catch (error) {
          this.error = typeof error === 'string' ? error : error.message
        }
      }
    }
  }
</script>

