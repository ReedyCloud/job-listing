<template>
  <div class="single-company d-flex flex-column">
    <div>Name: {{ name }}</div>
    <div>Location {{ location }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.single-company {
  padding: 20px 40px;
  border: 2px black solid;

  margin-bottom: 30px;
}
</style>
