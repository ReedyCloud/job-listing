<template>
  <div class="container">
    <CJobList :jobList="jobs" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  layout: "listing",
  middleware: "loadJobs",
  computed: {
    ...mapState(["jobs"])
  }
});
</script>
