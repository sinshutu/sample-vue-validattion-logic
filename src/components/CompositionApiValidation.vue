<template>
  <div>
    <h3>CompositionApiValidation</h3>

    <div>
      <lebel>
        <input v-model="userName">
        <div class="error">{{ validatonMessages }}</div>
      </lebel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "suzuki"
    }
  },
  computed: {
    validatonMessages(){
      return "エラー";
    }
  }
}
</script>
