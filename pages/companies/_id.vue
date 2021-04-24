<template>
  <div class="container d-flex flex-column">
    <div v-if="isFetchingData" style="height: 810px;">fetching data</div>
    <CCompanyList
      v-else-if="!isFetchingData && companies.length"
      :companyList="companies"
    />
    <CPagination path="companies" :is-last-page="companies.length < 10" />
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
  mounted() {
    this.$store.dispatch("getCompanies", {
      page: this.$route.params.id,
      limit: 10
    });
  }
});
</script>
