<template>
  <v-container>
    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-btn @click="goto('/ai')" text>
      <span class="mr-2">AI assisted</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    goto(route) {
      this.$router.push(route);
    },
  },
};
</script>
