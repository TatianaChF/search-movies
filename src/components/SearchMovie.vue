<template>
  <v-responsive max-width="700">
    <v-text-field
      label="Найти фильм"
      append-inner-icon="mdi-magnify"
      variant="underlined"
      v-model="searchValue"
    />
  </v-responsive>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMoviesStore } from "../store/movies";

let searchValue = ref("");
const moviesStore = useMoviesStore()

watch(searchValue, () => {
    moviesStore.searchMovie(searchValue.value)
})
</script>
