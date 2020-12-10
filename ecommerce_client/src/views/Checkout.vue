<template>
  <v-container>
    Checkout
    {{ orders }}
  </v-container>
</template>

<script>
import EventBus from '@/utils/event';

export default {
  data: () => ({
    orders: [],
  }),

  mounted() {
    EventBus.$on('add-item', (item) => console.log(item));
  },
};
</script>
