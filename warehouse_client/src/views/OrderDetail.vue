<template>
  <v-container>
    {{ order }}
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
