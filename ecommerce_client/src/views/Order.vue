<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="(item, i) in inventory" :key="i">
        <ItemCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemCard from '@/components/orders/ItemCard.vue';

export default {
  components: {
    ItemCard,
  },

  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
  },
};
</script>
