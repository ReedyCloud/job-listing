export const state = () => ({
  companies: [],
  jobs: [],
  isFetchingData: false
});

export const getters = {};

export const actions = {
  async getCompanies({ commit }, { page = 1 }) {
    commit("setIsFetchingData", true);
    const data = await this.$axios.get(`companies?page=${page}&limit=10`);
    commit("setIsFetchingData", false);
    const companies = data.data.items;
    commit("setCompanies", companies);
  },

  async getCompany({ commit }, { id }) {
    let data = await this.$axios.get(`companies?id=${id}`);
    let companies = data.data.items;
    const company = companies.filter(company => company.id === id);

    if (company.length) {
      data = await this.$axios.get(
        `companies?&location_state=${company[0].location_state}`
      );
    }
    companies = data.data.items;
    commit("setCompanies", companies);
  },

  async getJobs(context, page) {
    const data = await this.$axios.get(`jobs?page=${page}&limit=10`);
    const jobs = data.data.items;
    context.commit("setJobs", jobs);
  }
};

export const mutations = {
  setCompanies(state, companies) {
    state.companies = companies;
  },
  setIsFetchingData(state, value) {
    state.isFetchingData = value;
  },
  setJobs(state, jobs) {
    state.jobs = jobs;
  }
};
