<template>
  <div class="c-link">
    <NuxtLink class="app-link" :to="link">
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss">
.c-link {
  padding: 15px 30px;
}

.app-link {
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    position: absolute;
    content: "";
    background-color: #000;
    width: 0;
    height: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: calc(100% + 10px);
    transition: width 150ms ease-in-out;
  }

  &:hover,
  &--exact {
    text-decoration: none;
    color: #000;

    &::before {
      width: 100%;
    }
  }
}
</style>
