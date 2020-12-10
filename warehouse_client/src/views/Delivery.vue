<template>
  <v-container fluid>
    <v-layout align-start justify-center>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> FIRST LIST </v-subheader>
          <draggable
            v-model="items"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items">
              <label :key="i">{{ item }}</label>
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> SECOND LIST </v-subheader>
          <draggable
            v-model="items2"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items2">
              <label :key="i">{{ item }}</label>
            </template>
          </draggable>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg',
          title: 'Brunch this life?',
          subtitle: 'Subtitle 1',
        },
        {
          id: 2,
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg',
          title: 'Winter Lunch',
          subtitle: 'Subtitle 2',
        },
        {
          id: 3,
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: 'Subtitle 3',
        },
      ],
      items2: [
        {
          id: 4,
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/4.jpg',
          title: 'Brunch this weekend?',
          subtitle: 'Subtitle 4',
        },
        {
          id: 5,
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/5.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: 'Subtitle 5',
        },
      ],
    };
  },
};
</script>
