<template>
  <v-container>
    Package Tracking
    <v-chip
      v-if="orders.length === 0"
    >
      You don't have any order.
    </v-chip>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  data: () => ({
    orders: [],
  }),

  methods: {
    async getOrders() {
      const { email } = this.$store.state;
      if (email.length === 0) return;
      const url = `${process.env.VUE_APP_SERVER_URL}/api/orders/${email}`;

      const ret = await axios.get(url);
      this.orders = ret.data;
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
