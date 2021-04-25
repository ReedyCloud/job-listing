<template>
  <div class="c-link">
    <NuxtLink v-if="link" class="app-link" :to="link">
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
  margin: 10px;
}

.app-link {
  padding: 5px 10px;
  color: #000;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 15px 30px;
  }

  &::before {
    position: absolute;
    content: "";
    background-color: #000;
    width: 0;
    height: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 100%;
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
