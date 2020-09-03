export default {
  namespaced: true,
  state: {
    error: '',
    success: '',
  },
  getters: {
    error(state) {
      setTimeout(() => {
        state.error = '';
      }, 6000);
      return state.error;
    },
    success(state) {
      setTimeout(() => {
        state.success = '';
      }, 6000);
      return state.success;
    },
  },
  mutations: {
    SET_ERROR: (state, error) => {
      state.success = '';
      state.error = error;
    },
    SET_SUCCESS: (state, success) => {
      state.error = '';
      state.success = success;
    },
    RESET_STATE: (state) => {
      state.error = '';
      state.success = '';
    },
  },
  actions: {
    setError: ({ commit }, errorMsg) => {
      commit('SET_ERROR', errorMsg);
    },
    setSuccess: ({ commit }, successMsg) => {
      commit('SET_SUCCESS', successMsg);
    },
    resetState: ({ commit }) => {
      commit('RESET_STATE');
    },
  },
};
