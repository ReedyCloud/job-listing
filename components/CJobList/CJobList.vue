<template>
  <div v-if="jobList">
    <CJobSingle v-for="job in jobList" :id="job.id" :data="job" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Job } from "../CJobSingle/CJobsSingle.types";

export default Vue.extend({
  props: {
    jobList: {
      type: Array as PropType<Job[]>,
      required: true
    }
  }
});
</script>

<style scoped></style>
