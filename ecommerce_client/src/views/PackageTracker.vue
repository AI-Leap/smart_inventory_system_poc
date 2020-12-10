<template>
  <v-container>
    Package Tracking
    <v-chip
      v-if="orders.length === 0"
    >
      You don't have any order.
    </v-chip>
    <v-list
      v-else
    >
      <v-list-item
        v-for="(order, i) in orders"
        :key="i"
      >
        <v-row>
          <v-col cols="2">
            Order ID: {{ order.id }}
          </v-col>
          <v-col>
            <v-progress-linear
              :buffer-value="`${(order.delivery_status * 25) + 50}`"
              color="success"
              stream
              :value="`${(order.delivery_status * 25) + 25}`"
              height="30"
            >
              {{ getDeliveryStatus(order.delivery_status) }}
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  data: () => ({
    orders: [],
  }),

  methods: {
    getDeliveryStatus(status) {
      const statuses = ['Validated', 'Packaged', 'Couriered', 'Delivered'];
      return statuses[status];
    },

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
