<script setup>
import { useTheme } from "vuetify";
import { RouterView } from 'vue-router';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-container class="header">
    <h1>MOVIES</h1>
    <v-btn @click="toggleTheme">Изменить тему</v-btn>
  </v-container>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
