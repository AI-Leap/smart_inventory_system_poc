<template>
  <v-container fluid>
    <v-layout align-start justify-center>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Validation ({{ items.length }}) </v-subheader>
          <draggable
            v-model="items"
            :options="{ group: 'people' }"
            style="min-height: 10px"
            @change="log"
          >
            <template v-for="(item, i) in items">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Packaging ({{ items2.length }}) </v-subheader>
          <draggable
            v-model="items2"
            :options="{ group: 'people' }"
            style="min-height: 10px"
            @change="log"
          >
            <template v-for="(item, i) in items2">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Courier Delivery ({{ items3.length }}) </v-subheader>
          <draggable
            v-model="items3"
            :options="{ group: 'people' }"
            style="min-height: 10px"
            @change="log"
          >
            <template v-for="(item, i) in items3">
              <DeliveryItem :key="i" :item="item" />
            </template>
          </draggable>
        </v-list>
      </v-flex>
      <v-flex xs4 class="elevation-1 pa-3 ma-2">
        <v-list two-line>
          <v-subheader> Delivered ({{ items4.length }}) </v-subheader>
          <draggable
            v-model="items4"
            :options="{ group: 'people' }"
            style="min-height: 10px"
            @change="log"
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
import axios from 'axios';
import DeliveryItem from '@/components/delivery/DeliveryItem.vue';

export default {
  components: {
    draggable,
    DeliveryItem,
  },

  data() {
    return {
      orders: [],
      items: [],
      items2: [],
      items3: [],
      items4: [],
    };
  },

  methods: {
    async getOrders() {
      console.log('getting orders');
      const url = `${process.env.VUE_APP_SERVER_URL}/orders`;
      const ret = await axios.get(url);
      console.log(ret);
      this.orders = ret.data;

      this.items = this.orders.filter((e) => e.delivery_status === 0);
      this.items2 = this.orders.filter((e) => e.delivery_status === 1);
      this.items3 = this.orders.filter((e) => e.delivery_status === 2);
      this.items4 = this.orders.filter((e) => e.delivery_status === 3);
    },

    viewOrder(order) {
      console.log(order);
      this.$router.push({
        name: 'order-detail',
        params: {
          order,
        },
      });
    },

    log(event) {
      if (event.added == null) return;
      const { id } = event.added.element;
      let found = this.items.find((e) => e.id === id);
      // let status = 0;
      if (found != null) {
        const status = 0;
        console.log({ id, status });
        return;
      }

      console.log('searching 2');
      found = this.items2.find((e) => e.id === id);
      if (found != null) {
        const status = 1;
        console.log({ id, status });
        return;
      }

      console.log('searching 3');
      found = this.items3.find((e) => e.id === id);
      if (found != null) {
        const status = 2;
        console.log({ id, status });
        return;
      }

      console.log('searching 4');
      found = this.items4.find((e) => e.id === id);
      if (found != null) {
        const status = 3;
        console.log({ id, status });
      }
    },
  },

  mounted() {
    this.getOrders();
  },
};
</script>
