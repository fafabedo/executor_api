export const strict = false;

export const state = () => ({
  workspaces: [],
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
        console.log(workspaces);
        vuexContext.commit("setWorkspaces", workspaces);
      })
      .catch(e => console.log("error", e));
  }
};
