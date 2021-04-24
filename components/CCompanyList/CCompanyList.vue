<template>
  <div v-if="companyList">
    <CCompanySingle
      v-for="company in companyList.items"
      :key="company.id"
      :data="company"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { CompanyList } from "./CCompanyList.types";
export default Vue.extend({
  props: {
    companyList: {
      type: Object as PropType<CompanyList>,
      required: true
    }
  }
});
</script>

<style scoped></style>
