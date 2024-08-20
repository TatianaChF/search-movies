<template>
  <v-card width="800">
    <v-img :src="movieData.poster.url" width="200" />
    <v-container>
      <h3>{{movieData.name}}</h3>
      <p>Год выпуска: {{movieData.year}}</p>
      <p>{{movieData.description}}</p>
      <p>Длительность фильма: {{movieData.movieLength}} минут</p>
      <p>Рейтинг: {{movieData.rating.kp}}</p>
    </v-container>
  </v-card>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const route = useRoute();
const movieData = moviesStore.movies.find((value) => value.name === route.params.name);

</script>