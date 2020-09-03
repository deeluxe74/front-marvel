import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import favorites from './favorites';
import message from './message';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['favorites'],
    })],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    favorites,
    message,
  },
});
