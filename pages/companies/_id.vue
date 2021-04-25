<template>
  <div class="container d-flex flex-column">
    <CLoader v-if="isFetchingData" />
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
import { Company } from "@/types/company.types";

export default Vue.extend({
  computed: {
    ...mapState({
      companies: (state: any): Company[] => state.companies.companies,
      isFetchingData: (state: any): boolean => state.companies.isFetchingData
    })
  },
  methods: {
    ...mapActions("companies", ["getCompanies"])
  },
  mounted() {
    this.getCompanies({ page: this.$route.params.id, limit: 10 });
  }
});
</script>
