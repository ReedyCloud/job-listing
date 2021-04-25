<template>
  <NuxtLink :to="`/job/${data.id}`" class="job">
    <div>Company name: {{ data.company }}</div>
    <div>Job title: {{ data.title }}</div>
    <div>Job description: {{ data.description }}</div>
    <div>Department: {{ data.department }}</div>
    <div>Location: {{ location }}</div>
    <div>Salary: {{ salary }}</div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Job } from "@/types/job.types";
export default Vue.extend({
  computed: {
    salary(): string {
      return this.data.salary + this.data.salary_currency;
    },
    location(): string {
      return this.data.location + ", " + this.data.location_state;
    }
  },
  props: {
    data: {
      type: Object as PropType<Job>,
      required: true
    }
  }
});
</script>
<style lang="scss" scoped>
.job {
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
