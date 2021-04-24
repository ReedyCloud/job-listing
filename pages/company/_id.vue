<template>
  <div class="container d-flex flex-column">
    <CCompanyDetailed
      v-if="companyDetails"
      :name="companyDetails.name"
      :location="companyDetails.location_state"
    />
    <div v-else>css loader placeholder</div>
    <div>
      <CCompanyList v-if="companies.length" :company-list="companies" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState(["companies"]),
    companyDetails() {
      let companies = [...this.companies];
      companies = companies.filter(
        company => company.id === this.$route.params.id
      );
      return companies && companies[0];
    },
    mounted() {
      if (!this.companies.length) {
        this.$store.dispatch("getCompany", {
          id: this.$route.params.id
        });
      }
    }
  }
});
</script>
