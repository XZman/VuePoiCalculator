<template>
  <div id="app">
      <PoiCalculator />
  </div>
</template>

<script>
import PoiCalculator from './components/PoiCalculator.vue'

export default {
    name: 'app',
    components: {
        PoiCalculator
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
