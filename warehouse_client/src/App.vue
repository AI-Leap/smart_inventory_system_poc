<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <Navbar />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/commons/Navbar.vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
