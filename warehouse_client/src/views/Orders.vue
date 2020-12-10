<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="orders"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          outlined
          @click="viewOrder(item)"
          color="primary"
        >
          <v-icon
            small
            class="mr-2"
          >
            mdi-eye
          </v-icon>
          View
        </v-btn>
      </template>
    </v-data-table>
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
      {
        text: 'Actions',
        value: 'actions',
        sortable: false,
      },
    ],
  }),

  methods: {
    async getOrders() {
      const url = `${process.env.VUE_APP_SERVER_URL}/orders`;
      const ret = await axios.get(url);
      this.orders = ret.data;
    },

    viewOrder(order) {
      console.log(order);
      this.$router.push({
        name: 'order-detail',
        params: {
          order,
        },
      });
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
