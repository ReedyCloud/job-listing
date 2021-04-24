<template>
  <div class="d-flex flex-column align-items-center">
    <CNavBar />
    <CSearch v-model="searchPhrase" />
    <Nuxt />
    <CFooter />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      searchPhrase: "",
      searchTimer: undefined,
      searchData: undefined
    };
  },
  watch: {
    searchPhrase: function(newPhrase: string): void {
      // this.search(newPhrase);
    }
  },
  methods: {
    // search(value: string) {
    //   clearTimeout(this.searchTimer);
    //   this.searchTimer = setTimeout(() => {
    //     this.fetchData();
    //   }, 300);
    //   console.log(value);
    // },
    // async fetchData() {
    //   const foo = await this.$axios.get(
    //     `${this.$route.path}?limit=5&search=${this.searchPhrase}`
    //   );
    // }
  }
});
</script>
