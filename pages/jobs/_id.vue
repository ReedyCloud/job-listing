<template>
  <div class="container d-flex flex-column align-items-center">
    <CJobList :jobList="jobs" />
    <CPagination path="jobs" :is-last-page="jobs.length < 10" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Job } from "@/types/job.types";
import { mapState } from "vuex";
export default Vue.extend({
  layout: "listing",
  middleware: "loadJobs",
  computed: {
    ...mapState({
      jobs: (state: any): Job[] => state.jobs.jobs
    })
  }
});
</script>
