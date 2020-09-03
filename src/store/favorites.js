export default {
  namespaced: true,
  state: {
    favorites: [],
  },
  getters: {
    favorites(state) {
      return state.favorites;
    },
  },
  mutations: {
    SET_FAVORITES(state, payload) {
      state.favorites.push(payload);
    },
    DELETE_FAVORITES(state, payload) {
      state.favorites.splice(payload, 1);
    },
  },
  actions: {
    updateFavorite({ commit, state, dispatch }, id) {
      let fund = 0;
      state.favorites.forEach((element, index) => {
        if (element === id) {
          fund = 1;
          dispatch('message/setSuccess', 'You took this heros out of your favorites.', { root: true });
          commit('DELETE_FAVORITES', index);
        }
      });
      if (!fund) {
        commit('SET_FAVORITES', id);
        dispatch('message/setSuccess', 'You took this hero in your favorites.', { root: true });
      }
    },
  },
};
