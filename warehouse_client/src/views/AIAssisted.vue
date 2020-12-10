<template>
  <v-container>
    <v-chip class="ma-2" color="primary" outlined pill>
      Image and Video processing proof-of-concept
      <v-icon right> mdi-account-outline </v-icon>
    </v-chip>
    <v-row>
      <v-col>
        <v-file-input outlined prepend-icon="mdi-camera" v-model="image" />
      </v-col>
      <v-col>
        <v-btn
          large
          outlined
          color="primary"
          @click="upload"
        >
          Upload
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    image: null,
  }),
};
</script>
