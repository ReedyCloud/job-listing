const state = {
  jobs: [],
  isFetchingData: false
};
const actions = {
  async getJobs({ commit }, page = 1) {
    const data = await this.$axios.get(`jobs?page=${page}&limit=10`);
    const jobs = data.data.items;
    commit("setJobs", jobs);
  },
  async getJob({ commit }, id) {
    let data = await this.$axios.get(`jobs/${id}`);
    let jobs = [];
    const job = data.data;

    if (job) {
      data = await this.$axios.get(`jobs?location_state=${job.location_state}`);
      jobs = data.data.items;
    }
    commit("setJobs", jobs);
  }
};

const mutations = {
  setJobs(state, jobs) {
    state.jobs = jobs;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
