<template>
  <v-container>
    <v-btn
      @click="goto('item')"
      text
    >
      <span class="mr-2">Item</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn
      @click="goto('order')"
      text
    >
      <span class="mr-2">Order</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn
      @click="goto('checkout')"
      text
    >
      <span class="mr-2">Cart</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn
      @click="goto('package')"
      text
    >
      <span class="mr-2">Package</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    goto(route) {
      this.$router.push(route);
    },
  },
};
</script>
