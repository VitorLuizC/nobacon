<template>
  <div class="entry-container">
    <label v-if="label" class="label">{{ label }}</label>
    <slot v-if="$slots.default" />
    <input
      class="entry"
      v-else
      :value="value"
      @input="event => $emit('input', event.target.value)" />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
  export default {
    props: ['value', 'label', 'error']
  }
</script>

<style lang="stylus">
  $entry-border = #000

  $entry
    display: block
    border: 3px solid $entry-border
    border-radius: 5px

  .entry-container
    > .entry
      @extends $entry

  .entry-group
    > .entry
      @extends $entry
</style>
