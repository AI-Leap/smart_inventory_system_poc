<template>
  <v-container>{{ orders }}</v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    orders: [],
  }),

  methods: {
    async getOrders() {
      const url = `${process.env.VUE_APP_SERVER_URL}/orders`;
      this.orders = await axios.get(url);
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
