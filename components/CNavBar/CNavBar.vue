<template>
  <nav class="d-flex flex-column flex-md-row">
    <CLink exact link="/">
      Home page
    </CLink>
    <CLink link="/jobs">
      Job Offers
    </CLink>
    <CLink link="/companies">
      Companies
    </CLink>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
