<template>
  <v-app>
    <Navbar />
    <Search />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Search from "./components/Search.vue";

export default {
  components: {
    Navbar,
    Search,
  },
};
</script>
