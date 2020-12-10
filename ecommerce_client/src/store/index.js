import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
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
