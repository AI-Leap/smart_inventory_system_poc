<template>
  <v-card class="my-3">
    <v-card-title>
      Order ID: {{ item.id }}
    </v-card-title>
    <v-card-subtitle>
      {{ item.name }}, {{ item.phone }}
    </v-card-subtitle>
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
};
</script>
