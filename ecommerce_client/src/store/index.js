import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],

    inventory: [
      {
        id: 0,
        name: 'PAWN KILLER PLUS 360SL  1LT',
        price: 3600,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/PaungKiller.png',
      },
      {
        id: 1,
        name: 'PAWN KILLER PLUS 360SL 4LT',
        price: 3600 * 4,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/PaungKiller.png',
      },
      {
        id: 2,
        name: 'ZAUNG HTET 40WP 80GM',
        price: 4800,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/ZaungHtet.png',
      },
      {
        id: 3,
        name: 'HGNET KYI TAUNG 18SC 13CC',
        price: 850,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/HgnetTaung.png',
      },
      {
        id: 4,
        name: 'HGNET KYI TAUNG 18SC 100CC',
        price: 4200,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/HgnetTaung.png',
      },
      {
        id: 5,
        name: 'HGNET KYI TAUNG 18SC 250CC',
        price: 6800,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/HgnetTaung.png',
      },
      {
        id: 6,
        name: 'HGNET KYI TAUNG 18SC 500CC',
        price: 9900,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/HgnetTaung.png',
      },
      {
        id: 7,
        name: 'ALARM 15EC 100CC',
        price: 3700,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/Alarm.png',
      },
      {
        id: 8,
        name: 'FOR ONE 100CC',
        price: 2700,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/ForOne.png',
      },
      {
        id: 9,
        name: 'FOR ONE 250CC',
        price: 5800,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/ForOne.png',
      },
      {
        id: 10,
        name: 'FOR ONE 500CC',
        price: 8800,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/ForOne.png',
      },
      {
        id: 11,
        name: 'FOR ONE 1LITER',
        price: 13000,
        url: 'https://awba-other-images.s3-ap-southeast-1.amazonaws.com/ForOne.png',
      },
    ],
  },
  mutations: {
    addToCart: (state, item) => {
      state.cart.push(item);
    },
  },
  actions: {
    addToCart: ({ commit }, item) => {
      commit('addToCart', item);
    },
  },
  modules: {
  },
});
