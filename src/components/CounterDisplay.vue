<template>
  <div>
    Hello {{ other.name }} {{other.last_name}}
  </div>
</template>

<script>
import store from '../store'

let simpleObj = {
  "0":{
    "name":"Pablo",
    "last_name":"Diaz"
  },
  "1":{
    "name":"Jean",
    "last_name":"Diaz"
  },
  "2":{
    "name":"Eduardo",
    "last_name":"Diaz"
  },
  "3":{
    "name":"July",
    "last_name":"Vivanco"
  },
}
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    },
    other (){
      return simpleObj[this.$store.state.counter]
    }
  }
}
</script>
<style>
</style>