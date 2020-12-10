<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="orders"
    />
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    orders: [],
    headers: [
      {
        text: 'Order ID',
        value: 'id',
      },
      {
        text: 'Name',
        value: 'name',
      },
      {
        text: 'Phone',
        value: 'phone',
      },
      {
        text: 'Email',
        value: 'email',
      },
      {
        text: 'Delivery Address',
        value: 'delivery_address',
      },
      {
        text: 'Billing Address',
        value: 'billing_address',
      },
    ],
  }),

  methods: {
    async getOrders() {
      const url = `${process.env.VUE_APP_SERVER_URL}/orders`;
      const ret = await axios.get(url);
      this.orders = ret.data;
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
