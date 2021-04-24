<template>
  <div class="container">
    <CCompanyList :companyList="foo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "listing",
  async asyncData({ $axios }) {
    const foo = await $axios.$get("companies?page=1&limit=10");
    return { foo };
  }
});
</script>
