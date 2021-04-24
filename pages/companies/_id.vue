<template>
  <div class="container d-flex flex-column">
    <CCompanyList :companyList="companies" />
    <CPagination
      path="companies"
      :is-last-page="companies.length < searchResultsLimit"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  layout: "listing",
  computed: mapState(["companies"]),
  methods: {
    ...mapActions(["getCompanies"])
  },
  data() {
    return {
      searchResultsLimit: 10
    };
  },

  mounted() {
    this.$store.dispatch("getCompanies", {
      page: this.$route.params.id,
      limit: this.searchResultsLimit
    });
  }
});
</script>
