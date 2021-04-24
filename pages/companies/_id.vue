<template>
  <div class="container d-flex flex-column">
    <div v-if="isFetchingData" style="height: 810px;">fetching data</div>
    <CCompanyList
      v-else-if="!isFetchingData && companies.length"
      :companyList="companies"
    />
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
  computed: mapState(["companies", "isFetchingData"]),
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
