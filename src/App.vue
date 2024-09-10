<script setup>
import { useTheme } from "vuetify";
import { RouterView, useRouter, useRoute } from 'vue-router';
import SearchMovie from "./components/SearchMovie.vue";

const theme = useTheme();
const router = useRouter();
const route = useRoute();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

</script>

<template>
  <v-container class="header">
    <h1 @click="router.push({name: 'Home'})">MOVIES</h1>
    <search-movie />
    <v-btn @click="router.push({name: 'Bookmarks'})">закладки</v-btn>
    <v-btn @click="toggleTheme">Изменить тему</v-btn>
  </v-container>
  <RouterView :key="route.params.name" />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
