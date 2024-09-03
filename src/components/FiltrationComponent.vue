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
    <p>Хронометраж</p>
    <v-slider 
      v-model="lengthMovie"
      max-width="150" 
      :max="maxLength" 
      :min="minLength"  
      step="1" 
      thumb-label />
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const yearsMovies = [];
const ratingsMovies = [];
const lengthsMovies = [];

for (let i = 0; i < moviesStore.movies.length; i++) {
    yearsMovies.push(moviesStore.movies[i].year);
    ratingsMovies.push(moviesStore.movies[i].rating.kp);
    lengthsMovies.push(moviesStore.movies[i].movieLength);
}

const maxYear = Math.max(...yearsMovies);
const minYear = Math.min(...yearsMovies);
const year = ref(maxYear);
const maxRating = Math.max(...ratingsMovies);
const minRating = Math.min(...ratingsMovies);
const rating = ref(maxRating);
const maxLength = Math.max(...lengthsMovies);
const minLength = Math.min(...lengthsMovies);
const lengthMovie = ref(maxLength);

console.log(minLength);
</script>