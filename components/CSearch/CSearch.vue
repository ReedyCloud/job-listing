<template>
  <div>
    Search foo
    <input
      type="text"
      name=""
      id=""
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
