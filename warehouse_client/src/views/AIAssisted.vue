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
      <v-img
        v-if="imageUrl.length > 0"
        :src="imageUrl"
        max-width="500"
      />
      <video v-if="videoUrl" width="500" controls>
        <source :src="videoUrl" type="video/mp4">
      </video>
    </v-row>
    <v-row>
      <v-col>
        <v-btn large outlined color="success" :loading=isGetting @click="getAnalysis">
          Get Analysis
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="results"
      />
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
    results: [],
    headers: [
      {
        text: 'Label',
        value: 'label',
      },
      {
        text: 'Confidence',
        value: 'confidence',
      },
      {
        text: 'Timestamp',
        value: 'timestamp',
      },
    ],
    imageUrl: '',
    videoUrl: '',
  }),

  methods: {
    async upload() {
      this.isUploading = true;
      const formData = new FormData();
      formData.append('image', this.image);

      const fileType = this.image.type.split('/')[0];
      const url = `${process.env.VUE_APP_SERVER_URL}/ai/${fileType}s`;

      const ret = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (ret) {
        this.isUploading = false;
        if (fileType === 'image') {
          this.imageUrl = ret.data.url;
        } else {
          this.videoUrl = ret.data.url;
        }
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
        this.results = ret.data;
      }
    },
  },
};
</script>
