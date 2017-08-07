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
          const response = await window.fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: {
              code: this.code
            }
          })

          this.prices = await response.json()
        } catch (error) {
          this.error = error
        }
      }
    }
  }
</script>

