/**
 *  Vuex Module
 */

export const namespaced = true;

export const state = () => ({
  customers: [],
});

export const getters = {
  getCustomers(state) {
    return state.customers;
  }
};

export const mutations = {
  setCustomers(state, customers) {
    state.customers = customers;
  }
};

export const actions = {
  retrieveCustomers(vuexContext, context) {
    return this.$axios
      .get(`/customers`)
      .then(res => {
        const customers = res.data;
        vuexContext.commit("setCustomers", customers);
      })
      .catch(e => console.log("error", e));
  },
  postCustomer(vuexContext, customer) {
    return this.$axios
      .post(`/customers`, customer)
      .then(res => {
        console.log(vuexContext);
        // vuexContext.commit("setCustomers", customers);
      })
      .catch(e => console.log("error", e));
  },
  putCustomer(vuexContext, customer) {
    if (customer && customer.id) {
      return this.$axios
        .put(`/customers/${customer.id}`, customer)
        .then(res => {
          console.log(vuexContext);
          // vuexContext.commit("setCustomers", customers);
        })
        .catch(e => console.log("error", e));
    }
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
};


