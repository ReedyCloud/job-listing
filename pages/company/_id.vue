<template>
  <div class="container d-flex flex-column">
    <CCompanyDetailed
      v-if="selectedCompanyDetails"
      :name="selectedCompanyDetails.name"
      :location="selectedCompanyDetails.location_state"
    />
    <div v-else>css loader placeholder</div>
    <div>
      <CCompanyList
        v-if="filteredCompanies.length"
        :company-list="filteredCompanies"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/types/company.types";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      companies: (state: any): Company[] => state.companies.companies
    }),
    selectedCompanyDetails(): Company {
      let companies = [...this.companies];
      companies = companies.filter(
        company => company.id === this.$route.params.id
      );
      return companies?.[0];
    },
    filteredCompanies(): Company[] | boolean {
      return this.companies.filter(
        (company: any): Company[] | boolean =>
          company.id !== this.$route.params.id
      );
    }
  },
  mounted() {
    if (!this.companies.length) {
      this.getCompany({ id: this.$route.params.id });
    }
  },
  methods: {
    ...mapActions("companies", ["getCompany"])
  }
});
</script>
