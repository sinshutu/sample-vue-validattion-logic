export default {
  methods: {
    validateName (name) {
      let valid = true;
      const regex = /[./]/;
      valid = !!name && name.length <= 64;
      if (regex.test(name)) {
        valid = false;
      }
      return valid;
    },
    validateEmail (email) {
      const regex = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/;
      return regex.test(email);
    },
  },
}
