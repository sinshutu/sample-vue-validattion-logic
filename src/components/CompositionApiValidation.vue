<template>
  <div>
    <h3>CompositionApiValidation</h3>

    <div>
      <label>
        <input v-model="account.name">
        <div v-if="allFormIsValid" class="error">エラー</div>
      </label>
      <label>
        <input v-model="account.email">
        <div v-if="allFormIsValid" class="error">エラー</div>
      </label>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionApi, { defineComponent } from '@vue/composition-api'
import useValidation from '@/functions/validation.js'

Vue.use(VueCompositionApi);

export default defineComponent({
  setup() {
    const validation = useValidation();

    return { validation };
  },
  data() {
    return {
      account: {
        name: "suzuki",
        email: "suzuki.naoto@teamup.jp"
      }
    }
  },
  computed: {
    allFormIsValid(){
      return this.validation.validateName(this.account.name)
        && this.validation.validateEmail(this.account.email);
    }
  }
})
</script>
