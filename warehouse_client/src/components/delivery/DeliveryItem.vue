<template>
  <v-card class="my-3">
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-subtitle>
      {{ item.phone }}
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
