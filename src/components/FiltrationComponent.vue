<template>
  <v-card width="400" class="container">
    <v-container>
      <p>Год</p>
      <v-slider
        v-model="year"
        max-width="300"
        :max="maxYear"
        :min="minYear"
        step="1"
        thumb-label
      >
        <template v-slot:append>
          <v-text-field
            v-model="year"
            density="compact"
            style="width: 90px"
            type="number"
            hide-details
            single-line
          />
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
        thumb-label
      >
        <template v-slot:append>
          <v-text-field
            v-model="rating"
            density="compact"
            style="width: 90px"
            type="number"
            hide-details
            single-line
          />
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
        thumb-label
      >
        <template v-slot:append>
          <v-text-field
            v-model="lengthMovie"
            density="compact"
            style="width: 90px"
            type="number"
            hide-details
            single-line
          />
        </template>
      </v-slider>
    </v-container>
    <v-btn
      @click="
        moviesStore.filtartionMovies(year, rating, lengthMovie);
        $emit('changeFilterOpen');
      "
    >
      Применить</v-btn
    >
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const yearsMovies = [];
const ratingsMovies = [];
const lengthsMovies = [];
const filteredYearsMovies = [];
const filteredRatingMovies = [];
const filteredLengthMovies = [];

for (let i = 0; i < moviesStore.movies.length; i++) {
  yearsMovies.push(moviesStore.movies[i].year);
  ratingsMovies.push(moviesStore.movies[i].rating.kp);
  lengthsMovies.push(moviesStore.movies[i].movieLength);
}

for (let i = 0; i < moviesStore.filteredMovies.length; i++) {
  filteredYearsMovies.push(moviesStore.filteredMovies[i].year);
  filteredRatingMovies.push(moviesStore.filteredMovies[i].rating.kp);
  filteredLengthMovies.push(moviesStore.filteredMovies[i].movieLength);
}

const maxYear = Math.max(...yearsMovies);
const minYear = Math.min(...yearsMovies);
const year = ref(Math.max(...filteredYearsMovies));
const maxRating = Math.max(...ratingsMovies);
const minRating = Math.min(...ratingsMovies);
const rating = ref(Math.max(...filteredRatingMovies));
const maxLength = Math.max(...lengthsMovies);
const minLength = Math.min(...lengthsMovies);
const lengthMovie = ref(Math.max(...filteredLengthMovies));

console.log(maxYear);
console.log(year.value);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  margin-top: 50px;
}
</style>
