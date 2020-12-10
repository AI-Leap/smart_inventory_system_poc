<template>
  <v-card class="my-3">
    <v-card-title>
      {{ item.title }}
    </v-card-title>
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
