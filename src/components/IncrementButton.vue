<template>
  <div>
    <button @click.prevent="activate">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    activate () {
      console.log('+1 Pressed')
    }
  }
}
</script>

<style>
</style>