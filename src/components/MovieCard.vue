<template>
  <v-container class="container-movie">
    <v-card class="container-movie__card" width="1100">
      <v-img :src="movieData.poster.url" width="400" />
      <v-container class="container-movie__text">
        <h1>{{movieData.name}}</h1>
        <p v-if="movieData.alternativeName">Оригинальное название: {{ movieData.alternativeName }}</p>
        <p>Год выпуска: {{movieData.year}}</p>
        <p>Длительность фильма: {{movieData.movieLength}} минут</p>
        <p>Рейтинг: {{movieData.rating.kp}}</p>
        <p>{{movieData.description}}</p>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from "../store/movies";

const moviesStore = useMoviesStore();
const route = useRoute();
const movieData = moviesStore.movies.find((value) => value.name === route.params.name);

</script>

<style lang="scss" scoped>
.container-movie {

  &__card {
    display: flex;
    margin: auto;
  }

  &__text {
    text-align: left;
  }
}
</style>