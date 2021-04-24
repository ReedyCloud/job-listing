<template>
  <nav>
    <button :disabled="isFirstPage" @click="navigate(false)">
      Prev
    </button>
    <button :disabled="isLastPage" @click="navigate(true)">
      Next
    </button>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    path: {
      type: String,
      required: true
    },
    isLastPage: {
      type: [Boolean, Number],
      required: true
    }
  },
  computed: {
    isFirstPage() {
      return (
        typeof this.$route.params.id === "undefined" ||
        Number(this.$route.params.id) === 1
      );
    }
  },
  methods: {
    navigate(direction: boolean): void {
      const route = this.$route;

      if (route.params.id && Number(route.params.id) > 1) {
        let currPage = Number(route.params.id);
        direction
          ? this.$router.push({ path: `/${this.path}/${++currPage}` })
          : this.$router.push({ path: `/${this.path}/${--currPage}` });
      } else if (direction) {
        this.$router.push({ path: `/${this.path}/2` });
      } else {
        this.$router.push({ params: {} });
      }
    }
  }
});
</script>

<style scoped></style>
