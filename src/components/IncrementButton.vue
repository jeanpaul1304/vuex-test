<template>
  <div>
    <button @click.prevent="activate">Next</button>
  </div>
</template>

<script>

export default {
  methods: {
    activate () {
      this.$store.commit('INCREMENT')
    }
  }
}
</script>

<style>
</style>