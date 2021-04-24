<template>
  <div v-if="companyList">
    <CCompanySingle
      v-for="company in companyList"
      :key="company.id"
      :data="company"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Company } from "../CCompanySingle/CCompanySingle.types";
export default Vue.extend({
  props: {
    companyList: {
      type: Array as PropType<Company[]>,
      required: true
    }
  }
});
</script>

<style scoped></style>
