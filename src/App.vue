<template>
  <div id="app">
    <div class="container">
      <MixinValidation class="sample" />
      <CompositionApiValidation class="sample" />
    </div>
  </div>
</template>

<script>
import MixinValidation from './components/MixinValidation.vue'
import CompositionApiValidation from './components/CompositionApiValidation.vue'

export default {
  components: {
    MixinValidation,
    CompositionApiValidation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.container {
  display: flex;
}
.sample {
  width: 50%;
}
.error {
  color: red;
}
</style>
