<template>
  <v-card v-for="(item, index) in this.history" :key="index">
    {{ history.info }}
  </v-card>
</template>
<script>
  import { mapState } from "pinia";
  import { useAppStore } from "@/store/app";
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(useAppStore, ["history"]),
    },
  };
</script>
<style lang=""></style>
