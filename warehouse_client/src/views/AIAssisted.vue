<template>
  <v-container>
    <v-chip class="ma-2" color="primary" outlined pill>
      Image and Video processing proof-of-concept
      <v-icon right> mdi-account-outline </v-icon>
    </v-chip>
    <v-row>
      <v-col>
        <v-file-input outlined prepend-inner-icon="mdi-camera" v-model="image" />
      </v-col>
      <v-col>
        <v-btn large outlined color="primary" @click="upload"> Upload </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn large outlined color="success" @click="getAnalysis"> Get Analysis </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    image: null,
  }),

  methods: {
    async upload() {
      const formData = new FormData();
      formData.append('image', this.image);
      const ret = await axios.post('http://localhost:4000/api/ai', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(ret);
    },

    async getAnalysis() {
      console.log('get');
    },
  },
};
</script>
