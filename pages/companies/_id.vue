<template>
  <div class="container">
    im detailed company site

    <div>
      <div>more companies in $state:</div>
      <CCompanyList :companyList="companyList" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $axios }) {
    const data = await $axios.get(
      "companies?limit=10&location_state=Washington"
    );
    const companyList = data.data;
    return { companyList };
  }
});
</script>
