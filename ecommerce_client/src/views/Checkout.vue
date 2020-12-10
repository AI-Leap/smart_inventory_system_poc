<template>
  <v-container>
    Checkout
    {{ cart }}
  </v-container>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
