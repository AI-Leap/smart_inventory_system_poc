<template>
  <v-container>
    <v-chip class="ma-2" color="primary" outlined pill>
      Image and Video processing proof-of-concept
      <v-icon right> mdi-account-outline </v-icon>
    </v-chip>
    <v-row>
      <v-col>
        <v-file-input
          outlined
          prepend-inner-icon="mdi-camera"
          v-model="image"
        />
      </v-col>
      <v-col>
        <v-btn large outlined color="primary" @click="upload" :loading=isUploading> Upload </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn large outlined color="success" :loading=isGetting @click="getAnalysis">
          Get Analysis
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    image: null,
    isUploading: false,
    isGetting: false,
  }),

  methods: {
    async upload() {
      this.isUploading = true;
      const formData = new FormData();
      formData.append('image', this.image);

      const url = this.image.type.includes('image')
        ? 'http://localhost:4000/api/ai/images'
        : 'http://localhost:4000/api/ai/videos';

      const ret = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (ret) {
        this.isUploading = false;
      }
    },

    async getAnalysis() {
      this.isGetting = true;
      const fileKey = this.image.name.replace(' ', '_');
      const fileType = this.image.type.includes('image') ? 'images' : 'videos';
      const url = `${process.env.VUE_APP_SERVER_URL}/ai/${fileType}/${fileKey}`;

      const ret = await axios.get(url);

      if (ret) {
        this.isGetting = false;
        console.log(ret);
      }
    },
  },
};
</script>
