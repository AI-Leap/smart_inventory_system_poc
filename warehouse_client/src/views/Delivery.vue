<template>
  <v-container fluid>
    <v-layout align-start justify-center>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Validation </v-subheader>
          <draggable
            v-model="items"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Packaging </v-subheader>
          <draggable
            v-model="items2"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items2">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Courier Delivery </v-subheader>
          <draggable
            v-model="items3"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items3">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Delivered </v-subheader>
          <draggable
            v-model="items4"
            :options="{ group: 'people' }"
            style="min-height: 10px"
          >
            <template v-for="(item, i) in items4">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';
import DeliveryItem from '@/components/delivery/DeliveryItem.vue';

export default {
  components: {
    draggable,
    DeliveryItem,
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
          title: 'Summer BBQ',
          subtitle: 'Subtitle 5',
        },
      ],
      items3: [],
      items4: [],
    };
  },
};
</script>
