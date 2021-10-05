/**
 *  Vuex Module
 */

export const namespaced = true;

export const state = () => ({
  workspaces: []
});

export const getters = {
  getWorkspaces(state) {
    return state.workspaces;
  }
};

export const mutations = {
  setWorkspaces(state, workspaces) {
    state.workspaces = workspaces;
  }
};

export const actions = {
  retrieveWorkspaces(vuexContext, context) {
    return this.$axios
      .get(`/workspaces`)
      .then(res => {
        const workspaces = res.data;
        vuexContext.commit("setWorkspaces", workspaces);
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


