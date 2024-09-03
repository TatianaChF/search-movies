<template>
  <v-card width="300">
    <p>Год</p>
    <v-slider 
      max-width="150" 
      :max="maxYear" 
      :min="minYear" 
      step="1" 
      thumb-label />
    <v-slider max-width="100"></v-slider>
    <v-slider max-width="100"></v-slider>
  </v-card>
</template>

<script setup>
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const yearsMovies = [];

for (let i = 0; i < moviesStore.movies.length; i++) {
    yearsMovies.push(moviesStore.movies[i].year);
}

const maxYear = Math.max(...yearsMovies);
const minYear = Math.min(...yearsMovies);

console.log(minYear);
</script>