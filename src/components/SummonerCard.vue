<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="pa-3" color="primary">
          <h1>{{ user.name }}</h1>
          <div class="d-flex align-center">
            <v-icon>mdi-arrow-up-bold-hexagon-outline</v-icon>
            <span>{{ user.summonerLevel }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { useAppStore } from "@/store/app";
  import { mapState } from "pinia";
  export default {
    data() {
      return {
        store: useAppStore(),
      };
    },
    computed: {
      ...mapState(useAppStore, ["user"]),
    },
  };
</script>
<style lang="scss"></style>
