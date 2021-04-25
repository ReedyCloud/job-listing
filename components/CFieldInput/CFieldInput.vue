<template>
  <div class="field-input d-flex justify-content-between w-100 mb-3">
    <label class="field-input__label" v-if="label" :for="id">{{ label }}</label>
    <input
      class="field-input__input"
      v-bind="$attrs"
      :type="inputType"
      :id="id"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    }
  }
});
</script>

<style scoped></style>
