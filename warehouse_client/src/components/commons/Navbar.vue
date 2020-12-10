<template>
  <v-container>
    <v-btn @click="goto('/inventories')" text>
      <span class="mr-2">Inventories</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn @click="goto('/orders')" text>
      <span class="mr-2">Orders</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn @click="goto('/delivery')" text>
      <span class="mr-2">Delivery</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn @click="goto('/ai')" text>
      <span class="mr-2">AI assisted</span>
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
