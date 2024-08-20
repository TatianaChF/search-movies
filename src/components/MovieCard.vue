<template>
    <h2>карточка фильма {{ movie.name }}</h2>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const route = useRoute();
const movie = moviesStore.movies.find((value) => value.name === route.params.name);

console.log(movie);

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log(newId)
  }
)
</script>