import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increN(state, args) {
      state.count += args.amount;
    }
  },
  actions: {
    add(context) {
      context.commit('increment');
    }
  }
};
