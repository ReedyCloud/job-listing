const state = {
  companies: [],
  isFetchingData: false
};

const actions = {
  async getCompanies({ commit }, { page = 1 }) {
    commit("setIsFetchingData", true);
    const data = await this.$axios.get(`companies?page=${page}&limit=10`);
    commit("setIsFetchingData", false);
    const companies = data.data.items;
    commit("setCompanies", companies);
  },

  async getCompany({ commit }, { id }) {
    commit("setIsFetchingData", true);
    let data = await this.$axios.get(`companies/${id}`);
    let companies = [];
    const company = data.data;

    if (company) {
      data = await this.$axios.get(
        `companies?location_state=${company.location_state}`
      );
      companies = data.data.items;
    }
    commit("setIsFetchingData", false);
    commit("setCompanies", companies);
  }
};

const mutations = {
  setCompanies(state, companies) {
    state.companies = companies;
  },
  setIsFetchingData(state, value) {
    state.isFetchingData = value;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
