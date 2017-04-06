<template>
  <div>
    <button @click.prevent="activate">Prev</button>
  </div>
</template>

<script>

export default {
  methods: {
    activate () {
      let vari = this.$store.commit('DECREASE')
      console.log(vari)
    }
  }
}
</script>

<style>
</style>