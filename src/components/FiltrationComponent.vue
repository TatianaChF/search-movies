<template>
  <v-card width="400">
    <v-container>
      <p>Год</p>
      <v-slider 
        v-model="year"
        max-width="300" 
        :max="maxYear" 
        :min="minYear" 
        step="1" 
        thumb-label>
          <template v-slot:append>
            <v-text-field 
              v-model="year"
              density="compact"
              style="width: 90px"
              type="number"
              hide-details
              single-line />
          </template>
        </v-slider>
    </v-container>
    <v-container>
      <p>Рейтинг</p>
      <v-slider 
        v-model="rating"
        max-width="300" 
        :max="maxRating" 
        :min="minRating"  
        thumb-label>
          <template v-slot:append>
            <v-text-field 
              v-model="rating"
              density="compact"
              style="width: 90px"
              type="number"
              hide-details
              single-line />
          </template>
        </v-slider>
    </v-container>
    <v-container>
      <p>Хронометраж</p>
      <v-slider 
        v-model="lengthMovie"
        max-width="300" 
        :max="maxLength" 
        :min="minLength"  
        step="1" 
        thumb-label>
          <template v-slot:append>
            <v-text-field 
              v-model="lengthMovie"
              density="compact"
              style="width: 90px"
              type="number"
              hide-details
              single-line />
          </template>
        </v-slider>
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
