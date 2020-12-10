<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-chip class="ma-2" color="primary" outlined pill>
          Cart
          <v-icon right> mdi-cart-outline </v-icon>
        </v-chip>
        <v-data-table
          :headers="headers"
          :items="cart"
        />
        <v-chip class="ma-2" color="primary" outlined pill>
          Total: {{ total }} MMK
          <v-icon right> mdi-dollar-outline </v-icon>
        </v-chip>
      </v-col>
      <v-col cols="3">
        <v-chip class="ma-2" color="primary" outlined pill>
          Delivery Information
          <v-icon right> mdi-account-outline </v-icon>
        </v-chip>
        <v-form>
          <v-text-field
            placeholder="Name"
            v-model="name"
            outlined
          />
          <v-text-field
            placeholder="Phone"
            v-model="phone"
            outlined
          />
          <v-text-field
            placeholder="Email"
            v-model="email"
            outlined
          />
          <v-textarea
            placeholder="Delivery Address"
            v-model="deliveryAddress"
            outlined
          />
          <v-textarea
            placeholder="Billing Address"
            v-model="billingAddress"
            outlined
          />
          <v-btn
            @click="checkout"
            color="primary"
            large
          >
            Checkout
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
    name: '',
    phone: '',
    email: '',
    deliveryAddress: '',
    billingAddress: '',
  }),

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.amount, 0);
    },
  },

  methods: {
    async checkout() {
      console.log('checkout');
    },
  },
};
</script>
