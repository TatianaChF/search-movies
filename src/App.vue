<script setup>
import { useTheme } from "vuetify";
import { RouterView, useRouter, useRoute } from 'vue-router';
import SearchMovie from "./components/SearchMovie.vue";
import { watch } from "vue";

const theme = useTheme();
const router = useRouter();
const route = useRoute();
const themeLocalStorage = localStorage.getItem("themeData");

if (themeLocalStorage) {
  theme.global.name.value = JSON.parse(themeLocalStorage);
}

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

watch(() => theme, (state) => {
  localStorage.setItem("themeData", JSON.stringify(state.name.value));
}, { deep: true }) 

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
@import "./assets/style.scss";
</style>
