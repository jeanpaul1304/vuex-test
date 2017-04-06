<template>
  <div id="app">
    <decrease></decrease>
    <increment></increment>
    <h3>Family <3 </h3>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/CounterDisplay.vue'
import Increment from './components/IncrementButton.vue'
import Decrease from './components/DecreaseButton.vue'
import store from './store'

export default {
  store,
  components: {
    Counter,
    Increment,
    Decrease
  }
}
</script>

<style>
</style>