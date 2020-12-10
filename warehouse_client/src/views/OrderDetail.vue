<template>
  <v-container>
    Order Detail
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
    {{ order.cart }}
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
};
</script>
