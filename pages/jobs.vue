<template>
  <div class="container">
    ofy pracy
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "listing",

  async asyncData({ $axios }) {
    const foo = await $axios.$get("jobs?page=1&limit=10");
    return { foo };
  }
});
</script>
