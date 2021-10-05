/**
 *  Vuex Module
 */

export const namespaced = true;
export const state = () => ({
  // DEMO DATA
  // This should be loaded from an API
  estimates: [],
  estimate: {}
});

export const getters = {
  getEstimates() {
    return state.estimates;
  },
  getEstimate() {
    return state.estimate;
  }
};
export const mutations = {
  setEstimates(state, estimates) {
    state.estimates = estimates;
  },
};

export const actions = {
  retrieveEstimates(vuexContext) {
    return this.$axios.get(`/estimates`)
      .then(res => {
        const estimates = res.data;
        vuexContext.commit("setEstimates", estimates);
      })
      .catch(e => console.log("error", e));
  }
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
};
