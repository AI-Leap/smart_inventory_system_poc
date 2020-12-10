<template>
  <v-card elevation="2" outlined shaped>
    <v-card-title> {{ item.name }} </v-card-title>
    <v-card-subtitle>{{ item.price }} MMK</v-card-subtitle>
    <v-card-text>
      <v-img contain :src="item.url" max-height="200" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis
      obcaecati consequatur, molestiae autem nostrum voluptatibus commodi
      cumque! Assumenda, iusto praesentium officia quisquam illum
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="6">
          <v-text-field type="number" outlined small placeholder="QTY" v-model="qty" />
        </v-col>
        <v-col>
          <v-btn color="success" outlined large @click="addToCart">
            Add To Cart
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    qty: 0,
  }),

  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.item.id,
        name: this.item.name,
        amount: this.item.price * this.qty,
        qty: this.qty,
      });
    },
  },
};
</script>
