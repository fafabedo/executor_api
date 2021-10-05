export const strict = false;

export const state = () => ({
  sideNav: [],
  secondarySideNav: [],
});

export const getters = {
  getSideNav(state) {
    return state.sideNav;
  },
  getSecondarySideNav(state) {
    return state.secondarySideNav;
  }
};

export const mutations = {
  setSideNav(state, items) {
    state.sideNav = items;
  }
};

export const actions = {
  nuxtServerInit({store}) {
    // console.log(store);
    // console.log('NUXT Server Init');
    // store.dispatch('data/auth/initUserAccount');
  }
};
