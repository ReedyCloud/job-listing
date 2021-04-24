<template>
  <NuxtLink :to="`companies/${data.id}`" class="company">
    <span v-if="data.name">Company name: {{ data.name }}</span>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Company } from "./CCompanySingle.types";
export default Vue.extend({
  props: {
    data: {
      type: Object as PropType<Company>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.company {
  display: block;
  padding: 20px 40px;
  border: 1px solid #aaa;
  cursor: pointer;
  margin-bottom: 15px;
  transition: box-shadow 100ms ease-in-out;
  color: black;

  &:hover {
    text-decoration: none;
    box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.493);
  }
}
</style>
