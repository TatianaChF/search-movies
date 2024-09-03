<template>
  <v-card width="200">
    <v-container>
      <p>Год</p>
      <v-slider 
        v-model="year"
        max-width="150" 
        :max="maxYear" 
        :min="minYear" 
        step="1" 
        thumb-label />
    </v-container>
    <v-container>
      <p>Рейтинг</p>
      <v-slider 
        v-model="rating"
        max-width="150" 
        :max="maxRating" 
        :min="minRating"  
        thumb-label />
    </v-container>
    <v-container>
      <p>Хронометраж</p>
      <v-slider 
        v-model="lengthMovie"
        max-width="150" 
        :max="maxLength" 
        :min="minLength"  
        step="1" 
        thumb-label />
    </v-container>
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
