const state = {
  jobs: [],
  isFetchingData: false
};
const actions = {
  async getJobs(context, page) {
    const data = await this.$axios.get(`jobs?page=${page}&limit=10`);
    const jobs = data.data.items;
    context.commit("setJobs", jobs);
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
