<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-chip class="ma-2" color="primary" outlined pill>
          Order Items
          <v-icon right> mdi-cart-outline </v-icon>
        </v-chip>
        <v-data-table
          :headers="headers"
          :items="JSON.parse(order.cart)"
        />
        <v-chip class="ma-2" color="primary" outlined pill>
          Total: {{ total }} MMK
          <v-icon right> mdi-dollar-outline </v-icon>
        </v-chip>
      </v-col>
      <v-col>
        <v-form class="mt-5">
          <v-text-field
            readonly
            v-model="order.name"
            outlined
            label="Name"
          />
          <v-text-field
            readonly
            v-model="order.phone"
            outlined
            label="Phone"
          />
          <v-text-field
            readonly
            v-model="order.email"
            outlined
            label="Email"
          />
          <v-textarea
            readonly
            v-model="order.delivery_address"
            outlined
            label="Delivery Address"
          />
          <v-textarea
            readonly
            v-model="order.billing_address"
            outlined
            label="Billing Address"
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    total() {
      return JSON.parse(this.order.cart).reduce((acc, cur) => acc + cur.amount, 0);
    },
  },

  data: () => ({
    headers: [
      {
        text: 'Item',
        value: 'name',
      },
      {
        text: 'QTY',
        value: 'qty',
      },
      {
        text: 'Amount',
        value: 'amount',
      },
    ],
  }),
};
</script>
