<template>
  <div>
    <h3>MixinValidation</h3>

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
import NameValidation from '@/mixins/name.js';

export default {
  mixins: [
    NameValidation
  ],
  data() {
    return {
      account: {
        name: "suzuki",
        email: "suzuki.naoto@teamup.jp"
      }
    }
  },
  computed: {
    allFormIsValid() {
      return this.validateName(this.account.name)
        && this.validateEmail(this.account.email);
    },
  }
}
</script>
