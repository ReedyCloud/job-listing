import Vue from "vue";
import Vuex from "vuex";
import companies from "./companies/companies";
import jobs from "./jobs/jobs";

Vue.use(Vuex);

const createStore = () =>
  new Vuex.Store({
    modules: {
      companies,
      jobs
    }
  });

export default createStore;
