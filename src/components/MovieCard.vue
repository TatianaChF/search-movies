<template>
  <v-container class="container-movie">
    <v-card class="container-movie__card" width="865">
      <v-img :src="movieData.poster.url" width="200" />
      <v-container class="container-movie__text">
        <h3>{{movieData.name}}</h3>
        <p>Год выпуска: {{movieData.year}}</p>
        <p>{{movieData.description}}</p>
        <p>Длительность фильма: {{movieData.movieLength}} минут</p>
        <p>Рейтинг: {{movieData.rating.kp}}</p>
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
  text-align: center;

  &__card {
    display: flex;
  }

  &__text {
    text-align: left;
  }
}
</style>