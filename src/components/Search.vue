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
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-btn
              color="success"
              :loading="isLoading"
              block
              @click="onFindSummoner()"
            >
              Buscar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
  import { useAppStore } from "@/store/app";
  import { findSummoner } from "../services/RiotAPI";
  import { mapActions, mapState } from "pinia";
  export default {
    data() {
      return {
        items: ["BR", "EU"],
        search: "",
        isLoading: false,
      };
    },
    async mounted() {},
    methods: {
      ...mapActions(useAppStore, ["onAddState"]),
      async onFindSummoner() {
        this.isLoading = true;
        const body = await findSummoner(this.search);
        this.onAddState(body);
        this.isLoading = false;
      },
    },
    computed: {
      ...mapState(useAppStore, ["user"]),
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
