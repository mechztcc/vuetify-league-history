<template>
  <div class="header">
    <img class="img" src="@/assets/header.jpg" alt="" />
    <div class="search bg-primary rounded-lg">
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="search"
              name="name"
              label="Search by Summoner"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn color="success" @click="onFindSummoner()">Buscar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
  import { findSummoner } from "../services/RiotAPI";
  export default {
    data() {
      return {
        items: ["BR", "EU"],
        search: "",
      };
    },
    async mounted() {},
    methods: {
      onFindSummoner() {
        findSummoner(this.search);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .header {
    position: relative;

    .search {
      display: flex;
      position: absolute;
      bottom: 0;
      width: 70%;
      margin-left: 15%;
    }
  }
  .img {
    width: 100vw;
    height: 70vh;
  }
</style>
