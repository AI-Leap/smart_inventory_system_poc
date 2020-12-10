<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(item, i) in inventory" :key="i">
        <v-card :key="i" elevation="2" outlined shaped>
          <v-card-title> {{ item.name }} </v-card-title>
          <v-card-text>
            <v-img
              contain
              :src="item.url"
              max-height="200"
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officiis obcaecati consequatur, molestiae autem nostrum voluptatibus
            commodi cumque! Assumenda, iusto praesentium officia quisquam illum
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  outlined
                  small
                  placeholder="QTY"
                />
              </v-col>
              <v-col>
                <v-btn color="success" outlined large @click="addToCart(i)"> Add To Cart </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    addToCart(itemId) {
      this.$store.dispatch('addToCart', itemId);
    },
  },

  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
  },
};
</script>
