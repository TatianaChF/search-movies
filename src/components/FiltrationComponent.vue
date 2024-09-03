<template>
  <v-card width="300">
    <p>Год</p>
    <v-slider 
      v-model="year"
      max-width="150" 
      :max="maxYear" 
      :min="minYear" 
      step="1" 
      thumb-label />
    <p>Рейтинг</p>
    <v-slider 
      v-model="rating"
      max-width="150" 
      :max="maxRating" 
      :min="minRating"  
      thumb-label />
    <v-slider max-width="100"></v-slider>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const yearsMovies = [];
const ratingsMovies = [];

for (let i = 0; i < moviesStore.movies.length; i++) {
    yearsMovies.push(moviesStore.movies[i].year);
    ratingsMovies.push(moviesStore.movies[i].rating.kp);
}

const maxYear = Math.max(...yearsMovies);
const minYear = Math.min(...yearsMovies);
const year = ref(maxYear);
const maxRating = Math.max(...ratingsMovies);
const minRating = Math.min(...ratingsMovies);
const rating = ref(maxRating);

console.log(rating);
</script>